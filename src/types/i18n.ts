export type Languages = 'en';

export interface I18nHero {
  title: string;
  authentication: string;
  password_less: string;
}

export interface I18nRequirements {
  title: string;
  biometrics: string;
  android: string;
  ios: string;
}

export interface I18nAnchor {
  title: string;
  go_to: string;
  create: string;
  follow: string;
  reach_out: string;
  internet_identity: string;
}

export interface I18n {
  lang: Languages;
  hero: I18nHero;
  requirements: I18nRequirements;
  anchor: I18nAnchor;
}
