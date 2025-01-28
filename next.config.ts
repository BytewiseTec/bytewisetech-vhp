import { NextConfig } from 'next'
import nextBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = withBundleAnalyzer({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/team/:slug',
        destination: '/not-found',
        permanent: true,
      },
    ]
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  experimental: {
    turbo: {},
  }
})

export default nextConfig
