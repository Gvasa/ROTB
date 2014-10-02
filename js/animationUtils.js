function moveFromYAnimation(sprite, fromY, speed) {
        TWEENCHECK = game.add.tween(sprite).to({y: fromY}, speed, Phaser.Easing.Linear.None, true);
        console.log('to:' + fromY);
}

function moveToYAnimation(sprite, toY, speed) {
    TWEENCHECK = game.add.tween(sprite).to({y: toY}, speed, Phaser.Easing.Linear.None, true);
    console.log('to:' + toY);
    //game.add.tween(mainMenuButtonSprite1).to({y: -465-113}, 700, Phaser.Easing.Bounce.Out, true);
    //game.add.tween(mainMenuButtonSprite2).to({y: -365-113}, 700, Phaser.Easing.Bounce.Out, true);
}

function moveFromXAnimation(sprite, fromX, speed) {
    TWEENCHECK = game.add.tween(sprite).to({x: fromX}, speed, Phaser.Easing.Linear.None, true);
}

function moveToXAnimation(sprite, toX, speed) {
    TWEENCHECK = game.add.tween(sprite).to({x: toX}, speed, Phaser.Easing.Linear.None, true);
}

/*
function dropLevelMenu() {
    game.add.tween(header).from({y: -310-598}, 700, Phaser.Easing.Bounce.In, true);
    game.add.tween(levelButton1.buttonSprite).from({x: -1000}, 700, Phaser.Easing.Bounce.In, true);
    game.add.tween(levelButton2.buttonSprite).from({x: -1000}, 670, Phaser.Easing.Bounce.In, true);
    game.add.tween(levelButton3.buttonSprite).from({x: -1000}, 640, Phaser.Easing.Bounce.In, true);
    game.add.tween(levelButton4.buttonSprite).from({x: -1000}, 610, Phaser.Easing.Bounce.In, true);
    game.add.tween(levelButton5.buttonSprite).from({x: -1000}, 580, Phaser.Easing.Bounce.In, true);
}

function rollUpLevelMenu() {
    game.add.tween(header).to({y: -310-598}, 700, Phaser.Easing.Bounce.In, true, 700);
    game.add.tween(levelButton1.buttonSprite).to({y: 1000}, 700, Phaser.Easing.Bounce.In, true, 700);
    game.add.tween(levelButton2.buttonSprite).to({y: 1000}, 700, Phaser.Easing.Bounce.In, true, 700);
    game.add.tween(levelButton3.buttonSprite).to({y: 1000}, 700, Phaser.Easing.Bounce.In, true, 700);
    game.add.tween(levelButton4.buttonSprite).to({y: 1000}, 700, Phaser.Easing.Bounce.In, true, 700);
    game.add.tween(levelButton5.buttonSprite).to({y: 1000}, 700, Phaser.Easing.Bounce.In, true, 700);
}*/