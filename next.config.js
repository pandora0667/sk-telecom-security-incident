/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 이미지 경고를 방지하기 위한 설정 추가
    unoptimized: true, // 이미지 최적화 비활성화 (width/height 경고 방지용)
    domains: ['finance.yahoo.com'], // 외부 이미지 도메인 허용
  },
  // CSP 관련 헤더 추가
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: blob: https:;
              font-src 'self';
              object-src 'none';
              connect-src 'self' https://api.allorigins.win https://query1.finance.yahoo.com;
              frame-src 'self' https://www.youtube.com;
            `.replace(/\s+/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 