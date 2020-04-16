/// <reference types="Cypress" />

describe("Mytest suite Bk",function()
{
    it("test",function()

    {
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.server()
       cy.route(

       {
        method: 'PUT',
        url: 'comments/*',
        status: 404,
        response: {
           error: "Test Bk failing"
          },
          delay: 1000,
       }
       ).as("UpdateComment")
cy.get(".network-put").click()
cy.get('.network-put-comment').should('contain',"Test Bk failing")

    }
    )
}

)