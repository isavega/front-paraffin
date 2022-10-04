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
      {
        source: "/users/sign_in",
        destination: `http://${process.env.BACK_URL}/users/sign_in`,
      },
      {
        source: "/users/sign_out",
        destination: `http://${process.env.BACK_URL}/users/sign_out`,
      },
      {
        source: "/users/sign_up",
        destination: `http://${process.env.BACK_URL}/users/sign_up`,
      },
      {
        source: "/users",
        destination: `http://${process.env.BACK_URL}/users`,
      },
    ];
  },
};

module.exports = nextConfig;
