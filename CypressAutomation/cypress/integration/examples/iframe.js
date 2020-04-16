//import '@testing-library/cypress/add-commands'
/// <reference types="Cypress" />
import 'cypress-iframe'

describe("Mytest suite Bk",function()
{
    it("test",function()

    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.frameLoaded('#courses-iframe')
    //cy.iframe().find("a[href*='mentorship']").eq(0).should('be.visible').click()
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
     cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)   

})
})