class pageTokiTime{
    elements = {
        btnPlayGame: () => cy.get('[class="btn btn-game"]'),
        popUpFullScreen: () => cy.get('[id^=tk-game-gui-tk-tokitime-]'),
        barLoadingGame: () => cy.get('[id="progressBarHolder"]'),
        btnStartGameRound: () => cy.get('[id$=-singleSpinButtonContainer]'),
        btnMenu: () => cy.get('[id$=-openMenuButtonContainer]'),
        btnAutoplay: () => cy.get('[id$=-autospinButtonContainer]'),
        btnBet: () => cy.get('[id$=-betButtonContainer]'),
    }

    //Function to click on button Play Game
    clickBtnPlayGame() {
        this.elements.btnPlayGame().click();
    }

    //Validate popUpFullScreenClickArea
    validateFullScreenClickArea() {
        this.elements.popUpFullScreen().should('be.visible');
    }

    //Validate Loading Bar
    validateLoadingBar() {
        this.elements.barLoadingGame().should('be.visible');
    }

    //Function to click on button start a game round
    clickBtnStartGameRound() {
        this.elements.btnStartGameRound().click();
    }

    //Function to focus on pop-up
    focusPopUp() {
        this.elements.popUpFullScreen().focus();
    }

    //Function to click on button menu
    clickBtnMenu() {
        this.elements.btnMenu().click();
    }

    //Function to click on button Autoplay
    clickBtnAutoplay() {
        this.elements.btnAutoplay().click();
    }

    //Function to click on button Bet
    clickBtnBet() {
        this.elements.btnBet().click();
}

}

module.exports = new pageTokiTime();