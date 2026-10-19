import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dr. Park Group — 그룹 게이트웨이 (4사이트 계획의 ③)
// 대표 도메인 drparkgroup.com (2026-10-20 가비아 등록, Vercel NS).
export default defineConfig({
  site: 'https://drparkgroup.com',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ko: 'ko' } },
    }),
  ],
});
