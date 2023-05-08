it('Does the "Password" input field can be filled with password in the "Sign Up" page', () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('.framer-xkblh5')
        .should('be.visible')
        .click()

    cy.url()
        .should('be.equal', 'https://mind-wend-913065.framer.app/signup')

    cy.get('[style="width: 100%; display: grid; grid-auto-flow: row; gap: 15px;"] > [type="email"]')
        .should('be.visible')
        .type('Password1!')
        .then((inputPassword) => {
            const password = inputPassword[0].value
            expect(password).to.eq('Password1!')

        })
})