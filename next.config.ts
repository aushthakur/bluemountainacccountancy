import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.31.10'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
