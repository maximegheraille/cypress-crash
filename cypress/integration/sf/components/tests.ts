describe(`snapshot`, () => {
  before(() => {
    cy.visit('https://www.smashingmagazine.com/2017/05/long-scrolling/');
  });
  beforeEach(() => {
    cy.get('mw-page-container').as('main');
  });


    [
      { name: 'xs', viewport: 'iphone-3' },
      { name: 'sm', viewport: [577, 812] },
      { name: 'md', viewport: [769, 1025] },
      { name: 'lg', viewport: [993, 1080] },
    ].forEach(({ name, viewport }) => {
      describe(`full page snapshot ${name}`, () => {
      it(`snapshot ${name}`, () => {
        if (Array.isArray(viewport)) {
          cy.viewport(viewport[0], viewport[1]);
        }
        const options = {
          failureThreshold: 0,
          allowSizeMismatch: true,
          failureThresholdType: 'percent',
          capture: 'viewport',
          comparisonMethod: 'ssim',
          customSnapshotsDir: `./cypress/reports/mochareports/snapshots/`,
          e2eSpecDir: Cypress.spec.relative,
          snapFilenameExtension: '.snap',
        };
        cy.get('@main').scrollIntoView();
        cy.wait(3000);
        cy.get('@main').matchImageSnapshot(options);
      });
    });
  });
});
