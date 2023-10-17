/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "1.bp.blogspot.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
