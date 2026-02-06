/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      'next/dist/shared/lib/head-manager-context.js':
        'next/dist/shared/lib/head-manager-context.shared-runtime.js'
    };
    return config;
  }
};

export default nextConfig;
