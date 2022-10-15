import HomePage from '../support/locators/HomePage.locators';
import SignIn from '../support/locators/SignInPage.locators';

describe('Home Page', () => {

  const homePage = new HomePage();
  const signIn = new SignIn();
  ``


  it('Otwórz strone sign in i się zaloguj i się wyloguj', () => {

    cy.visit('http://a.testaddressbook.com/');
    homePage.signInBtn().click();
    signIn.email_input().type('test12345@wp.pl');
    signIn.password_input().type('12345566');
    signIn.singIn_btn().click();

    homePage.addresses_btn().click();
    homePage.signOut_btn().click();
  });

  it('Otwórz strone sign in i się zaloguj i się wyloguj', () => {

    cy.visit('http://a.testaddressbook.com/');
    cy.signInClick();
    cy.zalogowanie("email", "hasło");

  });
});