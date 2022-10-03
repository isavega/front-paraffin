/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://${process.env.BACK_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
