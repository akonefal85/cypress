describe('Wyszukiwanie produktu na stronie ebay.pl', () => {

  it('Powinien wyszukać produkt', () => {

    cy.visit('https://www.ebay.pl/');
    cy.get('#gh-ac').type('swetr');
    cy.get('#gh-btn').click();
    cy.get('.srp-results')
        .find("s-item")
        .first()
        .should("be.visible")
        .and('contain.text', "swetr");


  })

})