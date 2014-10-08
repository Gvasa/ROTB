
function showBarrelRight(tmpBarrel) {
	var row = tmpBarrel.posX;
    var col = tmpBarrel.posY;

   	gameBoard[col+1][row].barrelSprite.loadTexture(gameBoard[col+1][row].barrelType);
    gameBoard[col+1][row].visible = true;
    gameBoard[col+1][row].barrelInfo();
    uppdateBarrelVisibility(col, true);
    uppdateBarrelVisibility(col+1, true);
}

function showBarrelLeft(tmpBarrel) {
	var row = tmpBarrel.posX;
    var col = tmpBarrel.posY;
   	
   	gameBoard[col-1][row].barrelSprite.loadTexture(gameBoard[col-1][row].barrelType);
    gameBoard[col-1][row].visible = true;
    gameBoard[col-1][row].barrelInfo();
    uppdateBarrelVisibility(col, true);
    uppdateBarrelVisibility(col-1, true);
}

function showBarrelAbove(tmpBarrel) {
    console.log('shwo above!');
    var row = tmpBarrel.posX;
    var col = tmpBarrel.posY;

   	gameBoard[col][row-1].barrelSprite.loadTexture(gameBoard[col][row-1].barrelType);
    gameBoard[col][row-1].visible = true;
    gameBoard[col][row-1].barrelInfo();
    uppdateBarrelVisibility(row, false);
    uppdateBarrelVisibility(row-1, false);
}

function showBarrelBellow (tmpBarrel) {
	console.log('show bellow!');
	var row = tmpBarrel.posX;
	var col = tmpBarrel.posY;

   	gameBoard[col][row+1].barrelSprite.loadTexture(gameBoard[col][row+1].barrelType);
	gameBoard[col][row+1].visible = true;
	gameBoard[col][row+1].barrelInfo();
	uppdateBarrelVisibility(row, false);
	uppdateBarrelVisibility(row+1, false);
}

function moveColUp (tmpBarrel) {
	var col = tmpBarrel.posY-1;
	var row = tmpBarrel.posX;
	var text = gameBoard[col][0].barrelSprite.key;
	var barrel = gameBoard[col][0];
	
	if(winBarrelCol == col && gameBoard[winBarrelCol][winBarrelRow+1].barrelType != BARREL_EMPTY) {
		console.log('WINGINGINGIGNG');
		gameBoard[winBarrelCol][winBarrelRow+1].barrelSprite.loadTexture(BARREL_EMPTY);
		levelComplete();
		return;
	}

	for(var i = 0; i <TEST_CONSTANT-1 ; i++) {
		if(i == TEST_CONSTANT-1) 
			gameBoard[col][i].barrelSprite.loadTexture(text);
		else if(gameBoard[col][i+1].barrelType == BARREL_WIN) {
			gameBoard[col][i].barrelSprite.loadTexture(gameBoard[col][i+2].barrelSprite.key);
			i++;
		} else 
			gameBoard[col][i].barrelSprite.loadTexture(gameBoard[col][i+1].barrelSprite.key);
	}

	var fooType = gameBoard[col][0].barrelType;
    var fooId = gameBoard[col][0].barrelId;
    var fooSprite = gameBoard[col][0].barrelSprite; 
    var fooCharges = gameBoard[col][0].charges;
    var fooVisible = gameBoard[col][0].visible;

    for(var i = 0; i < TEST_CONSTANT; i++) {
		if(i == TEST_CONSTANT-1) {
			gameBoard[col][5].barrelType = fooType;
			gameBoard[col][5].barrelId = fooId;
			gameBoard[col][5].charges = fooCharges;
            gameBoard[col][5].visible = fooVisible;
		} else if(gameBoard[col][i+1].barrelType == BARREL_WIN) {	
        	gameBoard[col][i].barrelType = gameBoard[col][i+2].barrelType;
			gameBoard[col][i].barrelId = gameBoard[col][i+2].barrelId;
			gameBoard[col][i].charges = gameBoard[col][i+2].charges;
            gameBoard[col][i].visible = gameBoard[col][i+2].visible;
            i++;
        }else {
			gameBoard[col][i].barrelType = gameBoard[col][i+1].barrelType;
			gameBoard[col][i].barrelId = gameBoard[col][i+1].barrelId;
			gameBoard[col][i].charges = gameBoard[col][i+1].charges;
            gameBoard[col][i].visible = gameBoard[col][i+1].visible;
		}
	}
	uppdateBarrelVisibility(col+1, true/*this is col*/);
    uppdateBarrelVisibility(col, true/*this is col*/);
}

