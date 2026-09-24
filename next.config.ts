import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  allowedDevOrigins: [
    "10.43.221.84",
    "localhost",
  ],
};

export default nextConfig;