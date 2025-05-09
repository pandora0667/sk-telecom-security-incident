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

export interface SecurityInfo {
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  affected: string[];
  solution: string;
}

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