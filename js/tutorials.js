function loadTutorials() {
    tutorialFaded = game.add.sprite(0,0, 'tutorialFaded');
    tutorial_1_1 = game.add.sprite(115,-24,'tutorial_1_1');
    tutorial_1_2 = game.add.sprite(115,-24,'tutorial_1_2');
    tutorial_1_3 = game.add.sprite(115,-24,'tutorial_1_3');
    tutorialContinue = game.add.sprite(255,266, 'menuLowerButtonSprite');
    //tutorialContinue.inputEnabled = true;
    //tutorialContinue.events.onInputDown.add(tutorialListener, this);
    console.log('wtf');
    clearTutorials();
}

function showTutorials () {
    tutorial_1_1.alpha = true;
    tutorial_1_2.alpha = false;
    tutorial_1_3.alpha = false;
    tutorialFaded.alpha = true;

    console.log('wtf2');
}

function swapTutorials(index) {
    if(index == 1) {
        tutorial_1_1.alpha = true;
        tutorial_1_2.alpha = false;
        tutorial_1_3.alpha = false;
        tutorialFaded.alpha = true;
        tutorialContinue.alpha = true;
        tutorialContinue.inputEnabled = true;
        tutorialContinue.events.onInputDown.add(tutorialListener, this);
        game.world.bringToTop(gameBoard[4][4].barrelSprite);
        game.world.bringToTop(tutorialContinue);
        gameBoard[2][4].charges--;
        uppdateBarrelVisibility(2, true);
        gameBoard[2][4].barrelSprite.inputEnabled = false;
        gameBoard[2][3].barrelSprite.inputEnabled = false;
        console.log(index);
    } else if(index == 2) {
        tutorial_1_1.alpha = false;
        tutorial_1_2.alpha = true;
        tutorial_1_3.alpha = false;
        tutorialContinue.alpha = false;
        tutorialContinue.inputEnabled = false;
        game.world.bringToTop(tutorialFaded);
        game.world.bringToTop(tutorial_1_2);
        game.world.bringToTop(gameBoard[2][4].barrelSprite);
        gameBoard[2][4].barrelSprite.inputEnabled = true;
        console.log(index);
    } else if(index == 3) {
        tutorial_1_1.alpha = false;
        tutorial_1_2.alpha = false;
        tutorial_1_3.alpha = true;
        game.world.bringToTop(tutorialFaded);
        game.world.bringToTop(tutorial_1_3);
        game.world.bringToTop(gameBoard[2][3].barrelSprite);
        gameBoard[2][3].barrelSprite.inputEnabled = true;
        console.log(index);
    } else {
        tutorialFaded.alpha = false;
        console.log(index);
    }
}

function clearTutorials() {
    tutorial_1_1.alpha = false;
    tutorial_1_2.alpha = false;
    tutorial_1_3.alpha = false;
    tutorialFaded.alpha = false;
    tutorialContinue.alpha = false;
    game.world.bringToTop(menuButton1.buttonSprite);
}