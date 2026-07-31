import type { AnyLocale } from "../locales";
import type { Dictionary } from "../types";
import de from "./de";
import en from "./en";
import es from "./es";
import fr from "./fr";
import hr from "./hr";
import it from "./it";
import ja from "./ja";
import nl from "./nl";
import pt from "./pt";
import zh from "./zh";

const dictionaries: Record<AnyLocale, Dictionary> = {
  en,
  de,
  nl,
  es,
  it,
  hr,
  pt,
  zh,
  ja,
  fr,
};

export function getDictionary(locale: AnyLocale): Dictionary {
  return dictionaries[locale];
}
