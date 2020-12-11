describe("First test", () => {
  it("should open pokemon card", () => {
    cy.visit("http://localhost:4200");
    cy.get(':nth-child(2) > app-list-item > .item-wrapper').click();
    cy.url().should('include', '/card')
  });

  it("should open pokemon card", () => {
    cy.visit("http://localhost:4200");
    cy.get(':nth-child(2) > app-list-item > .item-wrapper').click();
    cy.get('.edit-icon').click();
  });

  it("should update pocemon name", () => {
    cy.visit("http://localhost:4200");
    cy.get(':nth-child(2) > app-list-item > .item-wrapper').click();
    cy.get('.edit-icon').click();
    cy.get(':nth-child(2) > .ng-untouched').clear().type('Testosaur');
    cy.get('.btn-submit').click();
    cy.contains('h2', 'Testosaur');
  });
});
