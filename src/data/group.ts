// Dr. Park Group — 언어와 무관한 확정 사실만. 문구는 src/i18n/*.ts 에.
// 출처: docs/GANA_통합기획도.md(층별 시제) · 6사 전수분석 §3-6(허용·금지 연결) §10-5(팩트시트) · registrations.json(게시 33건 / 4개 관할)
//       2026-10-19 사용자 지시: 그룹 = 5개 회사(GANA R&D · GANA Cosmetic · Dr. Park CDMO · Dr. Park Pharmaceutical · NeuroDP Therapeutics)
// 규칙: 그룹 마스터 슬로건 미사용 · 층별 시제(피부·조직 완료형, 세포 진행형, 연구 회사는 "자기 사이트에서 소개") · 자격은 법인별 귀속 ·
//       생산용량 수치 미게시 · "하나의 기업집단"·지분 관계 표현 금지(§3-6) · "Since 2013" 미사용 · 개인 휴대폰·개인 이메일 미게재
//       Pharmaceutical·NeuroDP는 법인 실체 미확인(전수조사) → 공개 문구는 "founded by Dr. Park" 수준까지만.

export const group = {
  name: 'Dr. Park Group',
  site: {
    line1: '555 Dunchon-daero, Jungwon-gu',
    line2: 'Seongnam-si, Gyeonggi-do 13215, Republic of Korea',
    building: 'Seonil Technopia',
  },
};

export type CompanyId = 'ganarnd' | 'ganacosmetic' | 'drparkcdmo' | 'drparkpharma' | 'neurodp';

export type Company = {
  id: CompanyId;
  name: string;
  url: string;
  /** 표시용 도메인 */
  host: string;
  contactUrl: string;
  /** 법인 대표 채널 — 개인 번호·개인 메일 금지 */
  tel?: string;
  email?: string;
  /** 성남 제조 부지에서 일하는 회사인가 (연구 회사 둘은 아님) */
  onSite: boolean;
};

export const companies: Company[] = [
  { id: 'ganarnd', name: 'GANA R&D', url: 'https://ganarnd-rebranding.vercel.app', host: 'ganarnd.co.kr', contactUrl: 'https://ganarnd-rebranding.vercel.app/contact/', tel: '+82-31-733-0242', onSite: true },
  { id: 'ganacosmetic', name: 'GANA Cosmetic', url: 'https://gana-cosmetics.com', host: 'gana-cosmetics.com', contactUrl: 'https://gana-cosmetics.com', email: 'contact@gana-cosmetics.com', onSite: true },
  { id: 'drparkcdmo', name: 'Dr. Park CDMO', url: 'https://drpark-cdmo.com', host: 'drpark-cdmo.com', contactUrl: 'https://drpark-cdmo.com/pc/contact/contact01.php', tel: '+82-31-734-0077', onSite: true },
  { id: 'drparkpharma', name: 'Dr. Park Pharmaceutical', url: 'https://www.drpgt.com', host: 'drpgt.com', contactUrl: 'https://www.drpgt.com', onSite: false },
  { id: 'neurodp', name: 'NeuroDP Therapeutics', url: 'https://www.ndpgt.com', host: 'ndpgt.com', contactUrl: 'https://www.ndpgt.com', onSite: false },
];

export const byId = Object.fromEntries(companies.map((c) => [c.id, c])) as Record<CompanyId, Company>;

/** GANA R&D 등재 자료실 — CTA 링크 */
export const registrationsUrl = 'https://ganarnd-rebranding.vercel.app/market-access/';

/** 시설 홍보영상 공개 URL — 미정이면 빈 문자열(홈의 "영상 보기"가 링크 없는 라벨로 렌더됨). 완성본: OneDrive 바탕 화면 "닥터박 완성본.mp4" */
export const filmUrl = '';

/** 네 층 — 어느 회사가 만드는가/연구하는가. 문구·시제는 i18n makes.layers[i]. */
export const layers: { no: string; by: CompanyId[] }[] = [
  { no: '01', by: ['ganarnd', 'ganacosmetic'] },
  { no: '02', by: ['ganarnd'] },
  { no: '03', by: ['drparkcdmo'] },
  { no: '04', by: ['drparkpharma', 'neurodp'] },
];

/** 숫자 열 — 라벨은 i18n record.stats[i]. 카운트업은 세 자리 이하 정수에만. */
export const stats = [
  { n: '5', count: true },
  { n: '1', count: true },
  { n: '33', count: true },
  { n: '2014', count: false },
];
