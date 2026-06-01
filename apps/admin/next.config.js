/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/db", "@repo/ui", "@repo/schema"]
};

module.exports = nextConfig;
