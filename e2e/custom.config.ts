import { defineConfig } from 'cypress';

import { defaultConfig } from './cypress-base.config';

export default defineConfig({
  ...defaultConfig,
  e2e: {
    ...defaultConfig.e2e,
    specPattern: './cypress/integration/sf/components/**/*.ts',
    baseUrl: 'https://www.google.com',
  },
});
