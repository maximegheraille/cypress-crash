import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: './cypress/integration/sf/components/**/*.ts',
    baseUrl: 'https://www.cypress.io/',
    supportFile: false,
  },
});
