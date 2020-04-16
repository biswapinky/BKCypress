//import '@testing-library/cypress/add-commands'
import Homepage from '../../support/PAGEobjects/Homepage'
import ProductPage from '../../support/PAGEobjects/ProductPage'

/// <reference types="Cypress" />
import 'cypress-iframe'

describe("Mytest suite Bk",function()
{
    before(() => {
        // runs once b efore all tests in the block
        cy.fixture('example').then(function(test)
        {
     this.data=test
        })
      })
    
    it("test",function()

    {
      
      const homepage=new Homepage()
     const productpage=new ProductPage()
     cy.visit(Cypress.env('url')+"/angularpractice/")
     homepage.getEditBox().type(this.data.name)
     cy.get('select').select(this.data.gender)
     homepage.getTwowayDataBinding().should('have.value',this.data.name)
     cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')

     homepage.getErradiobutton().should('have.be.disabled')
     //cy.pause()
     cy.get(':nth-child(2) > .nav-link').click()
    
  this.data.productname.forEach(function(element)
    {    cy.selectproduct(element)
     
      });
      
    productpage.ClickCheckout().click()
    var sum=0
    cy.get('tr td:nth-child(4) strong').each((e1, index, $list) => {
      const actualT=e1.text()
      var res=actualT.split(" ")
      res=res[1].trim()
      sum=Number(sum)+Number(res)
      
      }).then(function()
      {
        cy.log(sum)
      })
      cy.get('h3 strong').then(function(element)
      {
        const actualT=element.text()
        var res=actualT.split(" ")
        var total=res[1].trim()
        expect(Number(total)).to.equal(sum)
      }
      )
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.get('#country').type('India')
    Cypress.config('pageLoadTimeout', 100000)
    cy.get('.suggestions > ul > li > a').click()
    cy.get('body').click()
    cy.get('.ng-untouched > .btn').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element)
    {
      const actual=element.text()
      
      expect(actual.includes("Success")).to.be.true
      })
    
  })

})
