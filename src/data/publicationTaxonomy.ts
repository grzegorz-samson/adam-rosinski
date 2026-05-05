export const publicationCategoryOrder = [
  "Monograph",
  "Journal article",
  "Book series editor",
  "Book chapter",
] as const;

export type PublicationCategory = (typeof publicationCategoryOrder)[number];

export const publicationCategoryLabels: Record<PublicationCategory, string> = {
  Monograph: "Monograph",
  "Journal article": "Journal article",
  "Book series editor": "Editorial work",
  "Book chapter": "Book chapter",
};

export function getPublicationMetaLabel(category: PublicationCategory, type: string): string {
  if (type === "Article / prototype study") {
    return "Prototype study";
  }

  if (type === "Conference proceedings article") {
    return "Proceedings article";
  }

  if (type === "Edited special issue / series" || type === "Edited volume") {
    return "Editorial work";
  }

  return publicationCategoryLabels[category] ?? type;
}
