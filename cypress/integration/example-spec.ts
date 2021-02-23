import {it, cy} from 'local-cypress'
it('works', { baseUrl: 'localhost:3000' }, () => {
  cy.visit('/')
})
