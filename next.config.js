/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "54.183.205.86",
        port: "1337",
      },
    ],
  },
};

module.exports = nextConfig;
