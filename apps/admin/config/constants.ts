import { env } from 'next-runtime-env';

export const locales = [
  'en-US',
  'cs-CZ',
  'de-DE',
  'es-ES',
  'es-MX',
  'fi-FI',
  'fr-FR',
  'hi-IN',
  'hu-HU',
  'ja-JP',
  'ko-KR',
  'no-NO',
  'pl-PL',
  'pt-BR',
  'ro-RO',
  'ru-RU',
  'th-TH',
  'tr-TR',
  'uk-UA',
  'vi-VN',
  'zh-CN',
  'zh-TW',
];

export const NEXT_PUBLIC_DEFAULT_LANGUAGE = env('NEXT_PUBLIC_DEFAULT_LANGUAGE') || locales[0];

export const NEXT_PUBLIC_SITE_URL = env('NEXT_PUBLIC_SITE_URL');
export const NEXT_PUBLIC_API_URL = env('NEXT_PUBLIC_API_URL');

export const NEXT_PUBLIC_DEFAULT_USER_EMAIL = env('NEXT_PUBLIC_DEFAULT_USER_EMAIL');
export const NEXT_PUBLIC_DEFAULT_USER_PASSWORD = env('NEXT_PUBLIC_DEFAULT_USER_PASSWORD');
