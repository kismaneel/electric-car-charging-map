/** @type {import('next').NextConfig} */
//const nextConfig = {};
const nextConfig = {
  // 이 옵션을 false로 설정하면 Strict Mode가 꺼져서 1번만 호출됩니다.
  reactStrictMode: false,

  async rewrites() {
    return [
      {
        // 브라우저에서 요청할 가상의 주소
        source: "/api/kepco/:path*",
        // 실제로 요청을 보낼 외부 API 주소 (기본 도메인)
        destination: "https://bigdata.kepco.co.kr/openapi/:path*",
      },
    ];
  },
};

export default nextConfig;
