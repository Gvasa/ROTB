 function Button(_buttonType, _sprite) {
	this.buttonType = _buttonType;
	this.buttonSprite = _sprite;
}


function createMenu() {
	resetBoard();
	header = game.add.sprite(114,-20,'header');
	var button1 = game.add.sprite(252, 265, 'menuButtonSprite');
	var button2 = game.add.sprite(252, 365, 'menuButtonSprite');
	var button3 = game.add.sprite(252, 465, 'menuButtonSprite');
	var button4 = game.add.sprite(252, 565, 'menuLowerButtonSprite');
	var resetButtonSprite = game.add.sprite(30, 850, 'resetButtonSprite');
 	

	button1.inputEnabled = true;
	button2.inputEnabled = true;
	button3.inputEnabled = true;
	button4.inputEnabled = true;
	resetButtonSprite.inputEnabled = true;

	menuButton1 = new Button('level1', button1);
	menuButton2 = new Button('level2', button2);
	menuButton3 = new Button('level3', button3);
	menuButton4 = new Button('level4', button4);
	resetButton = new Button('resetButton', resetButtonSprite);
	resetButton.buttonSprite.alpha = false;

	button1.events.onInputDown.add(menuListener, menuButton1);	
	button2.events.onInputDown.add(menuListener, menuButton2);
	button3.events.onInputDown.add(menuListener, menuButton3);
	button4.events.onInputDown.add(menuListener, menuButton4);
	resetButtonSprite.events.onInputDown.add(menuListener, resetButton);
	resetButton.buttonSprite.inputEnabled = false;
}

function showMenu() {
	resetBoard();

	header.alpha = true;

	menuButton1.buttonSprite.inputEnabled = true;
	menuButton1.buttonSprite.alpha = true;

	menuButton2.buttonSprite.inputEnabled = true;
	menuButton2.buttonSprite.alpha = true;
	
	menuButton3.buttonSprite.inputEnabled = true;
	menuButton3.buttonSprite.alpha = true;
	
	menuButton4.buttonSprite.inputEnabled = true;
	menuButton4.buttonSprite.alpha = true;

	resetButton.buttonSprite.inputEnabled = false;
	resetButton.buttonSprite.alpha = false;
}

function hideMenu() {
	header.alpha = false;

	menuButton1.buttonSprite.inputEnabled = false;
	menuButton1.buttonSprite.alpha = false;

	menuButton2.buttonSprite.inputEnabled = false;
	menuButton2.buttonSprite.alpha = false;
	
	menuButton3.buttonSprite.inputEnabled = false;
	menuButton3.buttonSprite.alpha = false;
	
	menuButton4.buttonSprite.inputEnabled = false;
	menuButton4.buttonSprite.alpha = false;

	resetButton.buttonSprite.inputEnabled = true;
	resetButton.buttonSprite.alpha = true;
}


