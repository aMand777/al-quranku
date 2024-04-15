/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`${process.env.NEXT_PUBLIC_AVATAR_URL}`],
  },
};

export default nextConfig;
