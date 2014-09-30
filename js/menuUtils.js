 function Button(_buttonType, _sprite) {
	this.buttonType = _buttonType;
	this.buttonSprite = _sprite;
}


function createMenu() {
	resetBoard();
	header = game.add.sprite(114,-20,'header');

	mainMenuButtonSprite1 = game.add.sprite(256, 265, 'playButtonSprite');
	mainMenuButtonSprite2 = game.add.sprite(256, 365, 'levelsButtonSprite');
	
	var resetButtonSprite = game.add.sprite(70, 895, 'resetButtonSprite');
 
	mainMenuButtonSprite1.inputEnabled = true;
	mainMenuButtonSprite2.inputEnabled = true;
	
	resetButtonSprite.inputEnabled = true;

	menuButton1 = new Button('play', mainMenuButtonSprite1);
	menuButton2 = new Button('levels', mainMenuButtonSprite2);
	
	resetButton = new Button('resetButton', resetButtonSprite);
	resetButton.buttonSprite.alpha = false;

	mainMenuButtonSprite1.events.onInputDown.add(menuListener, menuButton1);	
	mainMenuButtonSprite2.events.onInputDown.add(menuListener, menuButton2);
	
	resetButtonSprite.events.onInputDown.add(menuListener, resetButton);
	resetButton.buttonSprite.inputEnabled = false;

	//dropMainMenu();
	dropMenuAnimation(header, -910, 700);
	dropMenuAnimation(menuButton1.buttonSprite, -465-113, 700);
	dropMenuAnimation(menuButton2.buttonSprite, -365-113, 700);

}

function createLevelMenu() {
	header = game.add.sprite(114, -20, 'header');
	var button1 = game.add.sprite(90, 366, 'levels');
	var button2 = game.add.sprite(90*2, 366, 'levels');
	var button3 = game.add.sprite(90*3, 366, 'levels');
	var button4 = game.add.sprite(90*4, 366, 'levels');
	var button5 = game.add.sprite(90*5, 366, 'levels');


	button1.animations.add('1', [0], true);
	button2.animations.add('2', [1], true);
	button3.animations.add('3', [2], true);
	button4.animations.add('4', [3], true);
	button5.animations.add('5', [4], true);

	button1.animations.play('1');
	button2.animations.play('2');
	button3.animations.play('3');
	button4.animations.play('4');
	button5.animations.play('5');

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

	dropMenuAnimation(header, -910, 700);
	dropMenuAnimation(menuButton1.buttonSprite, -465-113, 700);
	dropMenuAnimation(menuButton2.buttonSprite, -365-113, 700);

	header.alpha = true;

	menuButton1.buttonSprite.inputEnabled = true;
	menuButton1.buttonSprite.alpha = true;

	menuButton2.buttonSprite.inputEnabled = true;
	menuButton2.buttonSprite.alpha = true;
	
	resetButton.buttonSprite.inputEnabled = false;
	resetButton.buttonSprite.alpha = false;

	guiUpper.alpha = false;
	guiLower.alpha = false;
}

function hideMenu() {
	
	rollUpMenuAnimation(header, -910, 700);
	rollUpMenuAnimation(menuButton1.buttonSprite, -465-113, 700);
	rollUpMenuAnimation(menuButton2.buttonSprite, -365-113, 700);
		/*
		header.alpha = false;

		menuButton1.buttonSprite.inputEnabled = false;
		menuButton1.buttonSprite.alpha = false;

		menuButton2.buttonSprite.inputEnabled = false;
		menuButton2.buttonSprite.alpha = false;
*/		
		resetButton.buttonSprite.inputEnabled = true;
		resetButton.buttonSprite.alpha = true;

		guiUpper.alpha = true;
		guiLower.alpha = true;
}

function showLevelMenu() {
	hideMenu();

	dropMenuAnimation(header, -910, 700);
	showFromLeftAnimation(levelButton1.buttonSprite, -1000, 700);
	showFromLeftAnimation(levelButton2.buttonSprite, -1000, 670);
	showFromLeftAnimation(levelButton3.buttonSprite, -1000, 640);
	showFromLeftAnimation(levelButton4.buttonSprite, -1000, 610);
	showFromLeftAnimation(levelButton5.buttonSprite, -1000, 580);

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

	resetButton.buttonSprite.inputEnabled = false;
	resetButton.buttonSprite.alpha = false;

	guiUpper.alpha = false;
	guiLower.alpha = false;
}

function hideLevelMenu() {

	rollUpMenuAnimation(header, -910, 700);
	hideToLeftAnimation(levelButton1.buttonSprite, -1000, 580);
	hideToLeftAnimation(levelButton2.buttonSprite, -1000, 610);
	hideToLeftAnimation(levelButton3.buttonSprite, -1000, 640);
	hideToLeftAnimation(levelButton4.buttonSprite, -1000, 670);
	hideToLeftAnimation(levelButton5.buttonSprite, -1000, 700);
/*
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
*/
	resetButton.buttonSprite.inputEnabled = true;
	resetButton.buttonSprite.alpha = true;

	guiUpper.alpha = true;
	guiLower.alpha = true;
}

function createPostGameMenu() {
	//clearBoard();
	levelCompleteButton = game.add.sprite(114, -20, 'levelCompleteButtonSprite');
	var button1 = game.add.sprite(256, 266, 'continueButtonSprite');

	button1.inputEnabled = true;

	nextLevelButton = new Button('nextLevel', button1);

	nextLevelButton.buttonSprite.alpha = false;
	nextLevelButton.buttonSprite.inputEnabled = false;
	levelCompleteButton.alpha = false;

	button1.events.onInputDown.add(levelListener ,nextLevelButton);

}

function showPostGameMenu() {
	dropMenuAnimation(levelCompleteButton, -910, 700);
	dropMenuAnimation(nextLevelButton.buttonSprite, -498-113, 700);

	game.world.bringToTop(tutorialFaded);
	game.world.bringToTop(guiGroup);
	game.world.bringToTop(resetButton);
	levelCompleteButton.alpha = true;
	game.world.bringToTop(levelCompleteButton);

	nextLevelButton.buttonSprite.inputEnabled = true;
	nextLevelButton.buttonSprite.alpha = true;
	game.world.bringToTop(nextLevelButton.buttonSprite);
}

function hidePostGameMenu() {
	rollUpMenuAnimation(levelCompleteButton, -910, 700);
	rollUpMenuAnimation(nextLevelButton.buttonSprite, -498-113, 700);

	levelCompleteButton.alpha = false;

	nextLevelButton.buttonSprite.inputEnabled = false;
	nextLevelButton.buttonSprite.alpha = false;
}
