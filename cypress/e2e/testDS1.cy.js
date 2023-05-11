it("Does display products's currency symbol as '$' in the 'Pricing' page", () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('[data-framer-name="Desktop"]').contains('Pricing').should("be.visible").click()

    cy.get('.pricing-container').children().each(($el) => {
        //expect($el.text()).to.match(/[$]/gm)  <--> option one
        cy.wrap($el.text())
            .should('contains', '$')
    })
})
