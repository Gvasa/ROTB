function levelComplete() {

	//var text = "- Gratz! -\n Level Complete";
    //var style = { font: "65px Arial", fill: "#ffd700", align: "center" };
    //var t = game.add.text(game.world.centerX-280, 0, text, style);
  	//emptyBoard();
  	clearTutorials();
    showMenu();

}

function readLevelsFromFile(fileName) {
	var tmpFileText = game.cache.getText(fileName);

	fileText = tmpFileText.split('\n');
	var colCounter=0;
	var sign;
	var canSee;
	var fooBarrelSprite;
	var fooBarrelType;
	var fooVisible;
	for(var i = 0; i < TEST_CONSTANT; i++) {

		for(var j = 0; j < TEST_CONSTANT*2; j++)
		{
			if(j%2 == 0) {
				colCounter++;
			}
			
			sign = fileText[i][j];
			canSee = 's' == fileText[i][j+1] ? true : false;
			//console.log(invis);
			switch(sign) {

				case '0':
					fooBarrelType = BARREL_EMPTY;
					fooBarrelSprite = 'spriteInvisBarrel';
					fooVisible = canSee;
					break;

				case '>':
					fooBarrelType = BARREL_MOVE_ROW_RIGHT;
					fooBarrelSprite = 'spriteMoveRowRight';
					fooVisible = canSee;
					break;
				
				case '^':
					fooBarrelType = BARREL_MOVE_COL_UP;
					fooBarrelSprite = 'spriteMoveColUp';
					fooVisible = canSee;
					break;
				
				case 'v':
					fooBarrelType = BARREL_MOVE_COL_DOWN;
					fooBarrelSprite = 'spriteMoveColDown';
					fooVisible = canSee;
					break;

				case '<':
					fooBarrelType = BARREL_MOVE_ROW_LEFT;
					fooBarrelSprite = 'spriteMoveRowLeft';
					fooVisible = canSee;
					break;

				case 'a':
					fooBarrelType = BARREL_REVEAL_ABOVE;
					fooBarrelSprite = 'spriteRevealAbove';
					fooVisible = canSee;
					break;

				case 'b':
					fooBarrelType = BARREL_REVEAL_BELOW;
					fooBarrelSprite = 'spriteRevealBelow';
					fooVisible = canSee;
					break;

				case 'r':
					fooBarrelType = BARREL_REVEAL_RIGHT;
					fooBarrelSprite = 'spriteRevealRight';
					fooVisible = canSee;
					break;

				case 'l':
					fooBarrelType = BARREL_REVEAL_LEFT;
					fooBarrelSprite = 'spriteRevealLeft';
					fooVisible = canSee;
					break;
				
				case 'z':
					fooBarrelType = BARREL_CHARGE;
					fooBarrelSprite = 'spriteCharge';
					fooVisible = canSee;
					break;

				case 'w':
					fooBarrelType = BARREL_WIN;
					fooBarrelSprite = 'spriteWinBarrel';
					winBarrelCol = colCounter-1;
					winBarrelRow = i;
					fooVisible = canSee;
					break;
			}
		//	console.log(winBarrelCol + ' , ' + winBarrelRow);
			console.log(canSee);
			gameBoard[colCounter-1][i].visible = canSee;
			gameBoard[colCounter-1][i].barrelSprite.inputEnabled = canSee;
			//gameBoard[colCounter-1][i].barrelSprite.alpha = canSee;
			//gameBoard[colCounter-1][i].barrelSprite.loadTexture(fooBarrelSprite);
			gameBoard[colCounter-1][i].barrelType = fooBarrelType;
			gameBoard[colCounter-1][i].charges = 2;

				if(fooBarrelType != BARREL_EMPTY && canSee == false)
				gameBoard[colCounter-1][i].barrelSprite.loadTexture('spriteFadedBarrel');
			else 
				gameBoard[colCounter-1][i].barrelSprite.loadTexture(fooBarrelSprite);

			if(fooBarrelType != BARREL_EMPTY && canSee == true && fooBarrelType != BARREL_WIN) {
				gameBoard[colCounter-1][i].chargeSprite1.alpha = true;
				gameBoard[colCounter-1][i].chargeSprite2.alpha = true;
			}

			j++;
		}	
		colCounter = 0;	
		
		uppdateBarrelVisibility(i, true);
		
	}
}

