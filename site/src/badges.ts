export const KNOWN_TYPES = ['1번코어', '2번PERxEPS', '3번주도주', '4번헷지'] as const;
export const KNOWN_CATEGORIES = ['이체', '삼체'] as const;
export const KNOWN_IMPORTANCE = ['high', 'mid', 'low'] as const;

interface Badge {
  class: string;
  label: string;
}

// frontmatter 값이 정해진 enum 값과 다르면(오타 등) 빌드를 깨지 않고
// 노란색 경고 뱃지로 그대로 표시해서 작성자가 바로 알아챌 수 있게 한다.
export function getImportanceBadge(importance: string): Badge {
  switch (importance) {
    case 'high':
      return { class: 'badge-high', label: '중요도: 상' };
    case 'mid':
      return { class: 'badge-mid', label: '중요도: 중' };
    case 'low':
      return { class: 'badge-low', label: '중요도: 하' };
    default:
      return { class: 'badge-warn', label: `⚠ importance: "${importance}"` };
  }
}

export function getTypeBadge(type: string): Badge {
  if ((KNOWN_TYPES as readonly string[]).includes(type)) {
    return { class: 'badge-accent', label: type };
  }
  return { class: 'badge-warn', label: `⚠ type: "${type}"` };
}

export function getCategoryBadge(category: string): Badge {
  if ((KNOWN_CATEGORIES as readonly string[]).includes(category)) {
    return { class: 'badge-outline', label: category };
  }
  return { class: 'badge-warn', label: `⚠ category: "${category}"` };
}
