it('Does display "Sign Up" button on the top right corner of the page', () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('.framer-xkblh5')
        .should('be.visible')
        .click()
})