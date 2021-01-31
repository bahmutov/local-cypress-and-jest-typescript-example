import {cy, expect, describe, it, Cypress} from 'local-cypress'
// import function from the application source
import { sum } from '../../src/foo'

describe('TypeScript spec', () => {
  Cypress.on('test:before:run', () => {

  })

  it('works', () => {
    cy.on('window:before:load', () => {
      //
    })
    cy.wrap('foo').should('equal', 'foo')
  })

  it('calls TS source file', () => {
    expect(sum(1, 2, 3, 4)).to.equal(10)
  })
})

// uncomment to get a lint error
// const aCypressString: string = 42;
