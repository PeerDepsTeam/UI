describe("Proplate generated e2e testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should bootstrap the project correctly", () => {
    // 'ui' being a dynamic var
    cy.contains("ui works");
  });
});
