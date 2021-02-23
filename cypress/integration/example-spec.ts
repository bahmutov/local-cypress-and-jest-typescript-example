import { it, cy } from 'local-cypress'
// test example that uses Cypress-specific "it" test function
it('works', { viewportHeight: 500 }, () => {
  cy.wrap('example').should('equal', 'example')
})
