/// <reference types="cypress" />

  declare namespace Cypress {
    interface Chainable {
      searchBySearch(query: string): Chainable<void>
    }
  }


Cypress.Commands.add('searchBySearch', (query: string) => { 
  cy.visit("/")

  cy.get('input[name=q]').type(query).parent('form').submit()
 })
