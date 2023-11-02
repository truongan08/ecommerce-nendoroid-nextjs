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
};

module.exports = nextConfig;
