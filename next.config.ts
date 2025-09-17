import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  
  // Optimize for production
  poweredByHeader: false,
  
  // Turbopack does not use webpack config
};

export default nextConfig;
