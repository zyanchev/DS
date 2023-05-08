it('Does contain 3 subscription plans in the subscription section from the "Pricing" page', () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('.framer-1g3amks-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span').should("be.visible")
        .click()

    cy.get('.pricing-container')
        .should('be.visible')
        .then((subscriptionPlans) => {
            const subscriptionPlansLength = subscriptionPlans[0].childElementCount
            expect(subscriptionPlansLength).to.eq(3)
        })
})