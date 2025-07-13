// 브레이크포인트 관련 상수
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

import { NavItem } from './types';

// 네비게이션 아이템 설정
export const NAV_ITEMS: readonly NavItem[] = [
  { href: '/', label: '메인' },
  { href: '/timeline', label: '타임라인' },
  { href: '/analysis', label: '침해 분석' },
  { href: '/response', label: '대응 조치' },
  { href: '/press', label: '사회적 반응' },
  { href: '/classaction', label: '집단소송' },
  { href: '/similar-cases', label: '유사 해킹사례' },
  { href: '/faq', label: 'FAQ' },
] as const;

// 애니메이션 관련 상수
export const ANIMATION_DELAYS = {
  FIRST: 0.2,
  SECOND: 0.4,
  THIRD: 0.6,
  FOURTH: 0.8,
} as const;

export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.5,
  SLOW: 1.0,
  EXTRA_SLOW: 1.5,
} as const;

export const ANIMATION_STAGGER = {
  CHILDREN: 0.2,
  DELAY: 0.3,
} as const;

// 이미지 크기 관련 상수
export const IMAGE_SIZES = {
  LOGO_SMALL: { width: 32, height: 32 },
  LOGO_MEDIUM: { width: 40, height: 40 },
  LOGO_LARGE: { width: 256, height: 120 },
  HERO_IMAGE: { width: 1200, height: 800 },
} as const;

// 간격 관련 상수
export const SPACING = {
  SMALL: 4,
  MEDIUM: 8,
  LARGE: 16,
  EXTRA_LARGE: 24,
} as const;

// 심각도 레벨 관련 상수
export const SEVERITY_LEVELS = {
  CRITICAL: 'critical',
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
} as const;

// 심각도별 스타일 매핑
export const SEVERITY_STYLES = {
  [SEVERITY_LEVELS.CRITICAL]: 'bg-red-100 text-red-700',
  [SEVERITY_LEVELS.HIGH]: 'bg-orange-100 text-orange-700',
  [SEVERITY_LEVELS.MEDIUM]: 'bg-yellow-100 text-yellow-700',
  [SEVERITY_LEVELS.LOW]: 'bg-green-100 text-green-700',
} as const;

// 포트 관련 상수
export const PORT_RANGE = {
  START: 42391,
  END: 43390,
} as const;

// 파일 크기 관련 상수
export const FILE_SIZE = {
  LEAKED_DATA_GB: 9.7,
  IMEI_COUNT: 291831,
} as const;

// 날짜 관련 상수
export const DATE_FORMATS = {
  KOREAN_DATE: 'YYYY.MM.DD',
  ISO_DATE: 'YYYY-MM-DD',
  TIME_FORMAT: 'HH:mm',
} as const;

// 최대 라인 수 관련 상수
export const MAX_LINES = {
  VIEWPORT: 1500,
  MINIMUM: 1,
} as const; 