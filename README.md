# cypress-and-jest-typescript-example [![renovate-app badge][renovate-badge]][renovate-app]
> Example using Jest and Cypress with TypeScript in a single repo

If you are using Jest and Cypress types in the same project, they might conflict because both test runners use globals like `expect`. This project uses [local-cypress](https://github.com/bahmutov/local-cypress) to remove global Cypress types and explicitly import them.

```ts
// cypress/integration/spec.ts
import {cy, expect} from 'local-cypress'
it('works', () => {
  // Cypress commands
  cy.wrap('foo').should('equal', 'foo')
  // Chai assertions
  expect('bar').to.equal('bar')
})
```

```sh
npm install
npm run lint
npm run lint:cypress
```

Also see [cypress-io/cypress-and-jest-typescript-example](https://github.com/cypress-io/cypress-and-jest-typescript-example) that does not use `local-cypress` and isolated the types instead.
