describe('Login page tests', function () {
    it('Correct login, correct password', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); 
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
     })

    it('Correct login, invalid password', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('invaldpass');
        cy.get('#loginButton').should('be.enabled'); 
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
    })

    it('Invalid login, correct password', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#mail').type('invalidlogin@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); 
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
    })

    it('Validation - e-mail wihout @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); 
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
    })

    it('Password recovery', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru')
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
    })

    it('Correct login with uppercase, correct password,', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); 
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
     })
})