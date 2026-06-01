/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/db", "@repo/bq-client", "@repo/ui", "@repo/schema"]
};

module.exports = nextConfig;
