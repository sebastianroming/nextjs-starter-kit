/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/what-is/",
        destination: "/what-is-payroll/",
        permanent: true
      }
    ]
  },
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
