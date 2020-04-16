import '@testing-library/cypress/add-commands'
/// <reference types="Cypress" />

describe("Mytest suite Bk",function()
{
    it("test",function()

    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // should right display button name only
        cy.findAllByText('Home').should('exist')
        cy.findAllByText('Practice').should('exist')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        //static and dynamic dropdown
        cy.get('select').select('option2').should('have.value','option2')
       //dynamic
       cy.get('#autocomplete').type('ind')
       cy.get('.ui-menu-item div').each(($ep, index, $list) => {
          
           if($ep.text()==='India')
           {
            $ep.click()
           }
           })
           cy.get('#autocomplete').should('have.value','India')
           cy.get('#displayed-text').should('be.visible')
           cy.get('#hide-textbox').should('be.visible')
           cy.get('#hide-textbox').click()
           cy.get('#displayed-text').should('not.be.visible')
           cy.get('#show-textbox').click()
           cy.get('#displayed-text').should('be.visible')
           //RADIO BUTTON
           cy.get('input[value="radio2"]').check()
           cy.get('input[value="radio2"]').click().should('be.visible','radio2')

           


    }
    )
}

)