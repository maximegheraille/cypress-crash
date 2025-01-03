import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';

const defaultConfig = {
  e2e: {
    video: true,
    trashAssetsBeforeRuns: false,
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on);
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.isHeadless) {
          if (browser.name === 'chrome') {
            launchOptions.args.push('--window-size=1920,1080');
            launchOptions.args.push('--force-device-scale-factor=1');
            launchOptions.args.push('--mute-audio');
            launchOptions.args.push('--disable-gpu');
          } else if (browser.name === 'electron') {
            launchOptions.preferences.width = 1920;
            launchOptions.preferences.height = 1080;
          } else if (browser.name === 'firefox') {
            launchOptions.args.push('--width=1920');
            launchOptions.args.push('--height=1080');
          } else if (browser.name === 'edge') {
            launchOptions.args.push('--window-size=1920,1080');
          }
        }
        return launchOptions;
      });
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
