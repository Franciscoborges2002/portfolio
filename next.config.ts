import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: { unoptimized: true }
};

export default nextConfig;
