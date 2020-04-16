//import '@testing-library/cypress/add-commands'
/// <reference types="Cypress" />

describe("Mytest suite Bk",function()
{
    it("test",function()

    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($ep, index, $list) => {
            const text =$ep.text()
            if(text.includes("Python"))
            {
             cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
             {
                const P = price.text()
                expect(P).to.equal('25')
             }         
             )
            }
            })
        
})
})