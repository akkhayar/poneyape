/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'mm'],
        defaultLocale: 'en-US',
        domains: [
          {
            domain: 'poneyape-b.pages.dev/',
            defaultLocale: 'en-US',
          },
          {
            domain: 'poneyape-b.pages.dev/?lang=mm',
            defaultLocale: 'my-MY',
          },
        ],
      },    
};

export default nextConfig;
