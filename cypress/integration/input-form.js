describe("submit new message", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const typedText = "kikoo";
  it("accepts input", () => {
    cy.get(".new-message .MuiInputBase-input")
      .type(typedText)
      .should("have.value", typedText);
  });

  it("clean input on submit", () => {
    cy.get(".new-message .MuiInputBase-input").type(typedText);
    cy.get(".submit-button")
      .click()
      .should("have.value", "");
  });

  it("display new message on the list", () => {
    cy.get(".new-message .MuiInputBase-input").type(typedText);
    cy.get(".submit-button").click();
    cy.get(".message").should("have.length", 4);
  });

  it("submit button is disabled when input is empty", () => {
    cy.get(".submit-button").should("have.attr", "disabled");
  });
});
