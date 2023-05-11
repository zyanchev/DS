it("Does contain 4 questions in the FAQ section from'Pricing' page", () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('[data-framer-name="Desktop"]').contains('Pricing').should("be.visible").click()

    cy.contains('FAQ').parent().parent().siblings()
        .should('be.visible')
        .then((faqQuestions) => {
            const questionsLength = faqQuestions[0].childElementCount;
            expect(questionsLength).to.eq(4);
        });
})
