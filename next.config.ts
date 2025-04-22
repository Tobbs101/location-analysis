import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "pdfjs-dist/build/pdf.worker.entry": require.resolve(
        "pdfjs-dist/build/pdf.worker.entry"
      ),
    };
    return config;
  },
};

export default nextConfig;
