//import '@testing-library/cypress/add-commands'
/// <reference types="Cypress" />

describe("Mytest suite Bk",function()
{
    it("test",function()

    {
        //cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //windows :alert
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        }
        )
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }
        )
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.go('back')
        cy.url().should('include','rahulshettyacademy')
    })

})
