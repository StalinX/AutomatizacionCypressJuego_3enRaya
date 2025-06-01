import HomePageActions from '../support/homePageActions';
import 'cypress-mochawesome-reporter/register';

describe('Tic-Tac-Toe Game Test Cases', () => {
  it('Game Won', () => {
    HomePageActions.openPageWeb();

    const moves = [
      [HomePageActions.selectPlayerOne, 0],
      [HomePageActions.selectPlayerTwo, 1],
      [HomePageActions.selectPlayerOne, 3],
      [HomePageActions.selectPlayerTwo, 4],
      [HomePageActions.selectPlayerOne, 6],
    ];

    moves.forEach(([action, pos]) => action(pos));
    cy.contains('"X" is winner!').should('be.visible');
  });

    it('Game Draw', () => {
    HomePageActions.openPageWeb();

    const moves = [
      [HomePageActions.selectPlayerOne, 0],
      [HomePageActions.selectPlayerTwo, 1],
      [HomePageActions.selectPlayerOne, 2],
      [HomePageActions.selectPlayerTwo, 3],
      [HomePageActions.selectPlayerOne, 5],
      [HomePageActions.selectPlayerTwo, 6],
      [HomePageActions.selectPlayerOne, 7],
      [HomePageActions.selectPlayerTwo, 8],
      [HomePageActions.selectPlayerOne, 4],
      
    ];

    moves.forEach(([action, pos]) => action(pos));
    cy.contains('Draw!').should('be.visible');
  });

});