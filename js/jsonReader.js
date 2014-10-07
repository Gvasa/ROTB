function readJson(fileName) {
		
	var parsedJsonData = JSON.parse(game.cache.getText(fileName));
	console.log(parsedJsonData);
    charges = 0;
    complete = false;

	winBarrelRow = parsedJsonData.winRow;
	winBarrelCol = parsedJsonData.winCol;

	for(var i = 0; i < TEST_CONSTANT; i++) {
		for(var j = 0; j < TEST_CONSTANT; j++) {
			gameBoard[j][i].barrelType = parsedJsonData.gameBoard[i][j].type;
			gameBoard[j][i].visible = parsedJsonData.gameBoard[i][j].visible;
			gameBoard[j][i].charges = parsedJsonData.gameBoard[i][j].charges;
            //console.log(parseInt(parsedJsonData.gameBoard[i][j].charges));
            charges += parsedJsonData.gameBoard[i][j].charges;

			if(gameBoard[j][i].barrelType != BARREL_EMPTY) {
				if(!gameBoard[j][i].visible)
					gameBoard[j][i].barrelSprite.loadTexture(BARREL_FADED);
				else
					gameBoard[j][i].barrelSprite.loadTexture(gameBoard[j][i].barrelType);
					gameBoard[j][i].barrelSprite.inputEnabled = true;
					console.log(gameBoard[j][i].charges);
			}
		}	
	}
    console.log('charges: ' + charges);

	for(var i = 0; i < TEST_CONSTANT; i++)
		uppdateBarrelVisibility(i, true);
}