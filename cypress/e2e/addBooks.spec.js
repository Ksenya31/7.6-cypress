describe("When user add the books", () => {
  it("Should be able to add a book", () => {
      cy.visit("/");
      cy.login("test@test.com", "test");
      cy.typeForm(
          "Eat, Pray, Love",
          "One of the most iconic, beloved, and bestselling books of our time from the bestselling author of City of Girls and Big Magic, Elizabeth Gilbert.",
          " Elizabeth Gilbert"
      );
      cy.contains("Submit").click();
      cy.contains("Eat, Pray, Love");
  });

  it("Should not be able to add a book with empty form", () => {
      cy.visit("/");
      cy.login("test@test.com", "test");
      cy.typeForm(" ", " ", " ");
      cy.contains("Submit").click();
      cy.get("#title")
          .then(($el) => $el[0].checkValidity())
          .should("be.false");
      cy.get("#title")
          .then(($el) => $el[0].validationMessage)
          .should("contain", "Заполните это поле.");
  });

  it("Should be able to add a book to favorite", () => {
      cy.visit("/");
      cy.login("test@test.com", "test");
      cy.typeForm(
          "Eat, Pray, Love",
          "One of the most iconic, beloved, and bestselling books of our time from the bestselling author of City of Girls and Big Magic, Elizabeth Gilbert.",
          " Elizabeth Gilbert");
      cy.contains("Submit").click();
      cy.contains("Eat, Pray, Love");
      cy.get(".card-body").contains("Eat, Pray, Love").parent().siblings().children("button").click();
      cy.contains("Favorites").click();
      cy.contains("Eat, Pray, Love");
  });
});