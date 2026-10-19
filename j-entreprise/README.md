# J Entreprise — site vitrine

Site du courtier en travaux **J Entreprise** (La Rochelle, Charente-Maritime). Next.js 16 (App Router, Cache Components) + Tailwind CSS 4. Toutes les pages sont générées statiquement.

```bash
npm run dev     # développement : http://localhost:3000
npm run build   # build de production
npm run start   # serveur de production
```

## Arborescence

| Page | Route |
| --- | --- |
| Accueil | `/` |
| J Entreprise | `/j-entreprise` |
| Domaines d'intervention | `/domaines-intervention` + `/travaux-interieurs`, `/travaux-exterieurs`, `/amenagement-exterieur` |
| Mon accompagnement (avec comparatif) | `/mon-accompagnement` |
| Conseils (blog) | `/conseils` + `/conseils/[slug]` |
| FAQ | `/faq` |
| Demande de devis | `/demande-de-devis` |
| Page locale SEO | `/courtier-travaux-la-rochelle` |
| Mentions légales, confidentialité | `/mentions-legales`, `/politique-de-confidentialite` (noindex) |

## Où modifier le contenu

- `lib/site.ts` — coordonnées, zones d'intervention, liste des prestations du formulaire, menu.
- `lib/domains.ts` — les 3 domaines et leurs 16 prestations (textes, meta title/description, FAQ).
- `lib/articles.ts` — articles de blog (ajouter un objet = nouvel article, sitemap mis à jour automatiquement).
- `lib/faq.ts` — questions fréquentes.
- `lib/reviews.ts` — avis Google : tant que la liste est vide, l'accueil affiche un encart Instagram à la place.

## À compléter avant la mise en ligne

Tous les points sont marqués `TODO` dans le code.

1. **Nom de domaine** définitif dans `lib/site.ts` (coordonnées, adresse du siège et SIRET sont à jour).
2. **Modèle de rémunération** : le site indique que l'accompagnement est gratuit pour le client (rémunération par l'artisan retenu). À valider avec le client (`lib/faq.ts`, `app/mon-accompagnement/page.tsx`).
3. **Photo d'accueil** : `public/images/maison-bois-foret-coucher-soleil.jpg` (1870 px, fournie par le client). Vérifier que la licence d'utilisation est bien acquise.
4. **Mentions légales** : nom de l'entrepreneur (directeur de la publication), registre d'immatriculation, hébergeur.
5. **Parcours du fondateur** sur `/j-entreprise` (expérience, date de création) : renforce la crédibilité et le SEO.
6. **Avis Google** à ajouter dans `lib/reviews.ts` dès que la fiche établissement est validée.

## Formulaire de devis

Envoi par e-mail via l'API [Resend](https://resend.com) (aucune dépendance npm). Variables d'environnement :

```
RESEND_API_KEY=re_xxx
QUOTE_TO_EMAIL=jordan.courtier.travaux@gmail.com        # plusieurs adresses séparées par des virgules
QUOTE_FROM_EMAIL="J Entreprise <devis@j-entreprise.fr>"   # domaine vérifié dans Resend
```

Sans configuration : en développement, la demande est affichée dans la console ; en production, un message invite l'utilisateur à appeler ou écrire.

## SEO en place

- Title et meta description uniques par page, canonical, Open Graph et Twitter (`lib/seo.ts`).
- Un seul H1 par page, hiérarchie H2/H3.
- JSON-LD : `HomeAndConstructionBusiness` (zones desservies), `Service`, `FAQPage`, `BlogPosting`, `BreadcrumbList`.
- `sitemap.xml` et `robots.txt` générés automatiquement.
- Maillage interne : menu, pied de page, liens entre domaines, articles et pages de conversion.
- Ciblage local : La Rochelle + agglomération (Lagord, Périgny, Aytré, Dompierre-sur-Mer…) et villes des zones secondaires.

Après la mise en ligne : déclarer le site dans Google Search Console, soumettre le sitemap, et lier le site à la fiche Google Business Profile.
