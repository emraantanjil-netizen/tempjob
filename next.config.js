/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false,
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://10.0.2.2:4000',
    NEXT_PUBLIC_APP_NAME: 'Temp Job Marketplace',
  },

  // Headers for security and performance
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects
  redirects: async () => {
    return [];
  },

  // Rewrites for API proxy (optional)
  rewrites: async () => {
    return {
      beforeFiles: [],
      afterFiles: [],
    };
  },

  // Output
  output: 'standalone',
  
  // TypeScript
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;
