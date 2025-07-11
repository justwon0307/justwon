import type { NextConfig } from "next";

const { TAILSCALE_IP } = process.env;

const devOrigins = ["localhost", TAILSCALE_IP || ""].filter(Boolean);

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: devOrigins,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
