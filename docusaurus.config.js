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
      logo: {
        href: 'https://set.health',
        alt: 'Sethealth Logo',
        src: 'img/logo-light.svg',
      },
      links: [
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
      style: 'dark',
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
            'https://github.com/sethealth/sethealth-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
