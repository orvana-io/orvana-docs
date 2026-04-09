import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['introduction', 'installation', 'configuration', 'upgrade'],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/playout',
        'features/cart-wall',
        'features/scheduler',
        'features/remote-studio',
        'features/recording',
        'features/time-markers',
        'features/split-playout',
        'features/streaming',
        'features/templates',
      ],
    },
    {
      type: 'category',
      label: 'Pro',
      items: [
        'pro/licensing',
        'pro/backtiming',
        'pro/voice-tracking',
        'pro/traffic',
        'pro/api',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin/users',
        'admin/authentication',
        'admin/soundcards',
        'admin/backup',
      ],
    },
    'changelog',
  ],
};

export default sidebars;
