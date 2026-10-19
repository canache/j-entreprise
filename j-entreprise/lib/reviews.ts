// Avis Google à reporter ici dès que la fiche établissement est validée.
// Tant que la liste est vide, la page d'accueil affiche un encart Instagram à la place.
export type Review = { author: string; city?: string; rating: 1 | 2 | 3 | 4 | 5; text: string };

export const reviews: Review[] = [];
