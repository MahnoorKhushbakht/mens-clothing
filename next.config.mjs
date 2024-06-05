
  

  /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tg-clothing.000webhostapp.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
