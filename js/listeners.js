
function listener() {	
	var expr = this.barrelType;
	switch(expr) {
		
		case BARREL_REVEAL_ABOVE:
            if(this.posX == 0 || this.charges <= 0 || gameBoard[this.posY][this.posX-1].visible == true || gameBoard[this.posY][this.posX-1].barrelType == BARREL_EMPTY) {
                console.log('If barrel reveal above');
                this.barrelInfo();
                break;
            }
            if(currentLevel == 'level1')
            	swapTutorials(3);
        
            bClick.play();
            this.charges--;
			showBarrelAbove(this);
            this.barrelInfo();
            charges--;

            if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
            console.log('charges: ' + charges);
			break;

		case BARREL_REVEAL_BELOW:
			if(this.posX == TEST_CONSTANT-1 || this.charges <= 0 ||gameBoard[this.posY][this.posX+1].visible == true || gameBoard[this.posY][this.posX+1].barrelType == BARREL_EMPTY) {
				console.log('If barrel reveal below');
				break;
			}
			bClick.play();
			this.charges--;
			showBarrelBellow(this);
            this.barrelInfo();
            charges--;

            if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
            console.log('charges: ' + charges);
			break;
		
		case BARREL_REVEAL_RIGHT:
			if(this.posY == TEST_CONSTANT-1 || this.charges <= 0 ||gameBoard[this.posY+1][this.posX].visible == true || gameBoard[this.posY+1][this.posX].barrelType == BARREL_EMPTY) {
				console.log('If barrel reveal RIGHT');
				break;
			}
			bClick.play();
			this.charges--;
			showBarrelRight(this);
            this.barrelInfo();
            charges--;

            if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
            console.log('charges: ' + charges);
			break;
		
		case BARREL_REVEAL_LEFT:
			if(this.posY == 0 || this.charges <= 0 ||gameBoard[this.posY-1][this.posX].visible == true || gameBoard[this.posY-1][this.posX].barrelType == BARREL_EMPTY) {
				console.log('If barrel reveal LEFT');
				break;
			}
			bClick.play();
			this.charges--;
			showBarrelLeft(this);
            this.barrelInfo();
            charges--;

            if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
            console.log('charges: ' + charges);
			break;

		case BARREL_MOVE_COL_UP:
			if(this.posY == 0 || this.charges <= 0)
				break;
			this.charges--;
			moveColUp(this);
            this.barrelInfo();
            charges--;

            if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
            console.log('charges: ' + charges);
			break;

		case BARREL_MOVE_COL_DOWN:
			if(this.posY == 0 || this.charges <= 0)
				break;
			this.charges--;
			moveColDown(this);
			this.barrelInfo();
			charges--;

			if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
			console.log('charges: ' + charges);
			break;

		case BARREL_MOVE_ROW_LEFT:
			if(this.posX == TEST_CONSTANT-1 || this.charges <= 0)
				break;

			this.charges--;
			moveRowLeft(this);
            this.barrelInfo();
            charges--;

            if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
            console.log('charges: ' + charges);
			break;

		case BARREL_MOVE_ROW_RIGHT:
			if(this.posX == TEST_CONSTANT-1 || this.charges <= 0)
				break;
			if(currentLevel == 'level1')
					swapTutorials(4);

			this.charges--;
			moveRowRight(this);
			this.barrelInfo();
			charges--;

			if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
			console.log('charges: ' + charges);
			break;

		case BARREL_CHARGE:
			if(this.charges <= 0) {
				console.log('asdasd');
				break;
			}
			this.charges--;
			addCharge(this);
            this.barrelInfo();
            charges--;

            if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
            console.log('charges: ' + charges);
			break;
	}
}

function levelListener() {
	var type = this.buttonType;
	switch(type) {

		case 'level1':
			currentLevel = 'level1';
			readJson('level1');
			//hideMenu();
			animationBoardIn();
			hideLevelMenu();
			swapTutorials(1);
			break;

		case 'level2':
			currentLevel = 'level2';
			readJson('level2');
			animationBoardIn();
			//hideMenu();
			hideLevelMenu();
			break;

		case 'level3':
			currentLevel = 'level3';
			readJson('level3');
			//hideMenu();
			animationBoardIn();
			hideLevelMenu();
			break;

		case 'level4':
			currentLevel = 'level4';
			readJson('level4');
			animationBoardIn();
			//hideMenu();
			hideLevelMenu();
			break;

		case 'level5':
			currentLevel = 'level5';
			readJson('level5');
			animationBoardIn();
			//hideMenu();
			hideLevelMenu();
			break;

		case 'level6':
			currentLevel = 'level6';
			readJson('level6');
			animationBoardIn();
			hideLevelMenu();
			break;

		case 'nextLevel':
			resetWinBarrel();
  			tintGame(tintBlack, 0, 1000);
			hidePostGameMenu();
			animationBoardOut();
			game.time.events.add(Phaser.Timer.QUARTER*1.9, moveBarrelsToStartPosition, this);
			game.time.events.add(Phaser.Timer.QUARTER*1.9, readNextLevel, this);
			break;
	}		
}

function menuListener() {
	console.log(this);	

	var type = this.buttonType;
	switch(type) {

		case 'play':
			currentLevel = 'level1';
			readJson('level1');
			hideMenu();
			animationBoardIn();
			swapTutorials(1);
			break;

		case 'levels':
			hideMenu();
			createLevelMenu();
			showLevelMenu();
			break;
	}

}

function guiListener() {
	console.log(this);
	var type = this.buttonType;

	switch(type) {

		case 'resetButton':
			resetBoard();
			readJson(currentLevel);
			hideMenu();
			break;

		case 'menuButton':
			//resetBoard();
			showMenu();
			break;
	}
}

function postGameMenuListener() {
	console.log(this);
	var type = this.buttonType;

	switch(type) {
		case 'chooseLevel':
			resetBoard();
			showLevelMenu();
			hideFailMenu();
			break;

		case 'restartLevel':
			resetBoard();
			readJson(currentLevel);
			hideFailMenu();
			break;
	}
}

function tutorialListener() {
	console.log(this);
	swapTutorials(2);
	this.inputEnabled = false;
}

function readNextLevel() {
	resetBoard();
	var foo = currentLevel;


	var levelNum = parseInt(foo.slice(-1))+1;
	if(levelNum < 7) {
		var tmp = foo.substring(0, 5) + levelNum;
		currentLevel = foo.substring(0, 5) + levelNum;
		//animationBoardOut();
		//while(game.time.now - timeCheck > 2000) { }
		readJson(currentLevel);
		animationBoardIn();
		console.log(currentLevel);
	}
}