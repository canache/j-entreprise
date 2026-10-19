"use client";

import Link from "next/link";
import { useActionState } from "react";
import { domains } from "@/lib/domains";
import { interventionTypes, timeframes } from "@/lib/site";
import { submitQuote, type QuoteState } from "./actions";

const initialState: QuoteState = { status: "idle" };

// Regroupe les cases à cocher par domaine, dans l'ordre de la liste du client.
const groups = [
  { title: domains[0].name, items: interventionTypes.slice(0, 8) },
  { title: domains[1].name, items: interventionTypes.slice(8, 12) },
  { title: domains[2].name, items: interventionTypes.slice(12, 16) },
];

const inputClass =
  "mt-2 w-full border border-sand bg-white px-4 py-3.5 text-ink placeholder:text-mist/80 transition focus:border-gold-dark focus:outline-none focus:ring-1 focus:ring-gold-dark aria-[invalid=true]:border-red-700";

function Error({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-2 text-sm text-red-800">
      {msg}
    </p>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete,
  error,
  placeholder,
  defaultValue,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[0.78rem] uppercase tracking-[0.16em] text-stone">
        {label} <span className="text-gold-dark">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputClass}
      />
      <Error id={`${name}-error`} msg={error} />
    </div>
  );
}

export function QuoteForm() {
  const [state, action, pending] = useActionState(submitQuote, initialState);
  const e = state.errors ?? {};
  const v = state.values;

  if (state.status === "success") {
    return (
      <div role="status" className="border border-gold/50 bg-white/70 p-10 text-center md:p-14">
        <p className="text-gold-gradient font-serif text-6xl">Merci</p>
        <h2 className="mt-6 font-serif text-3xl text-ink">Votre demande a bien été envoyée</h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-stone">
          Nous revenons vers vous très rapidement pour échanger sur votre projet. À très bientôt !
        </p>
        <Link href="/" className="mt-8 inline-block text-sm text-gold-dark underline underline-offset-4">
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  return (
    <form key={JSON.stringify(v ?? {})} action={action} noValidate className="space-y-12">
      {state.status === "error" && state.message ? (
        <p role="alert" className="border-l-2 border-red-800 bg-red-50 px-5 py-4 text-sm text-red-900">
          {state.message}
        </p>
      ) : null}

      <fieldset>
        <legend className="font-serif text-2xl text-ink">
          <span className="mr-3 text-gold-dark">01</span>Vos coordonnées
        </legend>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Field name="lastName" defaultValue={v?.lastName} label="Nom" autoComplete="family-name" error={e.lastName} />
          <Field name="firstName" defaultValue={v?.firstName} label="Prénom" autoComplete="given-name" error={e.firstName} />
          <Field name="phone" defaultValue={v?.phone} label="Téléphone" type="tel" autoComplete="tel" error={e.phone} placeholder="06 12 34 56 78" />
          <Field name="email" defaultValue={v?.email} label="E-mail" type="email" autoComplete="email" error={e.email} placeholder="vous@exemple.fr" />
        </div>
      </fieldset>

      <fieldset aria-describedby={e.types ? "types-error" : undefined}>
        <legend className="font-serif text-2xl text-ink">
          <span className="mr-3 text-gold-dark">02</span>Type d&apos;intervention souhaitée
        </legend>
        <p className="mt-2 text-sm text-stone">Cochez autant de cases que nécessaire.</p>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <p className="mb-3 text-[0.7rem] uppercase tracking-[0.2em] text-gold-dark">{g.title}</p>
              <ul className="space-y-2">
                {g.items.map((t) => (
                  <li key={t}>
                    <label className="flex cursor-pointer items-center gap-3 border border-sand bg-white px-4 py-3 text-[0.95rem] text-ink transition hover:border-gold-dark has-[:checked]:border-gold-dark has-[:checked]:bg-gold/10">
                      <input
                        type="checkbox"
                        name="types"
                        value={t}
                        defaultChecked={v?.types.includes(t)}
                        className="h-4 w-4 accent-[#8f723f]" />
                      {t}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Error id="types-error" msg={e.types} />
      </fieldset>

      <fieldset>
        <legend className="font-serif text-2xl text-ink">
          <span className="mr-3 text-gold-dark">03</span>Votre projet
        </legend>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Field
            name="address"
            defaultValue={v?.address}
            label="Adresse de l'intervention"
            autoComplete="street-address"
            error={e.address}
            placeholder="Rue, code postal, ville"
          />
          <div>
            <label htmlFor="timeframe" className="text-[0.78rem] uppercase tracking-[0.16em] text-stone">
              Date souhaitée d&apos;intervention <span className="text-gold-dark">*</span>
            </label>
            <select
              id="timeframe"
              name="timeframe"
              required
              defaultValue={v?.timeframe ?? ""}
              aria-invalid={e.timeframe ? true : undefined}
              aria-describedby={e.timeframe ? "timeframe-error" : undefined}
              className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%238f723f%22 fill=%22none%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10`}
            >
              <option value="" disabled>
                Choisir…
              </option>
              {timeframes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <Error id="timeframe-error" msg={e.timeframe} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="text-[0.78rem] uppercase tracking-[0.16em] text-stone">
              Votre demande <span className="text-gold-dark">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              defaultValue={v?.message}
              placeholder="Décrivez votre projet : nature des travaux, surfaces, budget envisagé, contraintes particulières…"
              aria-invalid={e.message ? true : undefined}
              aria-describedby={e.message ? "message-error" : undefined}
              className={inputClass}
            />
            <Error id="message-error" msg={e.message} />
          </div>
        </div>
      </fieldset>

      {/* Champ piège anti-spam */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-6 border-t border-sand pt-8">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-stone">
          <input
            type="checkbox"
            name="consent"
            required
            defaultChecked={v?.consent}
            aria-describedby={e.consent ? "consent-error" : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-[#8f723f]"
          />
          <span>
            J&apos;accepte que mes informations soient utilisées pour traiter ma demande et être recontacté(e), et
            qu&apos;elles soient transmises aux artisans consultés pour mon projet. Voir la{" "}
            <Link href="/politique-de-confidentialite" className="text-gold-dark underline underline-offset-2">
              politique de confidentialité
            </Link>
            .
          </span>
        </label>
        <Error id="consent-error" msg={e.consent} />
        <button
          type="submit"
          disabled={pending}
          className="bg-gold-gradient inline-flex w-full items-center justify-center gap-3 px-8 py-4 text-[0.8rem] font-medium uppercase tracking-[0.22em] text-ink transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Envoi en cours…" : "Envoyer ma demande de devis"}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
