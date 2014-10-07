function animationBoardIn() {
	var speed = 320;
	console.log('animationboardin');
	for(var i = 0; i < 6; i ++) {
		for(var j = 0; j < 6; j++) {
				moveFromXAnimation(gameBoard[j][i].barrelSprite, j*BARREL_WIDTH*1.05+73, speed);
				speed = speed+54;
		}
		speed=320;
	}
}

function animationBoardOut() {
	var speed = 320;
	console.log('animationBoardOut');
	for(var i = 0; i < 6; i ++) {
		for(var j = 0; j < 6; j++) {
				moveFromXAnimation(gameBoard[j][i].barrelSprite, -1000, speed);
				speed = speed+54;
		}
		speed=320;
	}

}

function animateRowRight() {
	var speed = 100;
	console.log('animate row');
	for(var i=0; i < 6; i++){
		moveToXAnimation(gameBoard[j][i].barrelSprite, i*BARREL_WIDTH*1.05+73+10, speed);
	}
}

function moveBarrelsToStartPosition() {
	console.log('heheh');
	for(var i = 0; i < 6; i ++) {
		for(var j = 0; j < 6; j++) {
				//console.log(gameBoard[j][i].barrelType);
				gameBoard[j][i].barrelSprite.x = 1000;
		}
	}
}