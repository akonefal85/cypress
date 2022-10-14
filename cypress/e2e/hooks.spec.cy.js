describe('Hooks', () => {

  // before(() => {
  //   //raz przed testami
  // })
  const username = "Ola";
  const password = "123456789!";

  beforeEach(() => {
    //przed każdym testem
    //można tu umieścić cy.fixture beforeEach(function () {}
    // cy.clearCookies()
    // cy.clearLocalStorage();
    cy.visit('https://practice.automationbro.com/my-account/');
    // cy.get('#username').type(username);
    // cy.get('#password').type(password);
    // cy.get('button[name="login"]').click();
    cy.zalogowanie(username, password);
  })

  // after(() => {
  //   //raz po testach
  // })




    it('Logowanie',  () => {
      // cy.get(".jakas klasa").should("contain.text", username);
    });
  //
  // it('Logowanie',  () => {
  //   cy.get(".jakas klasa").should("contain.text", 'jakiś text');
  // });
  //
  // afterEach(() => {
  //   //   //po każdym teście
  //   cy.get("#logouttBtn").click();
  //   })
});