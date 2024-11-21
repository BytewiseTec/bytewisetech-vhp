import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
}

export default nextConfig
