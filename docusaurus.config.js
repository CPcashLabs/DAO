const lightCodeTheme = require("prism-react-renderer").themes.github;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CPcashLabs DAO",
  tagline: "Privacy-first multilingual docs for the CPcashLabs ecosystem",
  favicon: "img/cpcashlabs-mark.svg",
  url: "https://cpcashlabs.github.io",
  baseUrl: "/DAO/",
  organizationName: "CPcashLabs",
  projectName: "DAO",
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "algolia-site-verification",
        content: "3D86F36A97556E00"
      }
    }
  ],
  onBrokenLinks: "throw",
  trailingSlash: true,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw"
    }
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-sg", "ru"],
    localeConfigs: {
      en: {
        htmlLang: "en",
        label: "English"
      },
      "zh-sg": {
        htmlLang: "zh-SG",
        label: "简体中文（新加坡）"
      },
      ru: {
        htmlLang: "ru",
        label: "Русский"
      }
    }
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        language: ["en", "zh", "ru"]
      }
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects(existingPath) {
          const redirectMap = {
            "/roadmap/ecosystem/": ["/ecosystem/"],
            "/roadmap/vision/": ["/vision/"],
            "/recruiting/community-volunteer/": ["/community-volunteer/"],
            "/recruiting/web3-community-business-expert/": ["/web3-community-business-expert/"],
            "/recruiting/join-us/": ["/join-us/"],
            "/zh-sg/roadmap/ecosystem/": ["/zh-sg/ecosystem/"],
            "/zh-sg/roadmap/vision/": ["/zh-sg/vision/"],
            "/zh-sg/recruiting/community-volunteer/": ["/zh-sg/community-volunteer/"],
            "/zh-sg/recruiting/web3-community-business-expert/": ["/zh-sg/web3-community-business-expert/"],
            "/zh-sg/recruiting/join-us/": ["/zh-sg/join-us/"],
            "/ru/roadmap/ecosystem/": ["/ru/ecosystem/"],
            "/ru/roadmap/vision/": ["/ru/vision/"],
            "/ru/recruiting/community-volunteer/": ["/ru/community-volunteer/"],
            "/ru/recruiting/web3-community-business-expert/": ["/ru/web3-community-business-expert/"],
            "/ru/recruiting/join-us/": ["/ru/join-us/"]
          };

          return redirectMap[existingPath];
        }
      }
    ]
  ],
  themeConfig: {
    image: "img/cpcashlabs-social-card.svg",
    navbar: {
      title: "CPcashLabs DAO",
      items: [
        {
          to: "/roadmap/",
          label: "Roadmap",
          position: "left"
        },
        {
          to: "/recruiting/",
          label: "Recruiting",
          position: "left"
        },
        {
          type: "search",
          position: "right"
        },
        {
          type: "localeDropdown",
          position: "right"
        }
      ]
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false
      }
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    prism: {
      theme: lightCodeTheme
    }
  }
};

module.exports = config;
