// Dr. Park Group — 언어와 무관한 확정 사실만. 문구는 src/i18n/*.ts 에.
// 출처: docs/GANA_통합기획도.md(층별 시제) · GANA_각사별_리브랜딩_전략.md §0 · GANA_찰스_회신2_웹빌드.md ·
//       docs/source/2026-07-22_6사_전수분석_통합자료.md §3-6(허용·금지 연결) §10-5(팩트시트) · registrations.json(2026-09-04, 게시 33건 / 4개 관할)
// 규칙: 그룹 마스터 슬로건 미사용 · 층별 시제(피부·조직 완료형, 세포 진행형) · 자격은 법인별 귀속 · 생산용량 수치 미게시 ·
//       "하나의 기업집단"·지분 관계 표현 금지(§3-6) · "Since 2013" 미검증이라 미사용 · 개인 휴대폰·개인 이메일 미게재(F23)

export const group = {
  name: 'Dr. Park Group',
  site: {
    line1: '555 Dunchon-daero, Jungwon-gu',
    line2: 'Seongnam-si, Gyeonggi-do 13215, Republic of Korea',
    building: 'Seonil Technopia',
  },
};

export type CompanyId = 'ganarnd' | 'ganacosmetic' | 'drparkcdmo';

export type Company = {
  id: CompanyId;
  name: string;
  url: string;
  contactUrl: string;
  /** 법인 대표 채널 — 개인 번호·개인 메일 금지 */
  tel?: string;
  email?: string;
};

export const companies: Company[] = [
  {
    id: 'ganarnd',
    name: 'GANA R&D',
    url: 'https://ganarnd-rebranding.vercel.app',
    contactUrl: 'https://ganarnd-rebranding.vercel.app/contact/',
    tel: '+82-31-733-0242',
  },
  {
    id: 'ganacosmetic',
    name: 'GANA Cosmetic',
    url: 'https://gana-cosmetics.com',
    contactUrl: 'https://gana-cosmetics.com',
    email: 'contact@gana-cosmetics.com',
  },
  {
    id: 'drparkcdmo',
    name: 'Dr. Park CDMO',
    url: 'https://drpark-cdmo.com',
    contactUrl: 'https://drpark-cdmo.com/pc/contact/contact01.php',
    tel: '+82-31-734-0077',
  },
];

export const byId = Object.fromEntries(companies.map((c) => [c.id, c])) as Record<CompanyId, Company>;

/** GANA R&D 등재 자료실 — CTA 링크 */
export const registrationsUrl = 'https://ganarnd-rebranding.vercel.app/market-access/';

/** 세 층 — 어느 회사가 만드는가. 문구·시제는 i18n makes.layers[i]. */
export const layers: { no: string; by: CompanyId[] }[] = [
  { no: '01', by: ['ganarnd', 'ganacosmetic'] },
  { no: '02', by: ['ganarnd'] },
  { no: '03', by: ['drparkcdmo'] },
];

/** 숫자 행 — 라벨은 i18n record.stats[i]. 카운트업은 세 자리 이하 정수에만. */
export const stats = [
  { n: '3', count: true },
  { n: '1', count: true },
  { n: '33', count: true },
  { n: '2014', count: false },
];
