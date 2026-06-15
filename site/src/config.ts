export const GITHUB_OWNER = 'Lee-SangJin1026';
export const GITHUB_REPO = 'rookie-of-the-year';
export const GITHUB_BRANCH = 'main';

export const GITHUB_REPO_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;

// 새 노트 작성 시 GitHub의 "새 파일 만들기" 화면에 미리 채워둘 템플릿
const today = new Date().toISOString().slice(0, 10);

export const NEW_NOTE_TEMPLATE = `---
title: "종목명"
ticker: ""
type: "1번코어"
category: "이체"
importance: "mid"
themes: []
date: ${today}
stop_loss: ""
sell_trigger: ""
summary: ""
---

## 테제 (Thesis)

(이 종목을 왜 담는지, 핵심 아이디어를 2~3줄로 적으세요)

## 근거 / 촉매

-
-

## 밸류에이션 체크

-

## 리스크 / 체크포인트

-

## 매도 트리거

(category가 "이체"면 펀더멘털 변화 기준, "삼체"면 가격/모멘텀 기준으로 작성)

<!--
type: 1번코어 | 2번PERxEPS | 3번주도주 | 4번헷지
category: 이체 | 삼체
importance: high | mid | low
-->
`;

export function getNewNoteUrl(): string {
  const filename = `notes/종목명.md`;
  const params = new URLSearchParams({
    filename,
    value: NEW_NOTE_TEMPLATE,
  });
  return `${GITHUB_REPO_URL}/new/${GITHUB_BRANCH}?${params.toString()}`;
}

export function getEditNoteUrl(noteId: string): string {
  return `${GITHUB_REPO_URL}/edit/${GITHUB_BRANCH}/notes/${noteId}.md`;
}
