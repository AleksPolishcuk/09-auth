import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
    domains: ["ac.goit.global", "notehub-api.goit.study"],
  },
};

const NextConfig = {
  experimental: {
    typedRoutes: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default nextConfig;

module.exports = nextConfig;
