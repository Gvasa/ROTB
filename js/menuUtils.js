 function Button(_buttonType, _sprite) {
	this.buttonType = _buttonType;
	this.buttonSprite = _sprite;
}


function showMenu() {
	resetBoard();
	
	var button1 = game.add.sprite(40, 40, 'buttonl1');
	var button2 = game.add.sprite(40, 108, 'buttonl2');
	var button3 = game.add.sprite(40, 176, 'buttonl3');
	var button4 = game.add.sprite(40, 244, 'buttonl4');

	button1.inputEnabled = true;
	button2.inputEnabled = true;
	button3.inputEnabled = true;
	button4.inputEnabled = true;

	menuButton1 = new Button('level1', button1);
	menuButton2 = new Button('level2', button2);
	menuButton3 = new Button('level3', button3);
	menuButton4 = new Button('level4', button4);

	button1.events.onInputDown.add(menuListener, menuButton1);	
	button2.events.onInputDown.add(menuListener, menuButton2);
	button3.events.onInputDown.add(menuListener, menuButton3);
	button4.events.onInputDown.add(menuListener, menuButton4);
}

function hideMenu() {
	menuButton1.buttonSprite.inputEnabled = false;
	menuButton1.buttonSprite.alpha = false;

	menuButton2.buttonSprite.inputEnabled = false;
	menuButton2.buttonSprite.alpha = false;
	
	menuButton3.buttonSprite.inputEnabled = false;
	menuButton3.buttonSprite.alpha = false;
	
	menuButton4.buttonSprite.inputEnabled = false;
	menuButton4.buttonSprite.alpha = false;

}


