import { NextResponse } from 'next/server';

export function proxy() {
  // 응답 객체 생성
  const response = NextResponse.next();

  // Content-Security-Policy 헤더 설정
  // Google Analytics, New Relic, YouTube 및 기타 필요한 서비스를 허용하는 CSP 규칙 추가
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://js-agent.newrelic.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob: https: https://www.googletagmanager.com https://www.google-analytics.com https://bam.nr-data.net;
    font-src 'self';
    connect-src 'self' https://www.google-analytics.com https://bam.nr-data.net https://api.allorigins.win;
    frame-src 'self' https://www.youtube.com;
    object-src 'none';
    worker-src 'self' blob:;
  `.replace(/\s{2,}/g, ' ').trim();

  // 헤더 설정
  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

// 프록시가 적용될 경로 설정
export const config = {
  matcher: '/:path*',
};

