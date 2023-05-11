it("Does blur the background after clicking 'Get the app' button", () => {

    cy.visit('https://mind-wend-913065.framer.app/')
    
    cy.get('.get-app-button')
        .should('be.visible')
        .click()

    cy.get('.framer-vrqh0x')
        .should('have.css', 'backdrop-filter')
        .then((blur) => {
            expect(blur).to.not.equal('blur(0px)')
        })
})
