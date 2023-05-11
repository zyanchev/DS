it("Does display 'visit' button on each card in the 'Many types of components to customize' section", () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('[data-framer-name="Section"]').scrollIntoView()

    cy.get('[data-framer-name="Section"] [data-framer-name*="Card"]').should("be.visible").each(($el) => {
        cy.wrap($el.text())
            .should('contains', 'Visit')
    })

})
