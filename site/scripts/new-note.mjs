#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const name = process.argv[2];

if (!name) {
  console.error('사용법: npm run new-note "종목명"');
  console.error('예시:   npm run new-note "삼성전자"');
  process.exit(1);
}

const notesDir = path.resolve(__dirname, '..', '..', 'notes');
const templatePath = path.join(notesDir, '_template.md');

if (!fs.existsSync(templatePath)) {
  console.error(`템플릿 파일을 찾을 수 없습니다: ${templatePath}`);
  process.exit(1);
}

const fileName = `${name.replace(/\s+/g, '')}.md`;
const filePath = path.join(notesDir, fileName);

if (fs.existsSync(filePath)) {
  console.error(`이미 존재하는 노트입니다: notes/${fileName}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

let template = fs.readFileSync(templatePath, 'utf-8');
template = template.replace('{{TITLE}}', name).replace('{{DATE}}', today);

fs.writeFileSync(filePath, template, 'utf-8');

console.log(`새 노트를 생성했습니다: notes/${fileName}`);
console.log('해당 파일을 열어 type / category / importance / themes 값을 채워주세요.');
