it("Does display 'Components, Pricing, Updates, Discord, Youtube and Instagram'", () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.scrollTo('bottom')

    cy.get('.framer-lkghj5')
        .should('be.visible')

    cy.get('.framer-vtutgm')
        .should('be.visible')

    cy.get('.framer-noy31m')
        .should('be.visible')

    cy.get('.framer-t9j8v3')
        .should('be.visible')

    cy.get('.framer-xa3te1')
        .should('be.visible')

    cy.get('.framer-hsibnc')
        .should('be.visible')
})