function emptyBoard() {
	var xShift = 100;
	var yShift = 100;
	for (var i = 0; i < TEST_CONSTANT; i++) {
			for(var j = 0; j < TEST_CONSTANT; j++) {
				var barrel;
				var chargeSprite1;
				var chargeSprite2;
				
				
				barrel = game.add.sprite(i*BARREL_WIDTH+xShift, j*BARREL_HEIGHT+yShift, 'spriteInvisBarrel');
				chargeSprite1 = game.add.sprite(5,0, 'spriteStar');
				chargeSprite2 = game.add.sprite(30, 0, 'spriteStar');

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
				gameBoard[i][j].barrelSprite.loadTexture('spriteInvisBarrel');
				gameBoard[i][j].barrelType = BARREL_EMPTY;
				gameBoard[i][j].visible = false;
				gameBoard[i][j].charges = 3;
		}
		uppdateBarrelVisibility(i, true);
	}
}

function spawnBoard() {
	
	console.log('spawnboard()');
	var yShift = 163;
	var xShift = 73;
	var barrelSpacing = 1.05;
	for (var i = 0; i < TEST_CONSTANT; i++) {
		for(var j = 0; j < TEST_CONSTANT; j++) {
			var barrel;
			var rand = Math.round(Math.random()*9);
			if(rand === 0) {
				barrel = game.add.sprite(i*BARREL_WIDTH*barrelSpacing+xShift, j*BARREL_HEIGHT*barrelSpacing+yShift, 'spriteMoveRowLeft');
				gameBoard[i][j] = new Barrel(BARREL_MOVE_ROW_LEFT, j, i, counter, barrel, 2, false);
                barrel.alpha = true;
			} else if (rand === 1) {
				barrel = game.add.sprite(i*BARREL_WIDTH*barrelSpacing+xShift, j*BARREL_HEIGHT*barrelSpacing+yShift, 'spriteRevealAbove');
				gameBoard[i][j] = new Barrel(BARREL_REVEAL_ABOVE, j, i, counter, barrel, 2, true);
			} else if (rand == 2) {
				barrel = game.add.sprite(i*BARREL_WIDTH*barrelSpacing+xShift, j*BARREL_HEIGHT*barrelSpacing+yShift, 'spriteCharge');
				gameBoard[i][j] = new Barrel(BARREL_CHARGE, j, i, counter, barrel, 2, false);
                barrel.alpha = true;
			} else if (rand == 3) {
				barrel = game.add.sprite(i*BARREL_WIDTH*barrelSpacing+xShift, j*BARREL_HEIGHT*barrelSpacing+yShift, 'spriteMoveRowRight');
				gameBoard[i][j] = new Barrel(BARREL_MOVE_ROW_RIGHT, j, i, counter, barrel, 2, false);
                barrel.alpha = true;
             } else if (rand == 4) {
				barrel = game.add.sprite(i*BARREL_WIDTH*barrelSpacing+xShift, j*BARREL_HEIGHT*barrelSpacing+yShift, 'spriteRevealLeft');
				gameBoard[i][j] = new Barrel(BARREL_REVEAL_LEFT, j, i, counter, barrel, 2, true);
                barrel.alpha = true;
			}  else {
				barrel = game.add.sprite(i*BARREL_WIDTH*barrelSpacing+xShift, j*BARREL_HEIGHT*barrelSpacing+yShift, 'spriteMoveColDown');
				gameBoard[i][j] = new Barrel(BARREL_MOVE_COL_DOWN, j, i, counter, barrel, 2, false);
                barrel.alpha = true;
			}
		
			barrel.inputEnabled = true;

            gameBoard[i][j].barrelSprite.events.onInputDown.add(listener,gameBoard[i][j]);
            if(!gameBoard[i][j].visible)
                gameBoard[i][j].barrelSprite.inputEnabled = false;

            counter++;
		}
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