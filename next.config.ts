/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 개발 환경에서의 크로스 오리진 요청 허용
  allowedDevOrigins: [
    '127.0.0.1',
    'localhost'
  ],
  // 이미지 최적화 설정
  images: {
    unoptimized: true, // 로컬 이미지를 최적화하지 않고 원본 그대로 사용
  },
};

export default nextConfig;
