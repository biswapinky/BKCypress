//import '@testing-library/cypress/add-commands'
/// <reference types="Cypress" />

describe("Mytest suite Bk",function()
{
    it("test",function()

    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //cy.get('.search-keyword').type('ca')
        //cy.findAllByText('search-keyword').should('exist')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.findByTitle('Carrot - 1 Kg').should('exist')
      
        cy.get('.product:visible').should('have.length',4)
        //parent child
        // as used as Alias
        cy.get('.products').as('pin')
        cy.get('@pin').find('.product').should('have.length',4)
        cy.get('@pin').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@pin').find('.product').each(($ep, index, $list) => {
         const Veg = $ep.find('h4.product-name').text()    
        if(Veg.includes('Cashews'))
{
    $ep.find('button').click()
}
})
//assertion
cy.get('.brand').should('have.text','GREENKART')
    cy.get('.brand').then(function(brcand)
    {
        cy.log(brcand.text())
    }
    )
    }
    )
}

)