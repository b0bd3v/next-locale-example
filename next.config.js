/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'pt',
  }
}

module.exports = nextConfig
