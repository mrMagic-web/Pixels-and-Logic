import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Pixels & Logic`,
    description: `Modern software house specializing in web applications, system integrations, and IT team leasing`,
    siteUrl: `https://pixelsandlogic.eu`,
    author: `Pixels & Logic`,
    keywords: `software house, web development, IT team leasing, system integration, MVP development, custom software, React, Node.js, TypeScript`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
        excludes: ["/404", "/404.html", "/en/404", "/pl/404"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => "https://pixelsandlogic.eu",
        resolvePages: ({
          allSitePage: { nodes: allPages }
        }: any) => {
          return allPages.map((page: any) => {
            return { ...page };
          });
        },
        serialize: ({ path }: any) => {
          return {
            url: path,
            changefreq: "weekly",
            priority: path === "/" || path === "/en/" || path === "/pl/" ? 1.0 : 0.7
          };
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Pixels & Logic - Building Modern Web Applications",
        short_name: "P&L",
        description: "Software house specializing in web applications, system integrations, and IT team leasing",
        start_url: "/",
        background_color: "#F2E7DC",
        theme_color: "#001542",
        display: "minimal-ui",
        icon: "src/images/icon.png",
        icon_options: {
          purpose: "any maskable"
        },
        lang: "en",
        categories: ["business", "technology"],
        cache_busting_mode: "query",
        include_favicon: true,
        legacy: true,
        crossOrigin: "anonymous"
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
        siteUrl: 'https://pixelsandlogic.eu',
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
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-54NPJ2GL',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' }
      }
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-NDM30N1XM9'],
        pluginConfig: {
          head: true,
        },
      },
    }
  ]
};

export default config;
