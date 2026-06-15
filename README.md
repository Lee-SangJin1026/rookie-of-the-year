# Rookie of the Year - 종목 노트 & 블로그

종목별 생각/테제/테마/중요도를 마크다운 노트로 기록하고, 자동으로 모아서
정적 웹사이트(블로그 형태)로 보여주는 프로젝트입니다.

## 폴더 구조

```
rookie-of-the-year/
├── notes/                  # 종목별 노트 (마크다운)
│   ├── _template.md        # 새 노트 작성용 템플릿 (사이트에는 표시되지 않음)
│   ├── SK하이닉스.md
│   ├── OCI홀딩스.md
│   └── 한화비전.md
└── site/                   # Astro 정적 사이트 (노트를 읽어서 화면에 표시)
```

---

## 0. (최초 1회) Node.js 설치

이 사이트는 Node.js라는 프로그램이 필요합니다. 현재 PC에는 설치되어 있지 않으니,
아래 순서로 먼저 설치해주세요.

1. https://nodejs.org 접속
2. "LTS" 버전 다운로드 (왼쪽 큰 버튼)
3. 다운로드된 설치 파일 실행 → 계속/다음만 눌러서 설치 완료
4. 설치 후 **터미널(PowerShell)을 새로 열어서** 아래 명령어로 확인

   ```powershell
   node -v
   npm -v
   ```

   버전 번호가 출력되면 설치 완료입니다.

설치 후, `site` 폴더에서 아래 명령어를 **한 번만** 실행해서 필요한 패키지를 설치합니다.

```powershell
cd "C:\Users\poach\OneDrive\바탕 화면\dart\rookie-of-the-year\site"
npm install
```

---

## 1. 로컬에서 사이트 미리보기

```powershell
cd "C:\Users\poach\OneDrive\바탕 화면\dart\rookie-of-the-year\site"
npm run dev
```

터미널에 나오는 주소(보통 `http://localhost:4321`)를 브라우저에서 열면
사이트를 바로 볼 수 있습니다. 노트 파일을 수정하면 화면이 자동으로 새로고침됩니다.

종료할 때는 터미널에서 `Ctrl + C`.

---

## 2. 새 노트 추가하는 방법

### 방법 A. 스크립트로 자동 생성 (추천)

```powershell
cd "C:\Users\poach\OneDrive\바탕 화면\dart\rookie-of-the-year\site"
npm run new-note "삼성전자"
```

→ `notes/삼성전자.md` 파일이 템플릿 내용으로 자동 생성됩니다.
이 파일을 열어서 아래 항목들을 채워주세요.

### 방법 B. 직접 복사

`notes/_template.md` 파일을 복사해서 `notes/종목명.md` 형태로 이름을 바꾼 뒤
내용을 채워도 됩니다.

### 작성해야 하는 항목 (frontmatter)

```yaml
---
title: "종목명"
ticker: "종목코드"        # 선택사항
type: "1번코어"            # 아래 4가지 중 하나
category: "이체"           # 이체 / 삼체 중 하나
importance: "high"         # high(상) / mid(중) / low(하)
themes: ["테마1", "테마2"]  # 자유롭게 태그 작성
date: 2026-06-15
stop_loss: "-15%"          # 선택사항
sell_trigger: "..."        # 선택사항
summary: "한 줄 요약"       # 선택사항
---
```

**type (포트폴리오 분류, 4가지 중 1개 선택)**

| 값 | 의미 |
|---|---|
| `1번코어` | 포트폴리오의 중심축, 길게 들고 가는 종목 (예: 전기전자/낙폭과대, 통신) |
| `2번PERxEPS` | 어닝 서프라이즈 + 밸류에이션 리레이팅이 동시에 오는 종목 |
| `3번주도주` | 단기 모멘텀/테마성 종목 (예: 태양광, 로보틱스, 우주) |
| `4번헷지` | 시장 하락 방어용 (예: 방산, 유가, 인버스 ETF) |

**category (문제 유형, 2가지 중 1개 선택)**

| 값 | 의미 | 손절폭 | 매도 트리거 |
|---|---|---|---|
| `이체` | 답이 비교적 명확하고 시간을 들이면 보상받는 종목 | -12~15% | 펀더멘털 변화(실적 미스, 섹터 붕괴) 시에만 매도 검토 |
| `삼체` | 정답이 없고 예측이 어려운 종목 (모호한 모멘텀/정책 의존) | -8% | 가격 + 모멘텀 동시 점검 |