function moveColDown (tmpBarrel) {
	var col = tmpBarrel.posY-1;
	var row = tmpBarrel.posX;
	var text = gameBoard[col][5].barrelSprite.key;
	var barrel = gameBoard[col][5];
	
	if(winBarrelCol == col && gameBoard[winBarrelCol][winBarrelRow-1].barrelType != BARREL_EMPTY) {
		console.log('WINGINGINGIGNG');
		gameBoard[winBarrelCol][winBarrelRow-1].barrelSprite.loadTexture(BARREL_EMPTY);
		levelComplete();
		return;
	}
	for(var i = 5; i >= 0; i--) {
		if(i == 0) 
			gameBoard[col][i].barrelSprite.loadTexture(text);
		else if(gameBoard[col][i-1].barrelType == BARREL_WIN) {
			gameBoard[col][i].barrelSprite.loadTexture(gameBoard[col][i-2].barrelSprite.key);
			i--;
		} else 
			gameBoard[col][i].barrelSprite.loadTexture(gameBoard[col][i-1].barrelSprite.key);
	}

	var fooType = gameBoard[col][5].barrelType;
    var fooId = gameBoard[col][5].barrelId;
    var fooSprite = gameBoard[col][5].barrelSprite; 
    var fooCharges = gameBoard[col][5].charges;
    var fooVisible = gameBoard[col][5].visible;

    for(var i = 5; i >= 0; i--) {
		if(i == 0) {
			gameBoard[col][0].barrelType = fooType;
			gameBoard[col][0].barrelId = fooId;
			gameBoard[col][0].charges = fooCharges;
            gameBoard[col][0].visible = fooVisible;
		} else if(gameBoard[col][i-1].barrelType == BARREL_WIN) {	
        	gameBoard[col][i].barrelType = gameBoard[col][i-2].barrelType;
			gameBoard[col][i].barrelId = gameBoard[col][i-2].barrelId;
			gameBoard[col][i].charges = gameBoard[col][i-2].charges;
            gameBoard[col][i].visible = gameBoard[col][i-2].visible;
            i--;
        }else {
			gameBoard[col][i].barrelType = gameBoard[col][i-1].barrelType;
			gameBoard[col][i].barrelId = gameBoard[col][i-1].barrelId;
			gameBoard[col][i].charges = gameBoard[col][i-1].charges;
            gameBoard[col][i].visible = gameBoard[col][i-1].visible;
		}
	}
	uppdateBarrelVisibility(col+1, true/*this is col*/);
    uppdateBarrelVisibility(col, true/*this is col*/);
}

