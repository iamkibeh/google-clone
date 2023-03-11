/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['upload.wikimedia.org', 'www.google.com'],
  },
}

module.exports = nextConfig
