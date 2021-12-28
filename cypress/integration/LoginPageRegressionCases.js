/// <reference types="cypress" />
describe('Login Page Regression',()=>{
    it('User should be able to login after providing valid username and password', function() {

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        cy.get('#flash').should('contain','secure area')
    })

    it('Flash error message should be displayed on login page for Incorrect Password', function() {

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword')
        cy.get('.fa').click()
        cy.get('#flash').should('contain.text','Your password is invalid!')
    })

    it('Flash error message should be displayed on login page for Invalid username', function() {

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('test')
        cy.get('#password').type('SuperSecretPassword')
        cy.get('.fa').click()
        cy.get('#flash').should('contain.text','Your username is invalid!')
    })

    it('Flash error message should be displayed on login page for empty username', function() {

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#password').type('SuperSecretPassword')
        cy.get('.fa').click()
        cy.get('#flash').should('contain.text','Please enter Username!')
    })

    it('Flash error message should be displayed on login page for empty password', function() {

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('Test')
        cy.get('.fa').click()
        cy.get('#flash').should('contain.text','Please enter password!')
    })
})