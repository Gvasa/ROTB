function animationBoardIn() {
	var speed = 320;
	var counter = 0;
	for(var i = 0; i < 6; i ++) {
		for(var j = 0; j < 6; j++) {
				moveFromXAnimation(gameBoard[counter].barrelSprite, gameBoard[counter].spritePosX, speed);
				speed = speed+54;
				counter++;
		}
		speed=320;
	}
}

function animationBoardOut() {
	var speed = 320;
	var counter = 0;
	for(var i = 0; i < 6; i ++) {
		for(var j = 0; j < 6; j++) {
				moveFromXAnimation(gameBoard[counter].barrelSprite, -1000, speed);
				speed = speed+54;
				counter++;
		}
		speed=320;
	}

}

function animateColUp(colArray) {
	var speed = 250;

	var tmpBarrel = game.add.sprite(gameBoard[colArray[0]].spritePosX,gameBoard[colArray[0]].spritePosY, gameBoard[colArray[0]].barrelType);
	game.world.bringToTop(guiGroup);
	game.world.bringToTop(gameBoard[winIndex].barrelSprite);	
	gameBoard[colArray[0]].barrelSprite.y = 960+BARREL_HEIGHT;

	for(var i = 0; i < 6; i++) {
		if(colArray[i] == winIndex) {
			continue;
		} else if(colArray[i-1] == winIndex) {
			if(gameBoard[colArray[i]].barrelType != BARREL_EMPTY) {
				moveToYAnimation(gameBoard[colArray[i]].barrelSprite, gameBoard[colArray[i]+5].spritePosY, speed);
				moveToYAnimation(gameBoard[colArray[i]].marking, gameBoard[colArray[i]+5].marking.y, speed);
			}
			else {
				if(winIndex == colArray[0]) {
					moveToYAnimation(gameBoard[colArray[i]].barrelSprite, gameBoard[colArray[5]+6].spritePosY, speed);
					moveToYAnimation(gameBoard[colArray[i]].marking, gameBoard[colArray[5]+6].marking.y, speed);
				}
				else {
					moveToYAnimation(gameBoard[colArray[i]].barrelSprite, gameBoard[colArray[i]+4].spritePosY, speed);
					moveToYAnimation(gameBoard[colArray[i]].marking, gameBoard[colArray[i]+4].marking.y, speed);
				}
			}
		}else if(i == 0) {
			moveToYAnimation(gameBoard[colArray[0]].barrelSprite, gameBoard[colArray[5]].spritePosY, speed);
			moveToYAnimation(gameBoard[colArray[0]].marking, gameBoard[colArray[5]].marking.y, speed);
		} else {
			moveToYAnimation(gameBoard[colArray[i]].barrelSprite, gameBoard[colArray[i]+5].spritePosY, speed);
			moveToYAnimation(gameBoard[colArray[i]].marking, gameBoard[colArray[i]+5].marking.y, speed);
		}
	}
	moveToYAnimation(tmpBarrel, -BARREL_HEIGHT, speed);
}

