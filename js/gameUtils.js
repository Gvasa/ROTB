function levelComplete() {

	//var text = "- Gratz! -\n Level Complete";
    //var style = { font: "65px Arial", fill: "#ffd700", align: "center" };
    //var t = game.add.text(game.world.centerX-280, 0, text, style);
    sfxLevelComplete.play();
    complete = true;
    for(var i = 0; i < 6; i++)
      uppdateBarrelVisibility(i, true);
  	
    clearTutorials();
    tintGame(tintBlack, 1, 1000);

    //game.world.bringToTop(gameBoard[winBarrelCol][winBarrelRow].barrelSprite);
    tmpX = gameBoard[winBarrelCol][winBarrelRow].barrelSprite.x;
    tmpY = gameBoard[winBarrelCol][winBarrelRow].barrelSprite.y;

    gameBoard[winBarrelCol][winBarrelRow].barrelSprite.loadTexture('BARREL_WIN_LARGE');
    gameBoard[winBarrelCol][winBarrelRow].barrelSprite.scale.setTo(BARREL_SPRITE_WIDTH/512, BARREL_SPRITE_HEIGHT/651);
    gameBoard[winBarrelCol][winBarrelRow].barrelSprite.x = tmpX;
    gameBoard[winBarrelCol][winBarrelRow].barrelSprite.y = tmpY;
    scaleXYAnimation(gameBoard[winBarrelCol][winBarrelRow].barrelSprite, 0.5, 0.5, 700);
    moveToXYAnimation(gameBoard[winBarrelCol][winBarrelRow].barrelSprite, 200, 420, 700);

    
    

    //game.world.bringToTop(gameBoard[winBarrelCol][winBarrelRow].barrelSprite);
    //moveToXAnimation(gameBoard[winBarrelCol][winBarrelRow].barrelSprite, 115, 700);
    //moveToYAnimation(gameBoard[winBarrelCol][winBarrelRow].barrelSprite, 220, 700);

    if(parseInt(currentLevel.slice(-1)) < NUM_OF_LEVELS) {
        showPostGameMenu();
        console.log('FORTSATT');
    } else {
        showMenu();
        console.log('MENU PLS');
    }
}

function emptyBoard() {
	 
	for (var i = 0; i < TEST_CONSTANT; i++) {
			for(var j = 0; j < TEST_CONSTANT; j++) {
				var barrel;
				var chargeSprite1;
				var chargeSprite2;
				
				
        //barrel = game.add.sprite(i*BARREL_WIDTH*barrelSpacing+xShift+1000, j*BARREL_HEIGHT*barrelSpacing+yShift, BARREL_EMPTY);
				barrel = game.add.sprite(1000, j*BARREL_HEIGHT+Y_SHIFT, BARREL_EMPTY);
				chargeSprite1 = game.add.sprite(5,0, 'spriteStar');
				chargeSprite2 = game.add.sprite(5*6, 0, 'spriteStar');


				gameBoard[i][j] = new Barrel(BARREL_EMPTY, j, i, counter, barrel, 2, false, chargeSprite1, chargeSprite2);
	            
	            barrel.alpha = true;
				barrel.inputEnabled = true;
				chargeSprite1.alpha = false;
				chargeSprite2.alpha = false;
			
				barrel.addChild(chargeSprite1);
				barrel.addChild(chargeSprite2);
			
	            gameBoard[i][j].barrelSprite.events.onInputDown.add(listener,gameBoard[i][j]);
	          	gameBoard[i][j].barrelSprite.inputEnabled = false;
	            counter++;
		}
	}
}

function resetBoard() {
	for (var i = 0; i < TEST_CONSTANT; i++) {
			for(var j = 0; j < TEST_CONSTANT; j++) {
				gameBoard[i][j].barrelSprite.loadTexture(BARREL_EMPTY);
				gameBoard[i][j].barrelType = BARREL_EMPTY;
				gameBoard[i][j].visible = false;
				gameBoard[i][j].charges = 2;
		}
		uppdateBarrelVisibility(i, true);
	}
}

function uppdateBarrelVisibility(tmpPos, isCol) {
	if(isCol) {
        for(var i = 0; i < TEST_CONSTANT; i++) {
           	gameBoard[tmpPos][i].barrelSprite.inputEnabled = gameBoard[tmpPos][i].visible;
           	
           	if(gameBoard[tmpPos][i].barrelType != BARREL_WIN) {
           		if(gameBoard[tmpPos][i].charges == 2) {
           			gameBoard[tmpPos][i].chargeSprite1.alpha = gameBoard[tmpPos][i].visible;
           			gameBoard[tmpPos][i].chargeSprite2.alpha = gameBoard[tmpPos][i].visible;
           		} else if (gameBoard[tmpPos][i].charges == 1) {
           			gameBoard[tmpPos][i].chargeSprite1.alpha = gameBoard[tmpPos][i].visible;
           			gameBoard[tmpPos][i].chargeSprite2.alpha = false;
           		} else {
           			gameBoard[tmpPos][i].chargeSprite1.alpha = false;
           			gameBoard[tmpPos][i].chargeSprite2.alpha = false;
           		}
           	}           
        }
    } else {
        for(var i = 0; i < TEST_CONSTANT; i++) {  
           	gameBoard[i][tmpPos].barrelSprite.inputEnabled = gameBoard[i][tmpPos].visible;
           	
           		if(gameBoard[i][tmpPos].barrelType != BARREL_WIN) {
           		if(gameBoard[i][tmpPos].charges == 2) {
           			gameBoard[i][tmpPos].chargeSprite1.alpha = gameBoard[i][tmpPos].visible;
           			gameBoard[i][tmpPos].chargeSprite2.alpha = gameBoard[i][tmpPos].visible;
           		} else if (gameBoard[i][tmpPos].charges == 1) {
           			gameBoard[i][tmpPos].chargeSprite1.alpha = gameBoard[i][tmpPos].visible;
           			gameBoard[i][tmpPos].chargeSprite2.alpha = false;
           		} else {
           			gameBoard[i][tmpPos].chargeSprite1.alpha = false;
           			gameBoard[i][tmpPos].chargeSprite2.alpha = false;
           		}
           	} 
        }
    }
}

function printRow(rowId) {
	for (var i = 0; i < TEST_CONSTANT; i++) {
   		gameBoard[i][rowId].barrelInfo();
   	}
}

function printCol(colId) {

   	for (var i = 0; i < TEST_CONSTANT; i++) {
   		gameBoard[colId][i].barrelInfo();
   	}
}

function printBoard() {
	for (var j = 0; j < TEST_CONSTANT; j++) {
   	    for (var k = 0; k < TEST_CONSTANT; k++) {
   			gameBoard[j][k].barrelInfo();

   		}
   	}
}

function resetWinBarrel() {
    gameBoard[winBarrelCol][winBarrelRow].barrelSprite.loadTexture('BARREL_WIN');

    gameBoard[winBarrelCol][winBarrelRow].barrelSprite.x = tmpX;
    gameBoard[winBarrelCol][winBarrelRow].barrelSprite.y = tmpY;
    gameBoard[winBarrelCol][winBarrelRow].barrelSprite.scale.setTo(1, 1);
}
