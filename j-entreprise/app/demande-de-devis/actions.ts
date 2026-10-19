"use server";

import nodemailer from "nodemailer";
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
const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ");
const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

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

  const fields: [string, string][] = [
    ["Nom", `${data.firstName} ${data.lastName}`],
    ["Téléphone", data.phone],
    ["E-mail", data.email],
    ["Adresse de l'intervention", data.address],
    ["Date souhaitée", data.timeframe],
    ["Interventions", data.types.join(", ")],
  ];
  const text = [
    "Nouvelle demande de devis depuis le site J Entreprise",
    "",
    ...fields.map(([k, v]) => `${k} : ${v}`),
    "",
    "Demande :",
    data.message,
  ].join("\n");
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#1b1a18;max-width:640px">
<h2 style="font-weight:normal;margin:0 0 16px">Nouvelle demande de devis</h2>
<table cellpadding="6" style="border-collapse:collapse">${fields
    .map(([k, v]) => `<tr><td style="color:#5f594f;vertical-align:top">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
    .join("")}</table>
<p style="color:#5f594f;margin:20px 0 6px">Demande :</p>
<p style="white-space:pre-wrap;margin:0">${escapeHtml(data.message)}</p>
<p style="color:#a39d92;font-size:12px;margin-top:24px">Répondez directement à cet e-mail pour écrire au client.</p>
</div>`;

  const { SMTP_USER, SMTP_PASSWORD } = process.env;

  if (!SMTP_USER || !SMTP_PASSWORD) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[devis] SMTP non configuré (SMTP_USER / SMTP_PASSWORD).\n" + text);
      return { status: "success" };
    }
    console.error("[devis] SMTP_USER ou SMTP_PASSWORD manquant.");
    return {
      status: "error",
      message: `L'envoi est momentanément indisponible. Appelez-nous au ${site.phone.display} ou écrivez à ${site.email}.`,
      values: data,
    };
  }

  // SMTP OVH (MX Plan, Zimbra, Exchange) : ssl0.ovh.net, port 465 en SSL ou 587 en STARTTLS.
  const port = Number(process.env.SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "ssl0.ovh.net",
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      // L'expéditeur doit être la boîte OVH authentifiée, sinon le message est rejeté ou classé en spam.
      from: { name: "Site J Entreprise", address: SMTP_USER },
      to: process.env.QUOTE_TO_EMAIL ?? site.email,
      // Copie facultative (ex. pour tester l'envoi), plusieurs adresses séparées par des virgules.
      cc: process.env.QUOTE_CC_EMAIL || undefined,
      replyTo: { name: `${data.firstName} ${data.lastName}`, address: data.email },
      subject: oneLine(`Demande de devis — ${data.firstName} ${data.lastName} (${data.types.slice(0, 3).join(", ")})`),
      text,
      html,
    });
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
