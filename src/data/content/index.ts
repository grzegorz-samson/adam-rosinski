import { content as en } from "./en";
import { content as pl } from "./pl";

export type Locale = "en" | "pl";
export type ContentModel = typeof en;

export const localizedContent = {
  en,
  pl,
} satisfies Record<Locale, ContentModel>;

export function getContent(locale: Locale = "en"): ContentModel {
  return localizedContent[locale];
}
