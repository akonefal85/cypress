import HomePage from './locators/HomePage.locators';

Cypress.Commands.add('signInClick', () => {

  const homePage = new HomePage();

  homePage.signInBtn().click();

})