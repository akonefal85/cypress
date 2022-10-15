class HomePage
{
  signInBtn()
  {
    return cy.get('#sign-in');
  }

  addresses_btn() {
    return cy.get('[data-test=adresses]');
  }

  signOut_btn() {
    return cy.get('[data-test=sign-out]');
  }

};

export default HomePage