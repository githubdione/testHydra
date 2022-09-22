import pageTokiTime from "../pageObject/pageTokiTime"

describe('Test Game Tok Time', () => {

  it('Open URL of the game', () => {
    cy.visit('https://www.thunderkick.com/games/toki-time/')
  })

  //Click on button "Play Game"
  it('Test Case 1 - Play Game', () => {
    pageTokiTime.clickBtnPlayGame();
    //cy.wait(3000);
    //pageTokiTime.should('be.visible').validateLoadingBar();
    //pageTokiTime.wait(be.visible).validateLoadingBar();
    //pageTokiTime.validateFullScreenClickArea();
  })
  
  //Click on button "Start a game round"
  it('Test Case 2 - Start a game round', () => {
    cy.wait(20000);
    pageTokiTime.clickBtnStartGameRound();
    //pageTokiTime.clickBtnStartGameRound().wait(5000);
  })

  //Check the game rules
  it('Test Case 3 - See the game rules', () => {
    cy.wait(20000);
    cy.focused();
    //pageTokiTime.focusPopUp();
    pageTokiTime.clickBtnMenu();
  })

    //Check the game paytable
    it('Test Case 4 - See the game paytable', () => {
      pageTokiTime.clickBtnMenu();
    })

  //Choose a bet value
  it('Test Case 5 - Choose a bet value', () => {
    pageTokiTime.clickBtnBet();

  })

  //Choose an autoplay value
  it('Test Case 6 - Choose an autoplay value', () => {
    pageTokiTime.clickBtnAutoplay();

  })


})