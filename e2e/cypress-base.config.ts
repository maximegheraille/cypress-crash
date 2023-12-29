import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';
import { defineConfig } from 'cypress';

const defaultConfig = {
  e2e: {
    video: true,
    trashAssetsBeforeRuns: false,
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on);
    },
    experimentalWebKitSupport: true,
    supportFile: 'cypress/support/index.ts',
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    retries: 0,
    testIsolation: false,
  },
};
export { defaultConfig };
