/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';
const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  scope: '/app',
  sw: 'service-worker.js',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  cacheStartUrl: true,
  dynamicStartUrlRedirect: true,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['ui-avatars.com', 'lh3.googleusercontent.com'],
  },
};

export default withPWA(nextConfig);
