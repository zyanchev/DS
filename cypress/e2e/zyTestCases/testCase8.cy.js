it('Does display the "Components, Pricing and Updates" tabs.', () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('.framer-15kr31b-container > .framer-WalAV > .framer-1892sln')
        .should('be.visible')

    cy.get('.framer-1g3amks-container > .framer-WalAV > .framer-1892sln')
        .should('be.visible')

    cy.get('.framer-7hrpx3-container > .framer-WalAV > .framer-1892sln')
        .should('be.visible')   
})