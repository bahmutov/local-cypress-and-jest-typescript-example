# cypress-and-jest-typescript-example
![cypress version](https://img.shields.io/badge/cypress-9.5.4-brightgreen) ![local-cypress version](https://img.shields.io/badge/local--cypress-1.2.5-brightgreen)
[![ci status][ci image]][ci url] [![badges status][badges image]][badges url] [![renovate-app badge][renovate-badge]][renovate-app]
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

[ci image]: https://github.com/bahmutov/local-cypress-and-jest-typescript-example/workflows/ci/badge.svg?branch=main
[ci url]: https://github.com/bahmutov/local-cypress-and-jest-typescript-example/actions
[badges image]: https://github.com/bahmutov/local-cypress-and-jest-typescript-example/workflows/badges/badge.svg?branch=main
[badges url]: https://github.com/bahmutov/local-cypress-and-jest-typescript-example/actions
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
