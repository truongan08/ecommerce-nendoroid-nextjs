/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gonkolbxsaadkmuxbrak.supabase.co",
        port: "",
      },
    ],
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
};

module.exports = nextConfig;