function animateColDown(colArray) {
	var speed = 250;

	var tmpBarrel = game.add.sprite(gameBoard[colArray[5]].spritePosX,gameBoard[colArray[5]].spritePosY, gameBoard[colArray[5]].barrelType);
	game.world.bringToTop(guiGroup);
	game.world.bringToTop(gameBoard[winIndex].barrelSprite);
	gameBoard[colArray[5]].barrelSprite.y = -BARREL_HEIGHT;

	for(var i = 0; i < 6; i++) {
		if(colArray[i] == winIndex) {
			continue;
		} else if(colArray[i+1] == winIndex) {
			if(gameBoard[colArray[i]].barrelType != BARREL_EMPTY) {
				moveToYAnimation(gameBoard[colArray[i]].barrelSprite, gameBoard[colArray[i]+7].spritePosY, speed);
				moveToYAnimation(gameBoard[colArray[i]].marking, gameBoard[colArray[i]+7].marking.y, speed);
			}
			else {
				if(winIndex == colArray[5]) {
					moveToYAnimation(gameBoard[colArray[i]].barrelSprite, gameBoard[colArray[5]+1].spritePosY, speed);
					moveToYAnimation(gameBoard[colArray[i]].marking, gameBoard[colArray[5]+1].marking.y, speed);
				}
				else {
					moveToYAnimation(gameBoard[colArray[i]].barrelSprite, gameBoard[colArray[0]+6].spritePosY, speed);
					moveToYAnimation(gameBoard[colArray[i]].marking, gameBoard[colArray[0]+6].marking.y, speed);
				}
			}
		}else if(i == 5) {
			moveToYAnimation(gameBoard[colArray[5]].barrelSprite, gameBoard[colArray[0]].spritePosY, speed);
			moveToYAnimation(gameBoard[colArray[5]].marking, gameBoard[colArray[0]].marking.y, speed);
		} else {
			moveToYAnimation(gameBoard[colArray[i]].barrelSprite, gameBoard[colArray[i]+7].spritePosY, speed);
			moveToYAnimation(gameBoard[colArray[i]].marking, gameBoard[colArray[i]+7].marking.y, speed);			
		}
	}
	moveToYAnimation(tmpBarrel, 960+BARREL_HEIGHT, speed);
}

function animateRowLeft(rowArray) {
	var speed = 250;

	var tmpBarrel = game.add.sprite(gameBoard[rowArray[0]].spritePosX, gameBoard[rowArray[0]].spritePosY, gameBoard[rowArray[0]].barrelType);
	
	game.world.bringToTop(guiGroup);
	game.world.bringToTop(gameBoard[winIndex].barrelSprite);

	gameBoard[rowArray[0]].barrelSprite.x = 640+BARREL_WIDTH;

	for(var i = 0; i < 6; i++) {
		if(rowArray[i] == winIndex)
			continue;
		else if(rowArray[i-1] == winIndex) {
			if(gameBoard[rowArray[i]].barrelType != BARREL_EMPTY) {
				moveToXAnimation(gameBoard[rowArray[i]].barrelSprite, gameBoard[rowArray[i]-5].spritePosX, speed);
				moveToXAnimation(gameBoard[rowArray[i]].marking, gameBoard[rowArray[i]-5].marking.x, speed);
			}
			else {
				if(winIndex == rowArray[0]) {
					moveToXAnimation(gameBoard[rowArray[i]].barrelSprite, gameBoard[rowArray[5]-1].spritePosX, speed);
					moveToXAnimation(gameBoard[rowArray[i]].marking, gameBoard[rowArray[5]-1].marking.x, speed);
				}
				else {
					moveToXAnimation(gameBoard[rowArray[i]].barrelSprite, gameBoard[rowArray[i]-11].spritePosX, speed);
					moveToXAnimation(gameBoard[rowArray[i]].marking, gameBoard[rowArray[i]-11].marking.x, speed);
				}
			}
		}else if(i == 0) {
			moveToXAnimation(gameBoard[rowArray[0]].barrelSprite, gameBoard[rowArray[5]].spritePosX, speed);
			moveToXAnimation(gameBoard[rowArray[0]].marking, gameBoard[rowArray[5]].marking.x, speed);
		} else {
			moveToXAnimation(gameBoard[rowArray[i]].barrelSprite, gameBoard[rowArray[i]-5].spritePosX, speed);
			moveToXAnimation(gameBoard[rowArray[i]].marking, gameBoard[rowArray[i]-5].marking.x, speed);
		}
	}
	if(rowArray[0] != winIndex)
		moveToXAnimation(tmpBarrel, -BARREL_WIDTH, speed);
}

