it("Does display products's currency symbol as '$' in the 'Pricing' page", () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('.framer-1g3amks-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span').click()

    cy.get('.pricing-container')
        .should('be.visible')

    cy.get('.framer-56v206-container > .framer-27oml > .framer-2gfqi0 > .framer-5fq1xp > .framer-styles-preset-1m9bzi2 > .framer-text')
        .invoke('text')
        .should('contains', '$')

    cy.get('.framer-zfu15m-container > .framer-27oml > .framer-2gfqi0 > .framer-5fq1xp > .framer-styles-preset-1m9bzi2 > .framer-text')
        .invoke('text')
        .should('contains', '$')

    cy.get('.framer-1pr750r-container > .framer-27oml > .framer-2gfqi0 > .framer-5fq1xp > .framer-styles-preset-1m9bzi2 > .framer-text')
        .invoke('text')
        .should('contains', '$')
})