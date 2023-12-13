/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
   },
   // image optimization
   images: {
      domains: ['picsum.photos', 'via.placeholder.com'],
   },
}

module.exports = nextConfig
