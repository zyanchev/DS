it("Does display the 'Updates' page after clicking the 'Update' button", () => {

    cy.visit('https://mind-wend-913065.framer.app/')
    cy.contains('Updates')
        .should('be.visible')
        .click()

    cy.url()
        .should('be.equal', 'https://mind-wend-913065.framer.app/updates')
})
