/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.prod.website-files.com',
          port: '',
          pathname: '/665dd714544b997e4b186636/665ea64edb1e20c176359464_unibui_wordmark_orange-p-500.png',
        },
      ],
    },
  };
  
  export default nextConfig;
   