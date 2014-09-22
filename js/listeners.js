
function listener() {	
	var expr = this.barrelType;
	switch(expr) {
		
		case BARREL_REVEAL_ABOVE:
            if(this.posX == 0 || this.charges <= 0 || gameBoard[this.posY][this.posX-1].visible == true) {
                console.log('If barrel reveal above');
                this.barrelInfo();
                break;
            }
            bClick.play();
			showBarrelAbove(this);
            //this.charges--;
            this.barrelInfo();
			break;

		case BARREL_REVEAL_BELOW:
			if(this.posX == TEST_CONSTANT-1 || this.charges <= 0 ||gameBoard[this.posY][this.posX+1].visible == true) {
				console.log('If barrel reveal below');
				break;
			}
			bClick.play();
			showBarrelBellow(this);
			//this.charges--;
            this.barrelInfo();
			break;
		
		case BARREL_REVEAL_RIGHT:
			if(this.posY == TEST_CONSTANT-1 || this.charges <= 0 ||gameBoard[this.posY+1][this.posX].visible == true) {
				console.log('If barrel reveal RIGHT');
				break;
			}
			bClick.play();
			showBarrelRight(this);
			//this.charges--;
            this.barrelInfo();
			break;
		
		case BARREL_REVEAL_LEFT:
			if(this.posY == 0 || this.charges <= 0 ||gameBoard[this.posY-1][this.posX].visible == true) {
				console.log('If barrel reveal LEFT');
				break;
			}
			bClick.play();
			showBarrelLeft(this);
			//this.charges--;
            this.barrelInfo();
			break;

		case BARREL_MOVE_COL_UP:
			if(this.posY == 0 || this.charges <= 0)
				break;
			moveColUp(this);
			//this.charges--;
            this.barrelInfo();
			break;

		case BARREL_MOVE_COL_DOWN:
			if(this.posY == 0 || this.charges <= 0)
				break;
			moveColDown(this);
			//this.charges--;
			this.barrelInfo();
			break;

		case BARREL_MOVE_ROW_LEFT:
			if(this.posX == TEST_CONSTANT-1 || this.charges <= 0)
				break;
			moveRowLeft(this);
			//this.charges--;
            this.barrelInfo();
			break;

		case BARREL_MOVE_ROW_RIGHT:
			if(this.posX == TEST_CONSTANT-1 || this.charges <= 0)
				break;
			moveRowRight(this);
			//this.charges--;
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