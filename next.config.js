/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'de', 'ru'],
  },
  pwa: {
    dest: "public",
  },

});
