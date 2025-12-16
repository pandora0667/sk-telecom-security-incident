/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 이미지 경고를 방지하기 위한 설정 추가
    unoptimized: true, // 이미지 최적화 비활성화 (width/height 경고 방지용)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'finance.yahoo.com',
      },
    ],
  },
  // CSP는 미들웨어에서 관리하므로 여기서는 제거
};

export default nextConfig; 