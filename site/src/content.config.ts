import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  // notes/ 폴더 (프로젝트 루트, site/ 바로 위)의 마크다운 파일을 읽어옵니다.
  // 파일명이 _ 로 시작하는 파일(_template.md)은 목록에서 제외됩니다.
  loader: glob({ pattern: '**/[^_]*.md', base: '../notes' }),
  schema: z.object({
    title: z.string(),
    ticker: z.string().optional(),
    // 포트폴리오 분류 (1~4번)
    type: z.enum(['1번코어', '2번PERxEPS', '3번주도주', '4번헷지']),
    // 문제 유형 (이체 / 삼체)
    category: z.enum(['이체', '삼체']),
    // 중요도
    importance: z.enum(['high', 'mid', 'low']),
    // 테마 태그
    themes: z.array(z.string()).default([]),
    date: z.date(),
    stop_loss: z.string().optional(),
    sell_trigger: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = { notes };
