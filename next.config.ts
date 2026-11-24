import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/darino',
  allowedDevOrigins: ['192.168.145.129'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;