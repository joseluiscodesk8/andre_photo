describe('My First Test', () => {
    it('Visits the app root url', () => {
      cy.visit('http://localhost:3000');
      cy.contains('My Work').should('exist');
    });
  });