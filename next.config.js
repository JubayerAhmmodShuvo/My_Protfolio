/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drive.google.com", "res.cloudinary.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
