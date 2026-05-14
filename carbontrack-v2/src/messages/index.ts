import en from "./en";
import pt from "./pt";

export const messages = {
  pt,
  en,
};

export type Locale = keyof typeof messages;
export type Messages = typeof pt;

export const locales: Locale[] = ["pt", "en"];
