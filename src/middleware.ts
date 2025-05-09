import { NextResponse } from 'next/server';

export function middleware() {
  // 응답 객체 생성
  const response = NextResponse.next();

  // Content-Security-Policy 헤더 설정
  // Google Analytics와 New Relic을 허용하는 CSP 규칙 추가
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://js-agent.newrelic.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://bam.nr-data.net;
    font-src 'self';
    connect-src 'self' https://www.google-analytics.com https://bam.nr-data.net;
    frame-src 'self' https://www.youtube.com;
    object-src 'none';
  `.replace(/\s{2,}/g, ' ').trim();

  // 헤더 설정
  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

// 미들웨어가 적용될 경로 설정
export const config = {
  matcher: '/:path*',
}; 