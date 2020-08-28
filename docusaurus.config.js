module.exports = {
  title: 'Sethealth docs',
  tagline: 'Medical toolkit for developers',
  url: 'https://docs.set.health',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'sethealth', // Usually your GitHub org/user name.
  projectName: 'sethealth-docs', // Usually your repo name.
  themeConfig: {
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
          href: 'https://twitter.com/sethealthtech',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Sethealth.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'introduction/getting-started',
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
