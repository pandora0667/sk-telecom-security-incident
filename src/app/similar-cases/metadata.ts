import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SK텔레콤 유심 해킹 관련 유사 해킹사례",
  description: "국내외 통신사 및 기업 대상 해킹 사례들을 분석했습니다. SK텔레콤 유심 해킹 사태와 유사한 사례를 통해 보안 위협을 이해하세요.",
  openGraph: {
    title: "SK텔레콤 유심 해킹 관련 유사 해킹사례",
    description: "국내외 통신사 및 기업 대상 해킹 사례들을 분석했습니다. 각 사례별 공격 수법, 대응 방식, 피해 규모 비교를 통해 통신 보안의 취약점과 대응 방안을 알아보세요.",
    images: [
      {
        url: '/skt-logo/SK-telecom_CMYK_EN.jpg',
        width: 1200,
        height: 630,
        alt: 'SK텔레콤 유심 해킹 관련 유사 해킹사례'
      }
    ],
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SK텔레콤 유심 해킹 관련 유사 해킹사례",
    description: "국내외 통신사 및 기업 대상 유사 해킹 사례 분석",
    images: ['/skt-logo/SK-telecom_CMYK_EN.jpg']
  }
}; 