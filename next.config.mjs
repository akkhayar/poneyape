/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'mm'],
        defaultLocale: 'en-US',
        domains: [
          {
            domain: 'poneyape-b.pages.dev/?lang=en',
            defaultLocale: 'en-US',
          },
          {
            domain: 'poneyape-b.pages.dev/?lang=mm',
            defaultLocale: 'nl-NL',
          },
        ],
      },    
};

export default nextConfig;
