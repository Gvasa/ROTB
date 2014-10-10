function moveFromYAnimation(sprite, fromY, speed) {
    game.add.tween(sprite).to({y: fromY}, speed, Phaser.Easing.Linear.None, true);
    console.log('to:' + fromY);
}

function moveToYAnimation(sprite, toY, speed) {
    game.add.tween(sprite).to({y: toY}, speed, Phaser.Easing.Linear.None, true);
    console.log('to:' + toY);
}

function moveFromXAnimation(sprite, fromX, speed) {
    game.add.tween(sprite).to({x: fromX}, speed, Phaser.Easing.Linear.None, true);
}

function moveToXAnimation(sprite, toX, speed) {
    game.add.tween(sprite).to({x: toX}, speed, Phaser.Easing.Linear.None, true);
}
