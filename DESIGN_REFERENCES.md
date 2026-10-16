# Dr. Park Group — 레퍼런스와 적용 내용

## 사진과 제목의 비례: LPAS

[LPAS](https://lpas.com/)의 실제 홈페이지를 열고 로딩 후 화면을 확인했다. 건축 현장 영상/사진이 화면을 채우고, 작은 내비게이션과 좌하단 헤드라인이 그 위에 놓인다. 과도한 굵기나 장식보다 사진의 면적과 제목의 위치가 화면을 이끈다. [1]

Dr. Park에는 기존 복도 사진 위의 투명 내비게이션, 좌하단에 놓인 두 덩어리의 제목, 그 아래 설명과 회사별 탐색 바를 적용했다. 제목을 억지로 3줄로 나누거나 마지막 줄만 금색으로 강조하지 않는다. 현장 사진을 페이지 전체 높이에 맞춰 확대하던 방식과 별개로, 히어로에서는 이미지의 가로 비례를 기준으로 보여줘 복도의 시야가 더 드러나게 했다.

## 현장과 정보의 흐름: VintaBio

[VintaBio](https://vintabio.com/)의 실제 홈페이지는 소개 문구와 큰 현장 영상 뒤에 프로세스, 팀, 서비스 및 시설 정보가 이어진다. 화면에서 현장과 설명의 역할이 구분되는 점을 참고했다. [2]

Dr. Park의 창업자 소개는 읽기 쉬운 문단과 기록/연혁으로 정리하고, 세 법인은 기존 구분을 유지한 열린 3열 영역으로 배치했다. 시설 사진은 이중 프레임을 빼고 더 넓은 비례로 보여준다. VintaBio의 노란색, 수치, 공정 명칭과 사진은 가져오지 않는다.

## 정보 위계만 참고: Asimov

[Asimov](https://www.asimov.com/)의 실제 화면에서 사업 영역마다 제목, 설명, 다음 행동이 구분되는 구성을 확인했다. [3] 해당 사이트의 3D 그래픽과 보라색 그라데이션은 Dr. Park의 현장 중심 콘셉트와 맞지 않아 채택하지 않았다. 제조 분야는 추상 라인 아이콘 대신 실제 기존 설명과 상태, 제조 법인의 위계를 명확히 하는 데 집중했다.

## 보존한 내용

기존 ink/brass/off-white 계열, 현장 통배경과 좌우로 교차하는 패널, 콘텐츠 순서를 유지한다. 기존 EN/KO 문구와 회사별 허가·인증 목표 시제, 법인별 사이트와 문의 채널은 보존했다. 원본 `src/data/group.ts`와 현장 이미지 3개를 변경하지 않았으며 레퍼런스 사이트의 사진, 로고, 코드를 복제하지 않았다.

방금 적용했던 과도한 볼드 버전은 미리보기 커밋 `36ccca0`, GitHub PR의 `295c83e`로 각각 revert한 뒤 이 방향으로 재작업했다. main과 운영 배포는 변경하지 않았다.

## References

[1]: https://lpas.com/ "LPAS — Architecture and Interiors, 실제 홈페이지"
[2]: https://vintabio.com/ "VintaBio — Viral Vectors Made Accessible, 실제 홈페이지"
[3]: https://www.asimov.com/ "Asimov — Intelligent Design, 실제 홈페이지"

레퍼런스 발견 경로는 [Awwwards의 Architecture 목록](https://www.awwwards.com/websites/architecture/), [Durkan Group의 바이오 사례 목록](https://durkangroup.com/best-biotech-lifesciences-website-design/), [Webstacks의 바이오 사례 목록](https://www.webstacks.com/blog/biotech-website-design)이다. 목록의 요약만 사용하지 않고 위 세 실제 홈페이지의 화면을 직접 확인했다.
