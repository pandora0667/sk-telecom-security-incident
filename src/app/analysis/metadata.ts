import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SK텔레콤 유심 해킹 침해 분석",
  description: "2025년 4월 발생한 SK텔레콤 유심 해킹 사태의 침해 분석 내용을 제공합니다. 해킹 수법, 공격 경로, 유출된 정보의 범위를 알아보세요.",
  openGraph: {
    title: "SK텔레콤 유심 해킹 침해 분석",
    description: "2025년 4월 발생한 SK텔레콤 유심 해킹 사태의 침해 분석 보고서. BPFdoor 악성코드를 이용한 공격 방식과 HSS 서버 침투 과정, 유출된 데이터에 대한 전문적 분석을 제공합니다.",
    images: [
      {
        url: '/skt-logo/SK-telecom_CMYK_EN.jpg',
        width: 1200,
        height: 630,
        alt: 'SK텔레콤 유심 해킹 침해 분석'
      }
    ],
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SK텔레콤 유심 해킹 침해 분석",
    description: "2025년 4월 발생한 SK텔레콤 유심 해킹 사태의 침해 분석 보고서",
    images: ['/skt-logo/SK-telecom_CMYK_EN.jpg']
  }
}; 