"use server";

import { interventionTypes, site, timeframes } from "@/lib/site";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"lastName" | "firstName" | "phone" | "email" | "types" | "address" | "timeframe" | "message" | "consent", string>>;
  // Valeurs renvoyées pour pré-remplir le formulaire après une erreur (React réinitialise le formulaire).
  values?: Record<"lastName" | "firstName" | "phone" | "email" | "address" | "timeframe" | "message", string> & {
    types: string[];
    consent: boolean;
  };
};

const clean = (v: FormDataEntryValue | null, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  // Champ piège anti-spam : invisible pour les humains.
  if (clean(formData.get("website"))) return { status: "success" };

  const data = {
    lastName: clean(formData.get("lastName"), 80),
    firstName: clean(formData.get("firstName"), 80),
    phone: clean(formData.get("phone"), 30),
    email: clean(formData.get("email"), 120),
    address: clean(formData.get("address"), 250),
    timeframe: clean(formData.get("timeframe"), 60),
    message: clean(formData.get("message"), 4000),
    types: formData
      .getAll("types")
      .map((t) => String(t))
      .filter((t): t is (typeof interventionTypes)[number] => (interventionTypes as readonly string[]).includes(t)),
    consent: formData.get("consent") === "on",
  };

  const errors: QuoteState["errors"] = {};
  if (!data.lastName) errors.lastName = "Merci d'indiquer votre nom.";
  if (!data.firstName) errors.firstName = "Merci d'indiquer votre prénom.";
  if (!/^[+\d][\d\s.-]{8,}$/.test(data.phone)) errors.phone = "Numéro de téléphone invalide.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Adresse e-mail invalide.";
  if (data.types.length === 0) errors.types = "Sélectionnez au moins un type d'intervention.";
  if (!data.address) errors.address = "Merci d'indiquer l'adresse de l'intervention.";
  if (!(timeframes as readonly string[]).includes(data.timeframe)) errors.timeframe = "Choisissez une date souhaitée.";
  if (data.message.length < 10) errors.message = "Décrivez votre projet en quelques mots.";
  if (!data.consent) errors.consent = "Votre accord est nécessaire pour traiter la demande.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Certains champs sont à compléter.", errors, values: data };
  }

  const text = [
    `Nouvelle demande de devis — ${data.firstName} ${data.lastName}`,
    "",
    `Téléphone : ${data.phone}`,
    `E-mail : ${data.email}`,
    `Adresse de l'intervention : ${data.address}`,
    `Date souhaitée : ${data.timeframe}`,
    `Interventions : ${data.types.join(", ")}`,
    "",
    "Demande :",
    data.message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;

  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[devis] Envoi d'e-mail non configuré (RESEND_API_KEY / QUOTE_TO_EMAIL).\n" + text);
      return { status: "success" };
    }
    console.error("[devis] RESEND_API_KEY ou QUOTE_TO_EMAIL manquant.");
    return {
      status: "error",
      message: `L'envoi est momentanément indisponible. Appelez-nous au ${site.phone.display} ou écrivez à ${site.email}.`,
      values: data,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.QUOTE_FROM_EMAIL ?? "J Entreprise <devis@j-entreprise.fr>",
        to: to.split(",").map((s) => s.trim()),
        reply_to: data.email,
        subject: `Demande de devis — ${data.firstName} ${data.lastName} (${data.types.slice(0, 3).join(", ")})`,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error("[devis] Échec de l'envoi", err);
    return {
      status: "error",
      message: `Une erreur est survenue. Réessayez ou appelez-nous au ${site.phone.display}.`,
      values: data,
    };
  }

  return { status: "success" };
}
