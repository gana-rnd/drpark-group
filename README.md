# Dr. Park Group — 그룹 게이트웨이 사이트

4사이트 계획의 ③. Astro 5 정적 사이트, EN(기본) + KO. GANA R&D 사이트(`D:\ganarnd-rebranding`)와 같은 디자인 토큰·모션·컴포넌트 구조.

```
npm run dev      # http://localhost:4321  (dev.cmd 는 4500 포트로 브라우저까지 연다)
npm run build    # dist/
vercel --prod --yes   # 배포 (vercel.json 의 framework: astro 필수)
```

## 구조

- `src/data/group.ts` — 언어와 무관한 확정 사실(회사 URL·법인 채널·층 배치·숫자). **문구는 여기 없다.**
- `src/i18n/en.ts` — 모든 문구의 원본. `ko.ts`는 같은 키 구조.
- `src/components/HomePage.astro` — 홈 본문. `pages/index.astro`(EN)와 `pages/ko/index.astro`(KO)가 같은 컴포넌트를 렌더.
- 페이지는 하나(홈 + 404). 내비는 앵커(#founder · #makes · #companies · #site · #contact).

## 카피 규칙 (근거: docs/GANA_통합기획도.md · 6사 전수분석 §3-6 · 팩트시트 §10-5)

- 그룹은 **"세 회사가 함께 쓰는 이름"**. "하나의 기업집단"·지분 관계·subsidiary 표현 금지.
- 층별 시제: 피부·조직 = 완료형(만들었고 허가받았다) / 세포·유전자 = 진행형(지었다, 인증은 2026년 목표). 세 층을 하나의 주어로 잇지 않는다. 그룹 마스터 슬로건 미사용.
- 자격·등재는 **보유 법인 이름 아래**에만. 생산용량 수치(5,000L / 200,000L) 미게시. "Since 2013" 미검증이라 미사용.
- "외부 투자 없이 단독 창업"은 Dr. Park CDMO에 한정(자사 진술). 다른 회사로 확대 금지.
- 개인 휴대폰·개인 이메일 미게재. 그룹 대표 채널은 없고, 문의는 회사별 법인 채널로 라우팅.

## 2026-10-08 v2 — Figma 레이아웃 스터디 이식

- 기준 디자인: Figma https://www.figma.com/design/vpuLdiUddsPM1J5u8NXC3s — "v2 — Dr. Park Group Home" 데스크톱(1440)·모바일(390) 프레임. v1(RRE Ventures 레이아웃 그대로)은 비교용으로 같은 파일 왼쪽에 남아 있다.
- 구조: 흰 헤더 바 → 히어로(공장 통배경, 헤드라인 좌하·소개 우상) → [흰 패널·우] 창업자 + 숫자 2(33·2014) + 연혁 → [다크 패널·좌] 세 층 → [흰 패널·우] 회사 카드 3 → [전폭·가운데] 시설 영상 → [다크 패널·좌] 문의 라우팅 + 등재 CTA → 네이비 푸터. 구 "05 한 부지" 섹션은 푸터 주소로 흡수, 인용 밴드는 없음(실제 발언 전까지 금지).
- 통배경: `public/images/bg-factory.webp`(1440×4420)·`bg-factory-m.webp`(390×3000). Dr. Park 공장 촬영 스틸 4장(복도·바이오리액터 열·정제 스키드·DynaSpin)을 세로로 이어 붙여 다크 그레이딩한 합성본. 원본 스틸은 `D:\ganarnd-rebranding\images\stills-video\보정본`. `global.css`의 `body.has-hero`가 `cover / center top`으로 깐다.
- 팔레트: `tokens.css`를 GANA R&D 현행 토큰(ink #16222c · brass #9a8050 · band #e7ebe8 · navy #0e2139 · on-dark #f7f9f8)으로 교체. 구 파랑 액센트 폐기. 제목은 Manrope 300(Light), 라벨은 브라스 대문자 자간, 버튼은 점선 브래킷(`.bracket`).
- 패널 시스템(`HomePage.astro`의 `.panel`): 1100px 이상에서 폭 `100% - --strip(120px)`, `.right`는 왼쪽 띠, `.left`는 오른쪽 띠. 그 아래 폭에서는 전폭.
- 시설 영상 썸네일 `public/images/film-thumb.webp`는 보정 없이 영상 원색 그대로(사용자 지시). 영상 공개 URL은 `group.ts`의 `filmUrl`(빈 문자열이면 "영상 보기"가 링크 없는 라벨로 렌더).
- 워드마크는 로고 확정 전 임시(잉크 사각형 + 대문자 텍스트). 창업자 포트레이트 슬롯은 이 레이아웃에서 빠져 있음 — 촬영 후 창업자 패널에 추가.
## 공개 전 확인·교체

- 연혁의 법인 설립 연도(2014 / 2017 / 2019)는 기업 DB 기준 — 등기부와 대조 후 확정.
- 창업자 포트레이트 슬롯(샷리스트 6-1) — 촬영 후 `PhotoSlot`에 `src` 지정.
- GANA R&D 링크가 Vercel 프리뷰 URL — ganarnd.co.kr 컷오버 후 교체 (`group.ts`).
- 등재 건수 33은 GANA R&D `registrations.json`(2026-09-04)과 맞춘 상수 — R&D 데이터 바뀌면 `group.ts` stats 갱신.
- 도메인 결정(drparkgroup.com 등) 후 `astro.config.mjs` site · `public/robots.txt`.
