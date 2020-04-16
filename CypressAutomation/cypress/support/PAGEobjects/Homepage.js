class Homepage
{
getEditBox()

{return cy.get('input[name="name"]:nth-child(2)')
}
getTwowayDataBinding()

{return cy.get('input[name="name"]:nth-child(1)')
}
getErradiobutton()

{return cy.get('#inlineRadio3')
}
}
export default Homepage;