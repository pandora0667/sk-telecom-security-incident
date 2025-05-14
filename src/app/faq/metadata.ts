import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SK텔레콤 유심 해킹 사태 - 자주 묻는 질문 (FAQ)",
  description: "SK텔레콤 유심 해킹 사건 관련 자주 묻는 질문들에 대한 답변을 제공합니다. 해킹 개요, 개인정보 보호, 피해 대응 방법 등을 확인하세요.",
  openGraph: {
    title: "SK텔레콤 유심 해킹 사태 - 자주 묻는 질문 (FAQ)",
    description: "SK텔레콤 유심 해킹 사건 관련 자주 묻는 질문들에 대한 답변을 제공합니다. 해킹 사건 개요부터 보상 방법까지 상세히 안내합니다.",
    images: [
      {
        url: '/skt-logo/SK-telecom_CMYK_EN.jpg',
        width: 1200,
        height: 630,
        alt: 'SK텔레콤 유심 해킹 FAQ'
      }
    ],
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SK텔레콤 유심 해킹 사태 - 자주 묻는 질문 (FAQ)",
    description: "SK텔레콤 유심 해킹 사건 관련 자주 묻는 질문들에 대한 답변",
    images: ['/skt-logo/SK-telecom_CMYK_EN.jpg']
  }
}; 