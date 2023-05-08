it('Does display "Email" and "Password" box-shadow as "rgb(238, 68, 68) 0px 0px 0px 1px inset"', () => {

    cy.visit('https://mind-wend-913065.framer.app/')
    cy.get('.framer-xkblh5').click()
    cy.get(':nth-child(2) > input').click()
    cy.get('[style="width: 100%; display: grid; grid-auto-flow: row; gap: 15px;"] > [type="text"]')
        .should('be.visible')
        .invoke('css', 'box-shadow')
        .then((boxShadow) => {

            expect(boxShadow).to.eq('rgb(238, 68, 68) 0px 0px 0px 1px inset')
        })
})