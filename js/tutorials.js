function loadTutorials() {
    tutorial_1_1 = game.add.sprite(114,-20,'tutorial_1_1');
    tutorial_1_2 = game.add.sprite(113,-20,'tutorial_1_2');
    tutorial_1_3 = game.add.sprite(115,-20,'tutorial_1_3');
    
    tutorial_1_1.alpha = false;
    tutorial_1_2.alpha = true;
    tutorial_1_3.alpha = false;

}

function swapTutorials(index) {
    if(index == 1) {
        tutorial_1_1.alpha = true;
        tutorial_1_2.alpha = false;
        tutorial_1_3.alpha = false;
    } else if(index == 2) {
        tutorial_1_1.alpha = false;
        tutorial_1_2.alpha = true;
        tutorial_1_3.alpha = false;
    } else {
        tutorial_1_1.alpha = false;
        tutorial_1_2.alpha = false;
        tutorial_1_3.alpha = true;
    }
}

function clearTutorials() {
    tutorial_1_1.alpha = false;
    tutorial_1_2.alpha = false;
    tutorial_1_3.alpha = false;
}