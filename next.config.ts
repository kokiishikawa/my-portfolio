import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // ブラウザのスクロール位置復元を無効化
    // page.tsxで独自にスクロール制御を行うため
    scrollRestoration: false,
  },
};

export default nextConfig;
