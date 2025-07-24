/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatar.vercel.sh'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
