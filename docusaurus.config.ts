import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Orvana Docs',
  tagline: 'Web-based radio playout software',
  favicon: 'img/favicon.ico',
  url: 'https://docs.orvana.io',
  baseUrl: '/',
  organizationName: 'orvana-io',
  projectName: 'orvana-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/orvana-io/orvana-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Orvana',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://orvana.io',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/orvana-io/orvana',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/installation' },
            { label: 'Configuration', to: '/configuration' },
            { label: 'Features', to: '/features/playout' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/orvana-io/orvana' },
            { label: 'Issues', href: 'https://github.com/orvana-io/orvana/issues' },
            { label: 'Discussions', href: 'https://github.com/orvana-io/orvana/discussions' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'orvana.io', href: 'https://orvana.io' },
            { label: 'Changelog', to: '/changelog' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Orvana. Always in orbit around your station.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'docker', 'yaml', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
