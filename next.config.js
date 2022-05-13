/** @type {import('next').NextConfig} */
const withTranslateRoutes = require("next-translate-routes/plugin");

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
};

module.exports = withTranslateRoutes(nextConfig);
