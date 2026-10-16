import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dr. Park Group — 그룹 게이트웨이 (4사이트 계획의 ③)
// 도메인 미정 (drparkgroup.com / drpark-group.com / drparkbio.com 가용, 2026-08-28 조회). 확정 전까지 Vercel 프리뷰 URL.
export default defineConfig({
  site: 'https://drparkgroup.com',
  vite: {
    server: { allowedHosts: ['.manus.computer'] },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ko: 'ko' } },
    }),
  ],
});
