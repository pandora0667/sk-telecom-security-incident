import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SK텔레콤 유심 해킹 사건 전체 타임라인",
  description: "2025년 4월 18일 발생한 SK텔레콤 유심 해킹 사건의 시간순 상세 내역입니다. 최초 침해부터 현재까지의 진행 상황을 확인하세요.",
  openGraph: {
    title: "SK텔레콤 유심 해킹 사건 전체 타임라인",
    description: "2025년 4월 18일 발생한 SK텔레콤 유심 해킹 사건의 시간순 상세 내역. 주요 사건과 대응 조치를 일자별로 확인할 수 있습니다.",
    images: [
      {
        url: '/skt-logo/SK-telecom_CMYK_EN.jpg',
        width: 1200,
        height: 630,
        alt: 'SK텔레콤 유심 해킹 사건 타임라인'
      }
    ],
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SK텔레콤 유심 해킹 사건 전체 타임라인",
    description: "2025년 4월 18일 발생한 SK텔레콤 유심 해킹 사건의 시간순 상세 내역",
    images: ['/skt-logo/SK-telecom_CMYK_EN.jpg']
  }
}; 