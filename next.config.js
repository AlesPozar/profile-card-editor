
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/profile-card-editor' : '',
  output: "export",  // <=== enables static exports
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;