import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SK텔레콤 유심 해킹 대응 조치",
  description: "SK텔레콤의 유심 해킹 사태에 대한 대응 조치와 정부 및 산업계의 후속 대응 내용을 정리했습니다.",
  openGraph: {
    title: "SK텔레콤 유심 해킹 대응 조치",
    description: "SK텔레콤의 유심 해킹 사태에 대한 대응 조치와 정부 및 산업계의 후속 대응을 상세히 분석했습니다. 유심보호서비스, 무료 교체 등 고객 보호 조치와 통신 보안 강화 방안을 확인하세요.",
    images: [
      {
        url: '/skt-logo/SK-telecom_CMYK_EN.jpg',
        width: 1200,
        height: 630,
        alt: 'SK텔레콤 유심 해킹 대응 조치'
      }
    ],
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SK텔레콤 유심 해킹 대응 조치",
    description: "SK텔레콤의 유심 해킹 사태에 대한 대응 조치와 정부 및 산업계의 후속 대응",
    images: ['/skt-logo/SK-telecom_CMYK_EN.jpg']
  }
}; 