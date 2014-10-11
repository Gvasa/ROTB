function readJson(fileName) {
		
	var parsedJsonData = JSON.parse(game.cache.getText(fileName));
	console.log(parsedJsonData);
    charges = 0;
    complete = false;

	winBarrelRow = parsedJsonData.winRow;
	winBarrelCol = parsedJsonData.winCol;
	winIndex = winBarrelCol*6 + winBarrelRow;
	console.log('WININDEX: ' + winIndex);

	var counter = 0;
	for(var i = 0; i < TEST_CONSTANT; i++) {
		for(var j = 0; j < TEST_CONSTANT; j++) {
			gameBoard[counter].barrelType = parsedJsonData.gameBoard[j][i].type;
			gameBoard[counter].visible = parsedJsonData.gameBoard[j][i].visible;
			gameBoard[counter].charges = parsedJsonData.gameBoard[j][i].charges;

            charges += parsedJsonData.gameBoard[j][i].charges;

			if(gameBoard[counter].barrelType != BARREL_EMPTY) {
				if(!gameBoard[counter].visible)
					gameBoard[counter].barrelSprite.loadTexture(BARREL_FADED);
				else
					gameBoard[counter].barrelSprite.loadTexture(gameBoard[counter].barrelType);
					gameBoard[counter].barrelSprite.inputEnabled = true;
					addBarrelHover(gameBoard[counter].barrelSprite);
			}
			counter++;

		}	
	}
    console.log('charges: ' + charges);
    updateBarrelVisibility2();
}

function addBarrelHover(sprite) {

	sprite.events.onInputOver.add(function(){

          console.log('hej');
          sprite.alpha=false;

        }, this);

    sprite.events.onInputOut.add(function(){

          sprite.alpha=true;
          console.log('hejdå');

        }, this);
}
