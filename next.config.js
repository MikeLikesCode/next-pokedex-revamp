/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['raw.githubusercontent.com', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig
