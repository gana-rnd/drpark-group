// Dr. Park Group 마크 — 사용자가 고른 DP 구도를 기하로 재구성:
//   D = 왼쪽 평면 반원 디스크, 카운터는 P 스템 왼쪽 가장자리를 중심으로 한 원(스템이 오른쪽 반을 덮어 반원으로 남음)
//   P = 스템 + 오른쪽이 완전히 둥근 스타디움 볼, 카운터는 가로 슬롯
// 마스크 방식(배경 투명). 출력: 마크(네이비·화이트·블랙), 가로 락업, 세로 락업, 파비콘, PNG.
const fs = require('fs');
const sharp = require('D:/ganarnd-rebranding/node_modules/sharp');
const OUT = process.argv[2] || __dirname + '/../public/images/brand'; fs.mkdirSync(OUT, { recursive: true });
const NAVY = '#0e2139', BRASS = '#9a8050', INK = '#16222c';
const FONT = "Manrope, 'Segoe UI', Helvetica, Arial, sans-serif";

// 마크 지오메트리 (viewBox 0 0 120 100)
// D는 왼쪽 평면의 반타원(rx가 ry보다 커서 아래쪽 호가 P 스템 오른쪽으로 비어져 나온다 = 맞물림),
// 카운터는 스템 왼쪽 가장자리에 평면을 둔 반원, P 볼은 오른쪽이 완전히 둥근 스타디움, 카운터는 가로 슬롯
// D = 짧은 평면 스템(dLeft..dC) + 반원(중심 dC, 반지름 dR). 스템은 반원 중심보다 오른쪽에 서서 아래쪽 호가 스템 밖으로 살짝 비어져 나온다.
// D = 모서리가 큰 둥근 사각형(dLeft..dLeft+dW, 모서리 dRx). 오른쪽 아래 모서리가 P 볼 아래로 드러나 맞물린다.
const G = { dLeft: 6, dW: 64, dRx: 36, cy: 50, dR: 46, cutR: 20, stemL: 44, stemW: 15, bowlR: 108, bowlTop: 4, bowlH: 50, slot: { x: 64, y: 19, w: 24, h: 20, r: 10 } };
function markShapes(id) {
  const { dLeft, dC, cy, dR, cutR, stemL, stemW, bowlR, bowlTop, bowlH, slot } = G;
  const bowlRad = bowlH / 2;
  return `<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="100">
    <rect x="${dLeft}" y="${cy - dR}" width="${G.dW}" height="${dR * 2}" rx="${G.dRx}" fill="#fff"/>
    <path d="M ${stemL} ${cy - cutR} A ${cutR} ${cutR} 0 0 0 ${stemL} ${cy + cutR} Z" fill="#000"/>
    <rect x="${stemL}" y="${cy - dR}" width="${stemW}" height="${dR * 2}" fill="#fff"/>
    <path d="M ${stemL} ${bowlTop} H ${bowlR - bowlRad} A ${bowlRad} ${bowlRad} 0 0 1 ${bowlR - bowlRad} ${bowlTop + bowlH} H ${stemL} Z" fill="#fff"/>
    <rect x="${slot.x}" y="${slot.y}" width="${slot.w}" height="${slot.h}" rx="${slot.r}" fill="#000"/>
  </mask>`;
}
const markSvg = (color, id = 'm') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="120" height="100">
  <defs>${markShapes(id)}</defs>
  <rect width="120" height="100" fill="${color}" mask="url(#${id})"/>
