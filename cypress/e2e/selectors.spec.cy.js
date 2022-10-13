describe('Lokatory', () => {
  it('Lokatory', () => {
    cy.visit("https://www.ebay.pl/");
    cy.get("#gh-ac").type("sukienka");

    cy.get("[name='_nkw']");

    cy.get("[placeholder='Wyszukaj cos']");

    cy.contains("Moda");

    cy.get(".h1-cat-nav__js-tab").contains("Moda");
  })
})





