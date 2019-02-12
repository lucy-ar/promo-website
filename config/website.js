const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'LucyAR ', // Navigation and Site Title
  siteTitleAlt: 'Lucy', // Alternative Site title for SEO
  siteTitleShort: 'Lucy', // short_name for manifest
  siteHeadline: 'Empowering architectural creativity', // Headline for schema.org JSONLD
  siteUrl: 'https://lucyar.com,' // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',
  author: 'Lucy Team', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