function moveRowRight (tmpBarrel) {


	var col = tmpBarrel.posY;
	var row = tmpBarrel.posX+1;
	var text = gameBoard[5][row].barrelSprite.key;
	var barrelSprite = gameBoard[5][row];
	
	//animateRowRight(row);

	console.log('right');
	if(winBarrelRow == row && gameBoard[winBarrelCol-1][winBarrelRow].barrelType != BARREL_EMPTY) {
		console.log('WINGINGINGIGNG');
		gameBoard[winBarrelCol-1][winBarrelRow].barrelSprite.loadTexture(BARREL_EMPTY);
		levelComplete();
		return;
	}
	
	for(var i = 5; i >= 0; i--) {
		if(i == 0) 
			gameBoard[i][row].barrelSprite.loadTexture(text);
		else if(gameBoard[i-1][row].barrelType == BARREL_WIN) {
			gameBoard[i][row].barrelSprite.loadTexture(gameBoard[i-2][row].barrelSprite.key);
			i--;
		} else 
			gameBoard[i][row].barrelSprite.loadTexture(gameBoard[i-1][row].barrelSprite.key);
	}

	var fooType = gameBoard[5][row].barrelType;
    var fooId = gameBoard[5][row].barrelId;
    var fooSprite = gameBoard[5][row].barrelSprite;
    var fooCharges = gameBoard[5][row].charges;
    var fooVisible = gameBoard[5][row].visible;

    for(var i = 5; i >= 0; i--) {
    	
    	if(i == 0) {
    		gameBoard[0][row].barrelType = fooType;
			gameBoard[0][row].barrelId = fooId;
			gameBoard[0][row].charges = fooCharges;
            gameBoard[0][row].visible = fooVisible;
        } else if(gameBoard[i-1][row].barrelType == BARREL_WIN) {	
        	gameBoard[i][row].barrelType = gameBoard[i-2][row].barrelType;
			gameBoard[i][row].barrelId = gameBoard[i-2][row].barrelId;
			gameBoard[i][row].charges = gameBoard[i-2][row].charges;
            gameBoard[i][row].visible = gameBoard[i-2][row].visible;
            i--;
        } else {
        	gameBoard[i][row].barrelType = gameBoard[i-1][row].barrelType;
			gameBoard[i][row].barrelId = gameBoard[i-1][row].barrelId;
			gameBoard[i][row].charges = gameBoard[i-1][row].charges;
            gameBoard[i][row].visible = gameBoard[i-1][row].visible;
        }
    
    }
    uppdateBarrelVisibility(row-1, false/*this is col*/);
    uppdateBarrelVisibility(row, false);

}
function moveRowLeft (tmpBarrel) {
	var col = tmpBarrel.posY;
	var row = tmpBarrel.posX+1;
	var text = gameBoard[0][row].barrelSprite.key;
	var barrel = gameBoard[0][row];
	
	console.log('left');
	if(winBarrelRow == row && gameBoard[winBarrelCol+1][winBarrelRow].barrelType != BARREL_EMPTY) {
		console.log('WINGINGINGIGNG');
		gameBoard[winBarrelCol+1][winBarrelRow].barrelSprite.loadTexture(BARREL_EMPTY);
		levelComplete();
		return;
	}

	for(var i = 0; i < TEST_CONSTANT; i++) {
		if(i == 5) {
			console.log('if-for');
			gameBoard[i][row].barrelSprite.loadTexture(text);
		}
		else if(gameBoard[i+1][row].barrelType == BARREL_WIN) {
			gameBoard[i][row].barrelSprite.loadTexture(gameBoard[i+2][row].barrelSprite.key);
			i++;
		} else 
			gameBoard[i][row].barrelSprite.loadTexture(gameBoard[i+1][row].barrelSprite.key);
	}

    var fooType = gameBoard[0][row].barrelType;
    var fooId = gameBoard[0][row].barrelId;
    var fooSprite = gameBoard[0][row].barrelSprite;
    var fooCharges = gameBoard[0][row].charges;
    var fooVisible = gameBoard[0][row].visible;

	for(var i = 0; i < TEST_CONSTANT; i++) {
		if(i == TEST_CONSTANT-1) {
			gameBoard[5][row].barrelType = fooType;
			gameBoard[5][row].barrelId = fooId;
			gameBoard[5][row].charges = fooCharges;
            gameBoard[5][row].visible = fooVisible;
		} else if(gameBoard[i+1][row].barrelType == BARREL_WIN) {	
        	gameBoard[i][row].barrelType = gameBoard[i+2][row].barrelType;
			gameBoard[i][row].barrelId = gameBoard[i+2][row].barrelId;
			gameBoard[i][row].charges = gameBoard[i+2][row].charges;
            gameBoard[i][row].visible = gameBoard[i+2][row].visible;
            i++;
        } else {
			gameBoard[i][row].barrelType = gameBoard[i+1][row].barrelType;
			gameBoard[i][row].barrelId = gameBoard[i+1][row].barrelId;
			gameBoard[i][row].charges = gameBoard[i+1][row].charges;
            gameBoard[i][row].visible = gameBoard[i+1][row].visible;
		}
	}
	uppdateBarrelVisibility(row-1, false/*this is col*/);
    uppdateBarrelVisibility(row, false/*this is row*/);
}

function addCharge (tmpBarrel) {
	console.log('add charge!');
	col = tmpBarrel.posY;
	row = tmpBarrel.posX;

	if(row > 0) {
		gameBoard[col][row-1].charges++;
		console.log('barrel over: ' + col + ',' + (row-1));
        charges++;
	}
	if(row < 5) {
		gameBoard[col][row+1].charges++;
		console.log('barrel under: ' + col + ',' + (row+1));
        charges++;
	}
	if(col > 0) {
		gameBoard[col-1][row].charges++;
		console.log('barrel venster: ' + (col-1) + ',' + row);
        charges++;
	}
	if(col < 5) {
		gameBoard[col+1][row].charges++;
		console.log('barrel hoeger: ' + (col+1) + ',' + row);
        charges++;
	}

	uppdateBarrelVisibility(col,true);
	uppdateBarrelVisibility(row, false);

}