class SignIn
{
  email_input()
  {
    return cy.get('#session-email');
  }

  password_input() {
    return cy.get('#session-password');
  }

  singIn_btn() {
    return cy.get('[data-test=""submit]');
  }

  signUp_btn() {
    return cy.get('[data-test="sign-up"]');
  }

};
export default SignIn;