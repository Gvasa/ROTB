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

function rotateAnimation(sprite, angle, time, repeat) {
    var numRotations = 0;
    if(repeat == true)
         numRotations = Number.MAX_VALUE;

    TWEENCHECK = game.add.tween(sprite).to({angle: angle}, time, Phaser.Easing.Linear.None, true, 0, numRotations);
}

function pulseScaleXYAnimation(sprite, xScale, yScale, time, repeat) {
    var numRotations = 0;
    if(repeat == true)
         numRotations = Number.MAX_VALUE;

    TWEENCHECK = game.add.tween(sprite.scale).to({x: xScale, y: yScale}, time, Phaser.Easing.Elastic.Out, true, 0 , numRotations, false);
}

function createWinBarrelGlow() {
    winBarrelGlow = game.add.sprite(tmpX, tmpY, 'winBarrelGlow');
    winBarrelGlow.alpha = false;
}
/*
function createSmokeParticles() {
    smokeEmitter = game.add.emitter(game.world.centerX, game.world.centerY, 20);
    smokeEmitter.makeParticles('smoke', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    smokeEmitter.maxParticleScale = 0.6;
    smokeEmitter.minParticleScale = 0.2;
    smokeEmitter.setYSpeed(20, 0);
    smokeEmitter.gravity = -100;
    smokeEmitter.width = 1;
    smokeEmitter.minRotation = 20;
    smokeEmitter.maxRotation = 100;
    smokeEmitter.setAlpha(0.1, 0, 2000);
    moveToYAnimation(smokeEmitter, 900, 1000);

    smokeEmitter.start(false, 2000, 10);
}
*/




