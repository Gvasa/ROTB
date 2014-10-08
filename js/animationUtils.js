function moveFromYAnimation(sprite, fromY, speed) {
        TWEENCHECK = game.add.tween(sprite).to({y: fromY}, speed, Phaser.Easing.Linear.None, true);
        console.log('to:' + fromY);
}

function moveToYAnimation(sprite, toY, speed) {
    TWEENCHECK = game.add.tween(sprite).to({y: toY}, speed, Phaser.Easing.Linear.None, true);
    console.log('to:' + toY);
}

function moveFromXAnimation(sprite, fromX, speed) {
    TWEENCHECK = game.add.tween(sprite).to({x: fromX}, speed, Phaser.Easing.Linear.None, true);
}

function moveToXAnimation(sprite, toX, speed) {
    TWEENCHECK = game.add.tween(sprite).to({x: toX}, speed, Phaser.Easing.Linear.None, true);
}

function moveToXYAnimation(sprite, toX, toY, speed) {
    TWEENCHECK = game.add.tween(sprite).to({x: toX, y: toY}, speed, Phaser.Easing.Linear.None, true);
}

function tintGame(sprite, alpha, time) {
    TWEENCHECK = game.add.tween(sprite).to({alpha: alpha}, time, Phaser.Easing.Linear.None, true);
}

function scaleXYAnimation(sprite, xScale, yScale, time) {
    TWEENCHECK = game.add.tween(sprite.scale).to({x: xScale, y: yScale}, time, Phaser.Easing.Linear.None, true);
}