/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/./hello",
        destination: "/api/hello"
      }
    ]
  },
  /*async redirects() {
    return [
      {
        source: "/./hello",
        destination: "/api/hello",
        permanent: false
      },
    ]
  },*/
}
/* foobar */

module.exports = nextConfig
console.log(process.env.VERCEL_URL)
