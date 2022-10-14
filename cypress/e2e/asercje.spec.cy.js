describe('Asercje', () => {
    it('Asercje',  () => {

      //implicit asertion
      //.find('')
      //.first('')
      //.should('')
      //.and('')


      //explicit asertion
      cy.request('POST', 'https://regres.in/api/users',

      {
        "name": "Dave",
        "job": "Developer"
      })

          .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.duration).to.be.below(1000);
            expect(response.body).to.have.property("name", "Dave");
            expect(response.body).to.have.property("job", "Developer");
      });

      //komendy zawierające asercje

      cy.visit() //asercja ze status 200
      cy.request()
      cy.contains() //istnieje w DOM
      cy.get() //element zaistnieje w DOM
          .find() //bedzie w DOM
          .type() // wpisanie tekstu
          .click() //kliknięcie
          .its() //znajdzie właściwość na bieżacy temat


      // asercje napopularniejsze

          cy.get('.tr-by').should('be.visible').and('contain.value', 1);
          cy.get('.tr-by').should('contain.text');


    });
});