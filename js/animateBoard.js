function animationBoardIn() {
	var speed = 320;
	console.log('animationboardin');
	for(var i = 0; i < 6; i ++) {
		for(var j = 0; j < 6; j++) {
				moveFromXAnimation(gameBoard[j][i].barrelSprite, j*BARREL_WIDTH+X_SHIFT, speed);
				speed = speed+54;
		}
		speed=320;
	}
}

function animationBoardOut() {
	var speed = 320;
	console.log('animationBoardOut');
	for(var i = 0; i < 6; i ++) {
		for(var j = 0; j < 6; j++) {
				moveFromXAnimation(gameBoard[j][i].barrelSprite, -1000, speed);
				speed = speed+54;
		}
		speed=320;
	}

}

function animateRowRight(row) {
	var speed = 1000;
	console.log('animate row');
	for(var i=0; i < 6; i++){
		moveToXAnimation(gameBoard[i][row].barrelSprite, (i*BARREL_WIDTH), speed);
	}
}

function moveBarrelsToStartPosition() {
	console.log('heheh');
	for(var i = 0; i < 6; i ++) {
		for(var j = 0; j < 6; j++) {
				//console.log(gameBoard[j][i].barrelType);
				gameBoard[j][i].barrelSprite.x = 1000;
		}
	}
}

function animateWinBarrel() {
	gameBoard[winBarrelCol][winBarrelRow].barrelSprite.loadTexture('BARREL_WIN_LARGE');
    gameBoard[winBarrelCol][winBarrelRow].barrelSprite.scale.setTo(BARREL_SPRITE_WIDTH/512, BARREL_SPRITE_HEIGHT/651);
    gameBoard[winBarrelCol][winBarrelRow].barrelSprite.x = tmpX;
    gameBoard[winBarrelCol][winBarrelRow].barrelSprite.y = tmpY;
    scaleXYAnimation(gameBoard[winBarrelCol][winBarrelRow].barrelSprite, 0.5, 0.5, 700);
    moveToXYAnimation(gameBoard[winBarrelCol][winBarrelRow].barrelSprite, 200, 420, 700);
}

function animateWinBarrelGlow() {
	winBarrelGlow.anchor.setTo(0.5, 0.5);
    winBarrelGlow.alpha = true;
    winBarrelGlow.scale.setTo(BARREL_SPRITE_HEIGHT/400, BARREL_SPRITE_HEIGHT/400);
    winBarrelGlow.x = (tmpX - BARREL_SPRITE_WIDTH/2) + BARREL_SPRITE_WIDTH;
    winBarrelGlow.y = (tmpY - BARREL_SPRITE_WIDTH/2) + BARREL_SPRITE_WIDTH;
    scaleXYAnimation(winBarrelGlow, 1, 1, 700);
    moveToXYAnimation(winBarrelGlow, 320, 560, 700);
    rotateAnimation(winBarrelGlow, 360, 8000, true);
    //pulseScaleXYAnimation(winBarrelGlow, 0.9, 0.9, 700, true);
}