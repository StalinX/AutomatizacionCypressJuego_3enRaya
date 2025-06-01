class HomePageActions {
  
    static openPageWeb() {
        cy.visit('/react-tutorial-solutions/')
        cy.title().should('eq', 'React App')
    }
    static selectPlayerOne(index) {
        cy.get('.game-board').find('button').eq(index).click()
    }

    static selectPlayerTwo(index) {
        cy.get('.game-board').find('button').eq(index).click()
    }
}

export default HomePageActions;