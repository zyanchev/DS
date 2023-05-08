it("Does display 'visit' button on each card in the 'Many types of components to customize' section", () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.scrollTo(0, 1500)

    cy.get('.components-container')
        .should('be.visible')

    cy.get('.framer-1w9oj9t')
        .should('be.visible')

    cy.get('.framer-xgqu5n')
        .should('be.visible')

    cy.get('.framer-16u1l33')
        .should('be.visible')

    cy.get('.framer-1ddbpjz')
        .should('be.visible')

    cy.get('.framer-1s9w9eh')
        .should('be.visible')
})