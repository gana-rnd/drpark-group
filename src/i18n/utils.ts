// Dr. Park Group i18n 유틸리티 — GANA R&D 사이트와 같은 구조, 언어는 EN·KO 두 개.
import { en, type UIStrings } from './en';
import { ko } from './ko';

export const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ko', label: 'KO', name: '한국어' },
] as const;

export type LangCode = (typeof languages)[number]['code'];
export const defaultLang: LangCode = 'en';
export const langCodes: LangCode[] = languages.map((l) => l.code);

const translations: Record<LangCode, UIStrings> = { en, ko };

/** URL에서 언어 코드 추출 — /ko/... → ko, /... → en */
export function getLangFromUrl(url: URL): LangCode {
  const seg = url.pathname.split('/')[1];
  return (langCodes as string[]).includes(seg) ? (seg as LangCode) : defaultLang;
}

export function useTranslations(lang: LangCode): UIStrings {
  return translations[lang] ?? en;
}

/** 경로에 언어 prefix 적용 — 기본어(en)는 prefix 없음. 언어 홈은 '/ko/'처럼 슬래시로 끝난다. */
export function localizePath(path: string, lang: LangCode): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === '/' ? '/' : clean}`;
}

export function stripLangFromPath(pathname: string): string {
  const seg = pathname.split('/')[1];
  if ((langCodes as string[]).includes(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return rest || '/';
  }
  return pathname;
}

/** 번역 문자열 내 {placeholder} 치환 */
export function tpl(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
