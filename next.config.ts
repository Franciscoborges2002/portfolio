import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/",
  output: 'standalone',
  reactStrictMode: true,
  images: { unoptimized: true }
};

export default nextConfig;
