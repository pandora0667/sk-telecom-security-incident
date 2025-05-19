import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://skt-hack.wisoft.io'),
  title: "SK텔레콤 유심 해킹 사태 종합 분석",
  description: "2025년 4월 발생한 SK텔레콤 유심 해킹 사태의 전체 정보를 제공합니다. 해킹 과정, 대응 조치, 고객 보호 방법을 확인하세요.",
  openGraph: {
    title: "SK텔레콤 유심 해킹 사태 종합 분석",
    description: "2025년 4월 발생한 SK텔레콤 유심 해킹 사태의 종합 분석 사이트입니다. 해킹 과정, 대응 조치, 보상, 집단소송, 미래 보안 대책까지 모든 정보를 제공합니다.",
    images: [
      {
        url: '/skt-logo/SK-telecom_CMYK_EN.jpg',
        width: 1200,
        height: 630,
        alt: 'SK텔레콤 유심 해킹 사태 종합 분석'
      }
    ],
    locale: 'ko_KR',
    type: 'website',
    siteName: 'SK텔레콤 유심 해킹 사태 분석'
  },
  twitter: {
    card: 'summary_large_image',
    title: "SK텔레콤 유심 해킹 사태 종합 분석",
    description: "2025년 4월 발생한 SK텔레콤 유심 해킹 사태의 종합 분석",
    images: ['/skt-logo/SK-telecom_CMYK_EN.jpg']
  }
}; 