it("Does contain 4 questions in the FAQ section from'Pricing' page", () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('.framer-1g3amks-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span').should("be.visible").click()

    cy.get('.framer-eabl6y')
        .should('be.visible')
        .then((faqQuestions) => {
            const questionsLength = faqQuestions[0].childElementCount;
            expect(questionsLength).to.eq(4);
        });
})