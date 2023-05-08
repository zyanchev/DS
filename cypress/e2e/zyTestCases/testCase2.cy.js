it("Does display 4 comments in 'How students learned from our courses' section  from the 'Pricing' page", () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('.framer-1g3amks-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span')
        .should("be.visible")
        .click()

    cy.scrollTo(0, 1000)
    cy.get('.framer-gidvwn')
        .should('be.visible')
        .then((comments) => {
            const commentsLength = comments[0].childElementCount
            expect(commentsLength).to.eq(4)
        })
})