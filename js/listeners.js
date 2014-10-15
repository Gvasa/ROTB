
function listener() {	
	var expr = this.barrelType;
	switch(expr) {
		
		case BARREL_REVEAL_ABOVE:
            if(this.posX == 0 || this.charges <= 0 || gameBoard[this.barrelId-1].visible == true || gameBoard[this.barrelId-1].barrelType == BARREL_EMPTY) {
                console.log('If barrel reveal above');
                //this.barrelInfo();
                gameBoard[this.barrelId-1].barrelInfo();
                break;
            }
            if(currentLevel == 'level1')
            	swapTutorials(3);
        
            bClick.play();
            this.charges--;
			showBarrelAbove(this);
            //this.barrelInfo();
            charges--;
            setNumberOfMoves(numOfMovesIndicator = numOfMovesIndicator+1);

            if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
            console.log('charges: ' + charges);
			break;

		case BARREL_REVEAL_BELOW:
			if(this.posX == TEST_CONSTANT-1 || this.charges <= 0 || gameBoard[this.barrelId+1].visible == true || gameBoard[this.barrelId+1].barrelType == BARREL_EMPTY) {
				console.log('If barrel reveal below');
				break;
			}
			bClick.play();
			this.charges--;
			showBarrelBelow(this);
            //this.barrelInfo();
            charges--;
            setNumberOfMoves(numOfMovesIndicator = numOfMovesIndicator+1);

            if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
            console.log('charges: ' + charges);
			break;
		
		case BARREL_REVEAL_RIGHT:
			if(this.posY == TEST_CONSTANT-1 || this.charges <= 0 || gameBoard[this.barrelId+6].visible == true || gameBoard[this.barrelId+6].barrelType == BARREL_EMPTY) {
				console.log('If barrel reveal RIGHT');
				//this.barrelInfo();
				gameBoard[this.barrelId+6].barrelInfo();
				console.log(gameBoard[this.barrelId+6].visible);
				console.log(gameBoard[this.barrelId+6].barrelType);
				break;
			}
			bClick.play();
			this.charges--;
			showBarrelRight(this);
            //this.barrelInfo();
            charges--;
            setNumberOfMoves(numOfMovesIndicator = numOfMovesIndicator+1);

            if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
            console.log('charges: ' + charges);
			break;
		
		case BARREL_REVEAL_LEFT:
			if(this.posY == 0 || this.charges <= 0 ||gameBoard[this.barrelId-6].visible == true || gameBoard[this.barrelId-6].barrelType == BARREL_EMPTY) {
				console.log('If barrel reveal LEFT');
				break;
			}
			bClick.play();
			this.charges--;
			showBarrelLeft(this);
            //this.barrelInfo();
            charges--;
            setNumberOfMoves(numOfMovesIndicator = numOfMovesIndicator+1);

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
            //this.barrelInfo();
            charges--;
            setNumberOfMoves(numOfMovesIndicator = numOfMovesIndicator+1);

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
			//this.barrelInfo();
			charges--;
            setNumberOfMoves(numOfMovesIndicator = numOfMovesIndicator+1);

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
           // //this.barrelInfo();
            charges--;
            setNumberOfMoves(numOfMovesIndicator = numOfMovesIndicator+1);

            if(charges == 0 && complete == false) {
            	showFailMenu();
            	break;
            }
            //console.log('charges: ' + charges);
			break;

		case BARREL_MOVE_ROW_RIGHT:
			if(this.posX == TEST_CONSTANT-1 || this.charges <= 0)
				break;
			if(currentLevel == 'level1')
					swapTutorials(4);

			this.charges--;
			moveRowRight(this);
			//this.barrelInfo();
			charges--;
            setNumberOfMoves(numOfMovesIndicator = numOfMovesIndicator+1);

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
            //this.barrelInfo();
            charges--;
            setNumberOfMoves(numOfMovesIndicator = numOfMovesIndicator+1);

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
			moveBarrelsToStartPosition();
            setCurrentLevelIndicator(levelCounter = 1);
			readJson('level1');
			animationBoardIn();
			hideLevelMenu();
			swapTutorials(1);
			break;

		case 'level2':
			currentLevel = 'level2';
			moveBarrelsToStartPosition();
            setCurrentLevelIndicator(levelCounter = 2);
			readJson('level2');
			animationBoardIn();
			hideLevelMenu();
			break;

		case 'level3':
			currentLevel = 'level3';
			moveBarrelsToStartPosition();
            setCurrentLevelIndicator(levelCounter = 3);
			readJson('level3');
			animationBoardIn();
			hideLevelMenu();
			break;

		case 'level4':
			currentLevel = 'level4';
			moveBarrelsToStartPosition();
            setCurrentLevelIndicator(levelCounter = 4);
			readJson('level4');
			animationBoardIn();
			hideLevelMenu();
			break;

		case 'level5':
			currentLevel = 'level5';
			moveBarrelsToStartPosition();
            setCurrentLevelIndicator(levelCounter = 5);
			readJson('level5');
			animationBoardIn();
			hideLevelMenu();
			break;

		case 'level6':
			currentLevel = 'level6';
			moveBarrelsToStartPosition();
            setCurrentLevelIndicator(levelCounter = 6);
			readJson('level6');
			animationBoardIn();
			hideLevelMenu();
			break;

		case 'level7':
			currentLevel = 'level7';
			moveBarrelsToStartPosition();
            setCurrentLevelIndicator(levelCounter = 7);
			readJson('level7');
			animationBoardIn();
			hideLevelMenu();
			break;

        case 'level8':
            currentLevel = 'level8';
            moveBarrelsToStartPosition();
            setCurrentLevelIndicator(levelCounter = 8);
            readJson('level8');
            animationBoardIn();
            hideLevelMenu();
            break;
			
		case 'nextLevel':
  			resetWinBarrel();
  			tintGame(tintBlack, 0, 1000);
			hidePostGameMenu();
			animationBoardOut();
            setNumberOfMoves(numOfMovesIndicator = 0);
            setCurrentLevelIndicator(levelCounter = levelCounter + 1);
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
            setCurrentLevelIndicator(levelCounter = 1);
			readJson('level1');
			hideMenu();
			//animationBoardIn();
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
			resetBoard2();
			readJson(currentLevel);
			hideMenu();
            setNumberOfMoves(numOfMovesIndicator = 0);
			break;

		case 'menuButton':
			//resetBoard();
            clearTutorials();
            setNumberOfMoves(numOfMovesIndicator = 0);
			showMenu();
			break;
	}
}

function postGameMenuListener() {
	console.log(this);
	var type = this.buttonType;

	switch(type) {
		case 'chooseLevel':
			resetBoard2();
			showLevelMenu();
			hideFailMenu();
			break;

		case 'restartLevel':
			resetBoard2();
			readJson(currentLevel);
			hideFailMenu();
			break;

        case 'lastLevelMainMenu':
            resetWinBarrel();
            resetBoard2();
            hideLastLevelMenu();
            showMenu();
	}
}

function tutorialListener() {
	console.log(this);
	swapTutorials(2);
	this.inputEnabled = false;
}

function readNextLevel() {
	//resetBoard2();
	var foo = currentLevel;


	var levelNum = parseInt(foo.slice(-1))+1;
	if(levelNum <= NUM_OF_LEVELS) {
		var tmp = foo.substring(0, 5) + levelNum;
		currentLevel = foo.substring(0, 5) + levelNum;
		//animationBoardOut();
		//while(game.time.now - timeCheck > 2000) { }
		readJson(currentLevel);
		animationBoardIn();
		console.log(currentLevel);
	}
}