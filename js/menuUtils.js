 function Button(_buttonType, _sprite) {
	this.buttonType = _buttonType;
	this.buttonSprite = _sprite;
}


function createMenu() {
	resetBoard();
	header = game.add.sprite(114,-20,'header');
	var button1 = game.add.sprite(255, 266, 'menuButtonSprite');
	var button2 = game.add.sprite(255, 366, 'menuLowerButtonSprite');
	/*var button3 = game.add.sprite(255, 466, 'menuButtonSprite');
	var button4 = game.add.sprite(255, 566, 'menuLowerButtonSprite');
	*/
	var resetButtonSprite = game.add.sprite(30, 850, 'resetButtonSprite');
 
	button1.inputEnabled = true;
	button2.inputEnabled = true;
	/*button3.inputEnabled = true;
	button4.inputEnabled = true;
	*/
	resetButtonSprite.inputEnabled = true;

	menuButton1 = new Button('play', button1);
	menuButton2 = new Button('levels', button2);
	/*menuButton3 = new Button('level3', button3);
	menuButton4 = new Button('level4', button4);
	*/
	resetButton = new Button('resetButton', resetButtonSprite);
	resetButton.buttonSprite.alpha = false;

	button1.events.onInputDown.add(menuListener, menuButton1);	
	button2.events.onInputDown.add(menuListener, menuButton2);
	/*button3.events.onInputDown.add(menuListener, menuButton3);
	button4.events.onInputDown.add(menuListener, menuButton4);
	*/
	resetButtonSprite.events.onInputDown.add(menuListener, resetButton);
	resetButton.buttonSprite.inputEnabled = false;
}

function createLevelMenu() {
	header = game.add.sprite(114, -20, 'header');
	var button1 = game.add.sprite(76, 366, 'spriteBaseBarrel');
	var button2 = game.add.sprite(76*2, 366, 'spriteBaseBarrel');
	var button3 = game.add.sprite(76*3, 366, 'spriteBaseBarrel');
	var button4 = game.add.sprite(76*4, 366, 'spriteBaseBarrel');
	var button5 = game.add.sprite(76*5, 366, 'spriteBaseBarrel');

	levelButton1 = new Button('level1', button1);
	levelButton2 = new Button('level2', button2);
	levelButton3 = new Button('level3', button3);
	levelButton4 = new Button('level4', button4);
	levelButton5 = new Button('level5', button5);

	button1.inputEnabled = true;
	button2.inputEnabled = true;
	button3.inputEnabled = true;
	button4.inputEnabled = true;
	button5.inputEnabled = true;

	button1.events.onInputDown.add(levelListener, levelButton1);
	button2.events.onInputDown.add(levelListener, levelButton2);
	button3.events.onInputDown.add(levelListener, levelButton3);
	button4.events.onInputDown.add(levelListener, levelButton4);
	button5.events.onInputDown.add(levelListener, levelButton5);
}

function showMenu() {
	resetBoard();

	header.alpha = true;

	menuButton1.buttonSprite.inputEnabled = true;
	menuButton1.buttonSprite.alpha = true;

	menuButton2.buttonSprite.inputEnabled = true;
	menuButton2.buttonSprite.alpha = true;
	
	/*menuButton3.buttonSprite.inputEnabled = true;
	menuButton3.buttonSprite.alpha = true;
	
	menuButton4.buttonSprite.inputEnabled = true;
	menuButton4.buttonSprite.alpha = true;
	*/
	resetButton.buttonSprite.inputEnabled = false;
	resetButton.buttonSprite.alpha = false;
}

function hideMenu() {
	header.alpha = false;

	menuButton1.buttonSprite.inputEnabled = false;
	menuButton1.buttonSprite.alpha = false;

	menuButton2.buttonSprite.inputEnabled = false;
	menuButton2.buttonSprite.alpha = false;
	/*
	menuButton3.buttonSprite.inputEnabled = false;
	menuButton3.buttonSprite.alpha = false;
	
	menuButton4.buttonSprite.inputEnabled = false;
	menuButton4.buttonSprite.alpha = false;
	*/
	resetButton.buttonSprite.inputEnabled = true;
	resetButton.buttonSprite.alpha = true;
}

function showLevelMenu() {
	hideMenu();
	header.alpha = true;

	levelButton1.buttonSprite.inputEnabled = true;
	levelButton1.buttonSprite.alpha = true;

	levelButton2.buttonSprite.inputEnabled = true;
	levelButton2.buttonSprite.alpha = true;

	levelButton3.buttonSprite.inputEnabled = true;
	levelButton3.buttonSprite.alpha = true;

	levelButton4.buttonSprite.inputEnabled = true;
	levelButton4.buttonSprite.alpha = true;

	levelButton5.buttonSprite.inputEnabled = true;
	levelButton5.buttonSprite.alpha = true;
}

function hideLevelMenu() {
	header.alpha = false;

	levelButton1.buttonSprite.inputEnabled = false;
	levelButton1.buttonSprite.alpha = false;

	levelButton2.buttonSprite.inputEnabled = false;
	levelButton2.buttonSprite.alpha = false;

	levelButton3.buttonSprite.inputEnabled = false;
	levelButton3.buttonSprite.alpha = false;

	levelButton4.buttonSprite.inputEnabled = false;
	levelButton4.buttonSprite.alpha = false;

	levelButton5.buttonSprite.inputEnabled = false;
	levelButton5.buttonSprite.alpha = false;

	resetButton.buttonSprite.inputEnabled = true;
	resetButton.buttonSprite.alpha = true;
}
