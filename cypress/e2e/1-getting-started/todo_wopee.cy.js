describe('example to-do app', () => {
  beforeEach(() => {
    cy.wopeeStartScenario(Cypress.currentTest.title);
    cy.visit('https://example.cypress.io/todo')
    // cy.visit('https://example.cypress.io/todo#/completed')
  })

  it('displays two todo items by default', () => {
    cy.wopeeTrack({ stepName: "Home page" });
    cy.get('.todo-list li').should('have.length', 2)
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    
  })

  
})
