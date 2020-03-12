describe("correctly display message", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("display private message", () => {
    cy.get(".private-message").should("have.length", 1);
  });

  it("display public message", () => {
    cy.get(".public-message").should("have.length", 2);
  });

  it("display new message as private", () => {
    const typedText = "YOYOYOYO";
    cy.get(".MuiInputBase-input").type(typedText);
    cy.get(".PrivateSwitchBase-input-81").check("private");
    cy.get(".submit-button").click();
    cy.get(".private-message").should("have.length", 2);
  });
});
