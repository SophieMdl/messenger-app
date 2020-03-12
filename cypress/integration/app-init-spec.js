describe("App init", () => {
  it.only("display messages", () => {
    cy.visit("/");
    cy.get(".message").should("have.length", 3);
  });
});
