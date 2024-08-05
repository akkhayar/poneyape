/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'mm'],
        defaultLocale: 'en-US',
        domains: [
          {
            domain: 'poneyape.com/en',
            defaultLocale: 'en-US',
          },
          {
            domain: 'poneyape.com/mm',
            defaultLocale: 'nl-NL',
          },
        ],
      },    
};

export default nextConfig;
