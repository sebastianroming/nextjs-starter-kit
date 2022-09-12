/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/what-is",
        destination: "/what-is-payroll",
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
console.log(process.version);

module.exports = nextConfig
