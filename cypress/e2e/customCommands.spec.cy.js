
describe('custom commands test', () => {

    it('custom commands test',  () => {

      const email = "test@wp.pl";
      const password = "12345!";
      //
      cy.visit('http://a.testaddressbook.com');
      cy.get('#sign-in').click();

      // cy.clickLink('Buy Now')

      // cy.get('#session_email').type(email);
      // cy.get("#session_email").type(password);
      // cy.get('[data-test="submit"]').click();

      cy.zalogowanie(email, password) //customowa funkcja z commands.js


    });
});