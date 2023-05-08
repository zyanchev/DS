it('Does the "Email" input field can be filled with an email adress in the "subscribe to our newsletter" section', () => {

    cy.visit('https://mind-wend-913065.framer.app/')

    cy.scrollTo('bottom')

    cy.get('.framer-l3ry8h')
        .should('be.visible')

    cy.get('.framer-mailchimp-input')
        .should('be.visible')
        .type('dreamshotrocks@gmail.com')
        .then((inputEmail) => {
            const email = inputEmail[0].value
            expect(email).to.eq('dreamshotrocks@gmail.com')
        })
})
