import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SK텔레콤 유심 해킹 사태 분석",
  description: "2025년 4월 발생한 SK텔레콤 유심 해킹 사태에 대한 분석과 대응 방안",
  // 광고 및 추적 관련 메타 태그 추가
  other: {
    'referrer': 'no-referrer-when-downgrade',
    'google': 'notranslate'
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 추적 방지 및 광고 차단 관련 태그 */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="googlebot" content="notranslate" />
        {/* 외부 자원 사전 연결 방지 */}
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Analytics 태그 */}
        <Script 
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4EYBF3849N"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4EYBF3849N');
          `}
        </Script>
        
        {/* New Relic 설정 */}
        <Script 
          id="newrelic-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
;window.NREUM||(NREUM={});NREUM.init={session_replay:{enabled:true,block_selector:'',mask_text_selector:'*',sampling_rate:10.0,error_sampling_rate:100.0,mask_all_inputs:true,collect_fonts:true,inline_images:false,inline_stylesheet:true,fix_stylesheets:true,preload:false,mask_input_options:{}},distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]}};

;NREUM.loader_config={accountID:"4536734",trustKey:"4536734",agentID:"1120402881",licenseKey:"NRJS-6cdc040ea0dfc518637",applicationID:"1120402881"};
;NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-6cdc040ea0dfc518637",applicationID:"1120402881",sa:1};
            `
          }}
        />
        <Script 
          id="newrelic-loader" 
          strategy="beforeInteractive" 
          src="https://js-agent.newrelic.com/nr-loader-spa-1.290.0.min.js" 
        />
        
        {children}
      </body>
    </html>
  );
}
