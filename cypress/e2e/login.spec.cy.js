describe('Korzystanie z fixtures files, writeFile i readFile', () => {

    it('cy.fixture',  () => {

      cy.visit('https://the-internet.herokuapp.com/login');
      cy.fixture('testData').then(function (testData) {

        this.testData = testData;

        cy.get('#username').type(this.testData.username);
        cy.get('#password').type(this.testData.password);
        cy.get('.radius').click();
      });

      cy.get('#flash').should('contain.text', 'You logged into a secure area!');


    });

  it('cy.writeFile oraz cy.readFile',  () => {

    cy.visit('https://the-internet.herokuapp.com/login');
    cy.fixture('testData').then(function (testData) {

      this.testData = testData;

      cy.get('#username').type(this.testData.username);
      cy.get('#password').type(this.testData.password);
      cy.get('.radius').click();
    });

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.get('.subheader').then((headerText) => {
    cy.get('.large-4').then((footerText) => {

      const footer = footerText.text();
      const text = headerText.text();

      cy.writeFile('cypress/fixtures/subheader.json', {alertText: text, footerText: footer})
      cy.readFile('cypress/fixtures/subheader.json').then((napisHeader) => {
        cy.log(napisHeader.alertText);
        cy.log(napisHeader.footerText);
      })

    })
    })



  });
});