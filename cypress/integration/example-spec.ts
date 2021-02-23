import {it, cy} from 'local-cypress'
it('works', { baseUrl: 'http://localhost:3000' }, () => {
  cy.visit('/')
})