**importance**: `high`(빨강) / `mid`(주황) / `low`(회색) - 카드에 색깔 뱃지로 표시됩니다.

frontmatter 아래쪽에는 자유롭게 마크다운으로 테제/근거/리스크 등을 작성하면
카드를 클릭했을 때 전체 내용이 표시됩니다.

> ⚠️ `notes/_template.md` 파일은 이름이 `_`로 시작하기 때문에 사이트 목록에는
> 표시되지 않습니다. 그대로 두세요.

새 노트를 추가한 뒤 `npm run dev` 화면을 보면 카드가 자동으로 추가되어 있습니다.

---

## 3. GitHub에 올리기 (Private 리포)

### 3-1. 로컬 git 초기화 & 첫 커밋

(이미 완료되어 있다면 이 단계는 건너뛰어도 됩니다 - 아래에서 자동으로 진행해 둡니다)

### 3-2. GitHub에 Private 리포 만들기

**GitHub CLI(`gh`)가 설치되어 있는 경우** (현재 PC에는 미설치 상태입니다. 설치하려면
https://cli.github.com 에서 다운로드):

```powershell
gh auth login          # 처음 한 번만, 브라우저로 로그인
cd "C:\Users\poach\OneDrive\바탕 화면\dart\rookie-of-the-year"
gh repo create rookie-of-the-year --private --source=. --remote=origin --push
```

이 명령 한 번으로 Private 리포 생성 + 연결 + 첫 push가 모두 끝납니다.

**`gh` 없이 웹사이트로 진행하는 경우**

1. https://github.com/new 접속
2. Repository name: `rookie-of-the-year`
3. **Private** 선택
4. "Add a README" 등 다른 옵션은 모두 체크 해제 (이미 로컬에 파일이 있으므로)
5. "Create repository" 클릭
6. 생성된 페이지에 나오는 주소를 복사 (예: `https://github.com/내계정/rookie-of-the-year.git`)
7. 터미널에서:

   ```powershell
   cd "C:\Users\poach\OneDrive\바탕 화면\dart\rookie-of-the-year"
   git remote add origin https://github.com/내계정/rookie-of-the-year.git
   git branch -M main
   git push -u origin main
   ```

   처음 push할 때 GitHub 로그인 창이 뜨면 본인 계정으로 로그인하세요.

---

## 4. 나중에 지점 동료를 협업자로 초대하기

1. GitHub에서 `rookie-of-the-year` 리포지토리 페이지로 이동
2. 상단 메뉴 **Settings** 클릭
3. 왼쪽 메뉴에서 **Collaborators** 클릭
4. **Add people** 클릭
5. 동료의 GitHub 아이디 또는 이메일 입력 후 초대
6. 동료가 이메일/알림으로 받은 초대를 수락하면 함께 노트를 추가/수정할 수 있습니다

> Private 리포라도 Collaborators에 추가된 사람은 모든 내용을 볼 수 있으니,
> 초대 전에 누구를 추가할지 한 번 더 확인하세요.

---

## 5. 나중에 GitHub Pages로 공개하기 (개요)

지금 당장은 필요 없지만, 나중에 사이트를 외부에 공개하고 싶을 때의 큰 흐름입니다.

1. `site/astro.config.mjs` 파일에서 주석 처리된 `site`, `base` 값을 채우기
   (예: `site: 'https://내계정.github.io'`, `base: '/rookie-of-the-year'`)
2. `site` 폴더에서 `npm run build` 실행 → `site/dist` 폴더에 정적 파일 생성
3. GitHub 리포의 **Settings → Pages**에서 배포 방법 설정
   (GitHub Actions를 이용한 Astro 자동 배포 워크플로를 추가하는 것이 가장 간단합니다)
4. Private 리포에서 Pages를 사용하려면 GitHub 유료 플랜이 필요할 수 있습니다.
   필요 시 리포를 Public으로 전환하거나 플랜을 확인하세요.

이 단계는 실제로 공개하기로 결정했을 때 다시 자세히 안내해 드릴 수 있습니다.
