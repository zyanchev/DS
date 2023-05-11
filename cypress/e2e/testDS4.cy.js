it("Does display 'Sign up' button's color as 'rgb(255,82,79)'", () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('[data-framer-name="Footer"]').scrollIntoView()

    cy.get('[data-framer-name="Footer"] [type="submit"]')
        .should('be.visible')
        .invoke('css', 'background-color')
        .then((color) => {
            expect(color).to.eq('rgb(255, 82, 79)')
        })  
})
