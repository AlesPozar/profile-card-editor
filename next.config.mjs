
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages uses a subdirectory, so we need to specify the base path
  // Replace 'profile-card-editor' with your repository name
  basePath: process.env.NODE_ENV === 'production' ? '/profile-card-editor' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

///** @type {import('next').NextConfig} */
/*const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
//
export default nextConfig*/