function animateRowRight(rowArray) {
	var speed = 250;

	var tmpBarrel = game.add.sprite(gameBoard[rowArray[5]].spritePosX, gameBoard[rowArray[5]].spritePosY, gameBoard[rowArray[5]].barrelType);
	
	game.world.bringToTop(guiGroup);
	game.world.bringToTop(gameBoard[winIndex].barrelSprite);

	gameBoard[rowArray[5]].barrelSprite.x = -BARREL_WIDTH;

	for(var i = 0; i < 6; i++) {
		if(rowArray[i] == winIndex)
			continue;
		else if(rowArray[i+1] == winIndex) {
			if(gameBoard[rowArray[i]].barrelType != BARREL_EMPTY) {
				moveToXAnimation(gameBoard[rowArray[i]].barrelSprite, gameBoard[rowArray[i]+5].spritePosX, speed);
				moveToXAnimation(gameBoard[rowArray[i]].marking, gameBoard[rowArray[i]+5].marking.x, speed);
			}
			else {
				if(winIndex == rowArray[5]) {
					moveToXAnimation(gameBoard[rowArray[i]].barrelSprite, gameBoard[rowArray[0]-1].spritePosX, speed);
					moveToXAnimation(gameBoard[rowArray[i]].marking, gameBoard[rowArray[0]-1].marking.x, speed);
				}
				else {
					moveToXAnimation(gameBoard[rowArray[i]].barrelSprite, gameBoard[rowArray[i]-4].spritePosX, speed);
					moveToXAnimation(gameBoard[rowArray[i]].marking, gameBoard[rowArray[i]-4].marking.x, speed);
				}
			}
		}else if(i == 5) {
			moveToXAnimation(gameBoard[rowArray[5]].barrelSprite, gameBoard[rowArray[0]].spritePosX, speed);
			moveToXAnimation(gameBoard[rowArray[5]].marking, gameBoard[rowArray[0]].marking.x, speed);
		} else {
			/*if(BOTTOM_ROW.indexOf(rowArray[i]))
				moveToXAnimation(gameBoard[rowArray[i]].barrelSprite, gameBoard[rowArray[i]+1].spritePosX, speed);	
			else*/
				moveToXAnimation(gameBoard[rowArray[i]].barrelSprite, gameBoard[rowArray[i]+5].spritePosX, speed);
				moveToXAnimation(gameBoard[rowArray[i]].marking, gameBoard[rowArray[i]+5].marking.x, speed);			
		}
	}
	moveToXAnimation(tmpBarrel, 640+BARREL_WIDTH, speed);
}

function moveBarrelsToStartPosition() {
	resetBoard2();
	var counter = 0;
	for(var i = 0; i < 6; i ++) {
		for(var j = 0; j < 6; j++) {
				//console.log(gameBoard[j][i].barrelType);
				gameBoard[counter].barrelSprite.x = 1000;
				counter++;
		}
	}
}

function animateWinBarrel() {
    gameBoard[winIndex].barrelSprite.loadTexture('BARREL_WIN_LARGE');
    gameBoard[winIndex].barrelSprite.scale.setTo(BARREL_SPRITE_WIDTH/512, BARREL_SPRITE_HEIGHT/651);
    gameBoard[winIndex].barrelSprite.x = tmpX;
    gameBoard[winIndex].barrelSprite.y = tmpY;
    scaleXYAnimation(gameBoard[winIndex].barrelSprite, 0.5, 0.5, 700);
    moveToXYAnimation(gameBoard[winIndex].barrelSprite, 200, 420, 700);
}

function animateWinBarrelGlow() {
    winBarrelGlow.anchor.setTo(0.5, 0.5);
    winBarrelGlow.alpha = true;
    winBarrelGlow.scale.setTo(BARREL_SPRITE_HEIGHT/400, BARREL_SPRITE_HEIGHT/400);
    winBarrelGlow.x = (tmpX - BARREL_SPRITE_WIDTH/2) + BARREL_SPRITE_WIDTH;
    winBarrelGlow.y = (tmpY - BARREL_SPRITE_WIDTH/2) + BARREL_SPRITE_WIDTH + 50;
    scaleXYAnimation(winBarrelGlow, 1.6, 1.6, 700);
    moveToXYAnimation(winBarrelGlow, 320, 560, 700);
    rotateAnimation(winBarrelGlow, 360, 8000, true);
}

function resetGlowScale() {
        winBarrelGlow.scale.setTo(2,2);
}