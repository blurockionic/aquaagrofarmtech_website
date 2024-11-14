/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          port: '', // Optional, leave blank if not needed
          pathname: '/**', // Allows all paths
        },
      ],
    },
  };
  
  export default nextConfig;
  