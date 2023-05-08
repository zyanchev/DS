it("Does blur the background after clicking 'Get the app' button", () => {

    cy.visit('https://mind-wend-913065.framer.app/')
    cy.get('.framer-15fwyui')
        .should('be.visible')
        .click()

    cy.get('.framer-vrqh0x')
        .should('have.css', 'backdrop-filter')
        .then((blur) => {
            expect(blur).to.eq('blur(20px)')
        })
})