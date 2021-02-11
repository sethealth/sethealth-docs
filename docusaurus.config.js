module.exports = {
  title: 'Sethealth docs',
  tagline: 'Medical toolkit for developers',
  url: 'https://docs.set.health',
  baseUrl: '/',
  scripts: [{
    async: true,
    defer: true,
    src: "https://stats.set.health/js/index.js",
    'data-domain': "docs.set.health",
  }],
  favicon: 'img/favicon.png',
  organizationName: 'sethealth', // Usually your GitHub org/user name.
  projectName: 'sethealth-docs', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '28e368af82efd688eb3cf75259bc796c',
      indexName: 'set_health',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    navbar: {
      title: 'Sethealth',
      hideOnScroll: true,
      logo: {
        href: 'https://set.health',
        alt: 'Sethealth Logo',
        src: 'img/logo-light.svg',
      },

      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/sethealth/sethealth-js',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/e3HH9ZDxDK',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://twitter.com/sethealthtech',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Sethealth GmbH.`,
    },
    colorMode: {
      switchConfig: {
        darkIcon: '🌑',
        lightIcon: '💡',

      }
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sethealth/sethealth-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
