import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Pixels & Logic`,
    description: `Modern software house specializing in web applications, system integrations, and IT team leasing`,
    siteUrl: `https://www.pixellogic.com`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Pixels & Logic",
        short_name: "P&L",
        start_url: "/",
        background_color: "#F2E7DC",
        theme_color: "#001542",
        display: "minimal-ui",
        icon: "src/images/icon.png"
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "locale",
        path: "./locales"
      },
      __key: "locale"
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale',
        languages: ['en', 'pl'],
        defaultLanguage: 'en',
        siteUrl: 'https://www.pixellogic.com',
        generateDefaultLanguagePage: true,
        redirect: false,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: '.',
          nsSeparator: false
        }
      }
    }
  ]
};

export default config;
