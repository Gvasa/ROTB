
function listener() {	
	var expr = this.barrelType;
	switch(expr) {
		
		case BARREL_REVEAL_ABOVE:
            if(this.posX == 0 || this.charges <= 0 || gameBoard[this.posY][this.posX-1].visible == true) {
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
			if(this.posX == TEST_CONSTANT-1 || this.charges <= 0 ||gameBoard[this.posY][this.posX+1].visible == true) {
				console.log('If barrel reveal below');
				break;
			}
			bClick.play();
			this.charges--;
			showBarrelBellow(this);
            this.barrelInfo();
			break;
		
		case BARREL_REVEAL_RIGHT:
			if(this.posY == TEST_CONSTANT-1 || this.charges <= 0 ||gameBoard[this.posY+1][this.posX].visible == true) {
				console.log('If barrel reveal RIGHT');
				break;
			}
			bClick.play();
			this.charges--;
			showBarrelRight(this);
            this.barrelInfo();
			break;
		
		case BARREL_REVEAL_LEFT:
			if(this.posY == 0 || this.charges <= 0 ||gameBoard[this.posY-1][this.posX].visible == true) {
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



function menuListener() {
	console.log(this);	

	var type = this.buttonType;
	switch(type) {

		case 'level1':
			currentLevel = 'level1';
			readLevelsFromFile('level1');
			hideMenu();
			showTutorials();
			break;

		case 'level2':
			currentLevel = 'level2';
			readLevelsFromFile('level2');
			hideMenu();
			break;

		case 'level3':
			currentLevel = 'level3';
			readLevelsFromFile('level3');
			hideMenu();
			break;

		case 'level4':
			currentLevel = 'level4';
			readLevelsFromFile('level4');
			hideMenu();
			break;

		case 'resetButton':
			readLevelsFromFile(currentLevel);
			hideMenu();
			break;
	}

}