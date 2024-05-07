/** @type {import('next').NextConfig} */
// import withPWAInit from 'next-pwa';
import withPWAInit from '@ducanh2912/next-pwa';
const withPWA = withPWAInit({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  }
});

const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['ui-avatars.com', 'lh3.googleusercontent.com'],
  },
};

export default withPWA(nextConfig);
