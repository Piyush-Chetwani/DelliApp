/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images:{
    domains:["res.cloudinary.com"]
  }
  typescript:{
  ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
