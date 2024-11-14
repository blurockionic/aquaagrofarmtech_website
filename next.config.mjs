/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**', // Allows all paths from this hostname
      },
    ],
  },
  reactStrictMode: true, // Recommended for development and debugging
};

export default nextConfig;
