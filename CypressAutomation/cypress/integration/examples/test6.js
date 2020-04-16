//import '@testing-library/cypress/add-commands'
/// <reference types="Cypress" />

describe("Mytest suite Bk",function()
{
    it("test",function()

    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //cy.get('div.mouse-hover-content').invoke('show')
    
    //cy.contains('Top').click({ force: true })
    //cy.url().should('include','top')

    //,,,,,,,,,,,,,,,//
    cy.get('#opentab').then(function(test)
    
    {
        const r =test.prop('href')
    cy.visit(r)
    cy.log(r)
    })
        
})
})