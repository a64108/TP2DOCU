// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OFICINA WINRAR',
  tagline: 'Tudo o que necessita ao seu dispor o mais rápido possivel.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/OFICINA/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OFICINAWINRAR',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Oficina',
          },
          {to: '/blog', label: 'Sobre nós', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Serviços:',
            items: [
              {
                label: 'Oficina',
                to: 'oficina',
              },
              {
                label: 'Cortesia',
                to: 'cortesia',
              },
            ],
          },
          {
            title: 'Redes Sociais',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'Informação',
            items: [
              {
                label: 'Contatos',
                to: 'contatos',
              },
              {
                label: 'Recrutamento',
                to: 'recrutamento',
              },
            ],
          },
          {
            title: 'Localizações:',
            items: [
              {
                label: 'Oficina de Faro',
                href: 'https://www.google.com/search?q=37.011698987033604%2C+-7.921883972344417&rlz=1C1ONGR_pt-PTPT1017PT1017&oq=37.011698987033604%2C+-7.921883972344417&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMTkxajBqNKgCALACAA&sourceid=chrome&ie=UTF-8',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ADC Projeto. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;