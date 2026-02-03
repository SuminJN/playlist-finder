/** @type {import('next').NextConfig} */
const nextConfig = {
  // 이미지 최적화 설정
  images: {
    // YouTube 썸네일 이미지를 위한 도메인 허용
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
    ],
    // 이미지 최적화 형식 (WebP 우선)
    formats: ['image/webp'],
  },

  // 성능 최적화
  compiler: {
    // production 빌드 시 console 제거
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 정적 내보내기 (필요한 경우)
  // output: 'export', // 정적 사이트로 배포하려면 주석 해제

  // 환경 변수 검증 (선택사항)
  env: {
    NEXT_PUBLIC_YOUTUBE_API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  },
}

module.exports = nextConfig
