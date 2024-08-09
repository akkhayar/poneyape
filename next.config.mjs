/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'mm'],
        defaultLocale: 'en-US',
        domains: [
          {
            domain: 'poneyape-b.pages.dev/en',
            defaultLocale: 'en-US',
          },
          {
            domain: 'poneyape-b.pages.dev/mm',
            defaultLocale: 'nl-NL',
          },
        ],
      },    
};

export default nextConfig;
