import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SK텔레콤 유심 해킹 집단소송 정보",
  description: "SK텔레콤 유심 해킹 사건 관련 진행 중인 집단소송 정보와 참여 방법, 법적 쟁점에 대한 정보를 제공합니다.",
  openGraph: {
    title: "SK텔레콤 유심 해킹 집단소송 정보",
    description: "SK텔레콤 유심 해킹 사건 관련 진행 중인 집단소송 정보와 참여 방법, 법률적 쟁점과 예상 결과, 소송 진행 현황에 대한 최신 정보를 확인하세요.",
    images: [
      {
        url: '/skt-logo/SK-telecom_CMYK_EN.jpg',
        width: 1200,
        height: 630,
        alt: 'SK텔레콤 유심 해킹 집단소송 정보'
      }
    ],
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SK텔레콤 유심 해킹 집단소송 정보",
    description: "SK텔레콤 유심 해킹 사건 관련 집단소송 참여 방법 및 법적 쟁점 정보",
    images: ['/skt-logo/SK-telecom_CMYK_EN.jpg']
  }
}; 