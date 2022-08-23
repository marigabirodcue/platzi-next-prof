/*  /** @type {import('next').NextConfig}
const nextConfig = {
  //reactStrictMode: true,
  //swcMinify: true,
  images: {
    domains: ['api.lorem.space'],
  },
}

module.exports = nextConfig */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com',
              'api.lorem.space',
              'vuzoon.com',
              'www.complementosdelcafe.com',
              'tailwindui.com',
              'ui-avatars.com',
              'images.unsplash.com',
              'cdn.icon-icons.com'],
  },
  unoptimized: false,
  eslint:{
    ignoreDuringBuilds: true,
  },
};
