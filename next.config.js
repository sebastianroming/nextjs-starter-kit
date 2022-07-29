/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/./hello",
        destination: "/api/hello",
        permanent: false
      },
    ]
  },
}

module.exports = nextConfig
