function loadTutorials() {
    tutorialFaded = game.add.sprite(0,0, 'tutorialFaded');
    tutorial_1_1 = game.add.sprite(115,-960,'tutorial_1_1');
    tutorial_1_2 = game.add.sprite(115,-20,'tutorial_1_2');
    tutorial_1_3 = game.add.sprite(115,-20,'tutorial_1_3');
    tutorialContinue = game.add.sprite(256,-1000, 'continueButtonSprite');
   
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
        moveFromYAnimation(tutorial_1_1, -20, 800);
        moveFromYAnimation(tutorialContinue, 270, 790);
        tutorial_1_1.alpha = true;
        tutorial_1_2.alpha = false;
        tutorial_1_3.alpha = false;
        tutorialFaded.alpha = true;
        tutorialContinue.alpha = true;
        tutorialContinue.inputEnabled = true;
        tutorialContinue.events.onInputDown.add(tutorialListener, this);
        game.world.bringToTop(guiGroup);
        game.world.bringToTop(gameBoard[4][4].barrelSprite);
        game.world.bringToTop(tutorial_1_1);
        game.world.bringToTop(tutorialContinue);
        uppdateBarrelVisibility(2, true);
        gameBoard[2][4].barrelSprite.inputEnabled = false;
        gameBoard[2][3].barrelSprite.inputEnabled = false;
        console.log(index);
    } else if(index == 2) {
        //rollUpMenuAnimation(tutorial_1_1, -910, 700);
        //dropMenuAnimation(tutorial_1_2, -910, 700);
        tutorial_1_1.alpha = false;
        tutorial_1_2.alpha = true;
        tutorialContinue.alpha = false;
        tutorialContinue.inputEnabled = false;
        game.world.bringToTop(tutorialFaded);
        game.world.bringToTop(guiGroup);
        game.world.bringToTop(tutorial_1_2);
        game.world.bringToTop(gameBoard[2][4].barrelSprite);
        gameBoard[2][4].barrelSprite.inputEnabled = true;
        console.log(index);
    } else if(index == 3) {
        //rollUpMenuAnimation(tutorial_1_2, -910, 700);
        //dropMenuAnimation(tutorial_1_3, -910, 700);
        tutorial_1_2.alpha = false;
        tutorial_1_3.alpha = true;
        game.world.bringToTop(tutorialFaded);
        game.world.bringToTop(guiGroup);
        game.world.bringToTop(tutorial_1_3);
        game.world.bringToTop(gameBoard[2][3].barrelSprite);
        gameBoard[2][3].barrelSprite.inputEnabled = true;
        console.log(index);
    } else {
       // rollUpMenuAnimation(tutorial_1_3, -910, 700);
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
    game.world.bringToTop(menuButton2.buttonSprite);
}