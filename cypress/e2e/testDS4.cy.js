it("Does display 'Sign up' button's color as 'rgb(255,82,79)'", () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.scrollTo("bottom")

    cy.get('[style="position:relative"] > input')
        .should('be.visible')
        .invoke('css', 'background-color')
        .then((color) => {
            expect(color).to.eq('rgb(255, 82, 79)')
        })
})