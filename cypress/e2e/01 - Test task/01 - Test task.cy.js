describe('Test task', () => {

  it('Сhecking the balance and transactions', () => {

    cy.visit('/angularJs-protractor/BankingProject/#/login');

    cy.contains('Customer Login')
      .click();

    cy.get('#userSelect')
      .select('Harry Potter');

    cy.contains('Login')
      .click();

    cy.contains('Deposit')
      .click();

    const currentDay = new Date().getDate();
    const number = 1;
    const currentDayPlusNumber = fib(currentDay + number);

    cy.get('input')
      .type(currentDayPlusNumber);

    cy.get("[type='submit']")
      .click();

    cy.contains('Deposit Successful')
      .should('be.visible');

    cy.contains('Withdrawl')
      .click();

    cy.contains('Deposit Successful')
      .should('not.exist');

    cy.get('input')
      .type(currentDayPlusNumber);

    cy.get("[type='submit']")
      .click();

    cy.contains('Transaction successful')
      .should('be.visible');

    cy.contains('Balance').within(() => {
      cy.get('strong:nth-child(2)')
        .should('have.text', '0')
        .wait(2000);
    });

    cy.contains('Transactions')
      .click();

    cy.get('tbody')
      .children()
      .each((el) => {
        cy.get(el).within(() => {
          cy.contains(currentDayPlusNumber)
            .should('be.visible')
        })
      })

  });
});

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
