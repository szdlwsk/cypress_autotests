describe('Login page tests', function () {
    it('Correct login, correct password', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('al.shidlovsky@yandex.ru');
        cy.get('#password').type('******');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(2) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4822567172618387');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('0331');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('***');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Test Name');
        cy.get('.pay-btn').should('be.enabled'); 
        cy.get('.pay-btn').click(); 
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').should('be.enabled'); 
        cy.get('.payment__submit-button').click();
     })
})
    