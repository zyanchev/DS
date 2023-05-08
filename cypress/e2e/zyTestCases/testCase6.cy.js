it('Does the "Email" input field can be filled with email adress in the "Sign Up" page', () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.get('.framer-xkblh5')
        .should('be.visible')
        .click()

    cy.url()
        .should('be.equal', 'https://mind-wend-913065.framer.app/signup')

    cy.get('[style="width: 100%; display: grid; grid-auto-flow: row; gap: 15px;"] > [type="text"]')
        .should('be.visible')
        .type('dreamshotrocks@gmail.com')
        .then((inputEmail) => {
            const email = inputEmail[0].value
            expect(email).to.eq('dreamshotrocks@gmail.com')

        })
})