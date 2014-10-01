
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
			break;

		case BARREL_MOVE_COL_UP:
			if(this.posY == 0 || this.charges <= 0)
				break;
			this.charges--;
			moveColUp(this);
            this.barrelInfo();
			break;

		case BARREL_MOVE_COL_DOWN:
			if(this.posY == 0 || this.charges <= 0)
				break;
			this.charges--;
			moveColDown(this);
			this.barrelInfo();
			break;

		case BARREL_MOVE_ROW_LEFT:
			if(this.posX == TEST_CONSTANT-1 || this.charges <= 0)
				break;

			this.charges--;
			moveRowLeft(this);
            this.barrelInfo();
			break;

		case BARREL_MOVE_ROW_RIGHT:
			if(this.posX == TEST_CONSTANT-1 || this.charges <= 0)
				break;
			if(currentLevel == 'level1')
					swapTutorials(4);

			this.charges--;
			moveRowRight(this);
			this.barrelInfo();
			break;

		case BARREL_CHARGE:
			addCharge(this);
            this.barrelInfo();
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
			hideLevelMenu();
			swapTutorials(1);
			break;

		case 'level2':
			currentLevel = 'level2';
			readJson('level2');
			//hideMenu();
			hideLevelMenu();
			break;

		case 'level3':
			currentLevel = 'level3';
			readJson('level3');
			//hideMenu();
			hideLevelMenu();
			break;

		case 'level4':
			currentLevel = 'level4';
			readJson('level4');
			//hideMenu();
			hideLevelMenu();
			break;

		case 'level5':
			currentLevel = 'level5';
			readJson('level5');
			//hideMenu();
			hideLevelMenu();
			break;
		case 'nextLevel':
			resetBoard();
  			emptyBoard();
  			tutorialFaded.alpha = false;
			hidePostGameMenu();
			var foo = currentLevel;

			var levelNum = parseInt(foo.slice(-1))+1;
			if(levelNum < 6) {
				var tmp = foo.substring(0, 5) + levelNum;
				currentLevel = foo.substring(0, 5) + levelNum;
				readJson(currentLevel);
				console.log(currentLevel);
			}
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
			swapTutorials(1);
			break;

		case 'levels':
			hideMenu();
			createLevelMenu();
			showLevelMenu();
			break;

		case 'resetButton':
			resetBoard();
			readJson(currentLevel);
			hideMenu();
			break;
	}

}

function tutorialListener() {
	console.log(this);
	swapTutorials(2);
	this.inputEnabled = false;
}
