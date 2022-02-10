describe("Search on Geniusee", () => {
  it("Search on only Geniusee word", () => {
    cy.visit("https://www.google.com.ua/");
    cy.get("input[title='Пошук']").type("Geniusee").type("{enter}");
    cy.contains("https://geniusee.com");
    cy.contains("https://jobs.dou.ua").click();
  });
});
