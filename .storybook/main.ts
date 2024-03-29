import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../__stories__/**/*.mdx',
    '../__stories__/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: [
    '../public',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
};

export default config;
