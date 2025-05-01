import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
      },
    ],
  },
  webpack(config, { isServer }) {
    // Exclude 'canvas' from the server-side bundle
    if (isServer) {
      config.externals = ['canvas', ...config.externals];
    }
    return config;
  },
};

export default nextConfig;


