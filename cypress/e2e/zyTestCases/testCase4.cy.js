it('Does the back "arrow" button redirects to the main page', () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('.framer-dh83y1')
        .should('be.visible')

    cy.get('.framer-1g3amks-container > .framer-WalAV > .framer-1892sln')
        .should('be.visible')
        .click()

    cy.url()
        .should('be.equal', 'https://mind-wend-913065.framer.app/pricing')

    cy.get('.framer-dh83y1')
        .should('be.visible')
        .click()

    cy.url()
        .should('be.equal', 'https://mind-wend-913065.framer.app/')
})
