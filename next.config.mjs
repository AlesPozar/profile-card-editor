
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages uses a subdirectory, so we need to specify the base path
  // Replace 'profile-card-editor' with your repository name
  basePath: process.env.NODE_ENV === 'production' ? '/profile-card-editor' : '',
};

module.exports = nextConfig

export default nextConfig;