</svg>`;
const markGroup = (color, id, x, y, s) => `<g transform="translate(${x},${y}) scale(${s})"><defs>${markShapes(id)}</defs><rect width="120" height="100" fill="${color}" mask="url(#${id})"/></g>`;

// 가로 락업: 마크 + 가는 워드마크. 글자는 Manrope 500, 자간 -0.02em. 브라스 짧은 선은 "Dr. Park"과 "Group" 사이가 아니라 아래 서브라인용.
function lockupH(markColor, textColor, bg, sub) {
  const W = 560, H = 120;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  ${bg ? `<rect width="${W}" height="${H}" fill="${bg}"/>` : ''}
  ${markGroup(markColor, 'mh', 0, 10, 1)}
  <text x="150" y="${sub ? 60 : 70}" font-family="${FONT}" font-size="46" font-weight="500" letter-spacing="-1.2" fill="${textColor}">Dr. Park Group</text>
  ${sub ? `<text x="152" y="90" font-family="${FONT}" font-size="12.5" font-weight="700" letter-spacing="3.4" fill="${BRASS}">${sub}</text>` : ''}
</svg>`;
}
// 세로 락업: 마크 위, 워드마크 아래 가운데
function lockupV(markColor, textColor, bg) {
  const W = 320, H = 240;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  ${bg ? `<rect width="${W}" height="${H}" fill="${bg}"/>` : ''}
  ${markGroup(markColor, 'mv', 100, 20, 1)}
  <text x="160" y="190" text-anchor="middle" font-family="${FONT}" font-size="34" font-weight="500" letter-spacing="-0.8" fill="${textColor}">Dr. Park Group</text>
</svg>`;
}
// 파비콘: 네이비 둥근 사각 위 흰 마크
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="12" fill="${NAVY}"/>
  ${markGroup('#ffffff', 'mf', 8, 10, 0.4)}
</svg>`;

(async () => {
  const files = {
    'drpark-group-mark.svg': markSvg(NAVY), 'drpark-group-mark-white.svg': markSvg('#ffffff'), 'drpark-group-mark-black.svg': markSvg('#000000'),
    'drpark-group-lockup.svg': lockupH(NAVY, INK, null, ''), 'drpark-group-lockup-sub.svg': lockupH(NAVY, INK, null, 'GANA R&amp;D · GANA COSMETIC · DR. PARK CDMO · PHARMACEUTICAL · NEURODP'),
    'drpark-group-lockup-on-navy.svg': lockupH('#ffffff', '#ffffff', NAVY, ''), 'drpark-group-lockup-stacked.svg': lockupV(NAVY, INK, null),
    'drpark-group-lockup-stacked-on-navy.svg': lockupV('#ffffff', '#ffffff', NAVY), 'favicon.svg': favicon,
  };
  for (const [n, s] of Object.entries(files)) fs.writeFileSync(`${OUT}/${n}`, s);
  // PNG
  await sharp(Buffer.from(markSvg(NAVY))).resize(1024, 854).png().toFile(`${OUT}/drpark-group-mark-1024.png`);
  await sharp(Buffer.from(lockupH(NAVY, INK, '#ffffff', ''))).resize(2240, 480).png().toFile(`${OUT}/drpark-group-lockup-2240.png`);
  await sharp(Buffer.from(favicon)).resize(512, 512).png().toFile(`${OUT}/favicon-512.png`);

  // 미리보기 시트
  const P = (svg, w, h) => sharp(Buffer.from(svg)).resize(w, h).png().toBuffer();
  const comps = [
    { input: await P(markSvg(NAVY), 360, 300), left: 30, top: 30 },
    { input: await P(lockupH(NAVY, INK, '#ffffff', ''), 560, 120), left: 420, top: 40 },
    { input: await P(lockupH(NAVY, INK, '#ffffff', 'GANA R&amp;D · GANA COSMETIC · DR. PARK CDMO · PHARMACEUTICAL · NEURODP'), 560, 120), left: 420, top: 170 },
    { input: await P(lockupH('#ffffff', '#ffffff', NAVY, ''), 560, 120), left: 420, top: 300 },
    { input: await P(lockupV(NAVY, INK, '#ffffff'), 320, 240), left: 30, top: 360 },
    { input: await P(lockupV('#ffffff', '#ffffff', NAVY), 320, 240), left: 370, top: 360 },
    { input: await P(favicon, 128, 128), left: 720, top: 440 }, { input: await P(favicon, 64, 64), left: 870, top: 504 }, { input: await P(favicon, 32, 32), left: 950, top: 536 }, { input: await P(favicon, 16, 16), left: 1000, top: 552 },
    { input: await P(markSvg(NAVY), 96, 80), left: 720, top: 630 }, { input: await P(markSvg(NAVY), 48, 40), left: 830, top: 670 }, { input: await P(markSvg(NAVY), 24, 20), left: 890, top: 690 }, { input: await P(markSvg(NAVY), 16, 14), left: 925, top: 696 },
    { input: Buffer.from(`<svg width="1100" height="740"><text x="720" y="430" font-size="13" font-family="monospace" fill="#666">favicon 128 / 64 / 32 / 16</text><text x="720" y="620" font-size="13" font-family="monospace" fill="#666">mark 96 / 48 / 24 / 16</text></svg>`), left: 0, top: 0 },
  ];
  await sharp({ create: { width: 1100, height: 740, channels: 3, background: '#f2f2f2' } }).composite(comps).jpeg({ quality: 92 }).toFile(`${OUT}/preview.jpg`);
  console.log('ok', Object.keys(files).length, 'svg');
})();
