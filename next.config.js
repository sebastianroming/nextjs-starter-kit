/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
    ],
  },
  swcMinify: true
}

console.log(process.env.NODE_ENV);

console.log("VERCEL_URL", process.env.VERCEL_URL);

module.exports = nextConfig
