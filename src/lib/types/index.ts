export interface TimelineEvent {
  date: string;
  time?: string;
  title: string;
  description: string;
  category: 'hacking' | 'response' | 'investigation' | 'customer' | 'government' | 'legal' | 'media' | 'financial';
  important?: boolean;
  link?: string;
  source?: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface SecurityInfo {
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  affected: string[];
  solution: string;
}

// 스타일 함수들의 반환 타입 정의
export type StyleClassName = string;

export type SeverityLevel = 'low' | 'medium' | 'high' | 'critical';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type CardVariant = 'default' | 'outlined' | 'elevated';

export type TextGradientType = 'blue-purple' | 'blue-fuchsia' | 'purple-pink';
export type BackgroundGradientType = 'blue-purple' | 'slate-light' | 'blue-white';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export type TextSize = 'sm' | 'md' | 'lg' | 'xl' | 'hero';

export interface ExpertOpinion {
  name: string;
  title: string;
  organization: string;
  opinion: string;
  date: string;
}

export interface NewsArticle {
  title: string;
  source: string;
  date: string;
  url: string;
  summary: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
} 