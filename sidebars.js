/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "Roadmap",
      link: {
        type: "doc",
        id: "roadmap/overview"
      },
      items: [
        "roadmap/ecosystem",
        "roadmap/vision",
        "roadmap/whitepaper"
      ]
    },
    {
      type: "category",
      label: "Recruiting",
      link: {
        type: "doc",
        id: "recruiting/overview"
      },
      items: [
        "recruiting/community-volunteer",
        "recruiting/web3-community-business-expert",
        "recruiting/join-us"
      ]
    }
  ]
};

module.exports = sidebars;
