
it("Does display 'get the app' and 'watch video' one above the other on mobile", () => {

    cy.visit('https://mind-wend-913065.framer.app/')
    cy.viewport('iphone-5')

    cy.contains('Get')
        .scrollIntoView()
        .should('be.visible')
        .then(target => {
            const getTheAppCoordinates = target[0].getBoundingClientRect()
            cy.contains('Watch')
                .should('be.visible')
                .then(target => {
                    const watchVideoCoordinates = target[0].getBoundingClientRect()
                    let oneAboveOtherFlag = false

                    if (watchVideoCoordinates.bottom > getTheAppCoordinates.bottom) oneAboveOtherFlag = true

                    expect(oneAboveOtherFlag).to.eq(true)
                })
        })
})
