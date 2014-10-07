function setUpGui() {
	console.log('set up gui here');
	guiGroup = game.add.group()

	var guiUpper = guiGroup.create(0, 0, 'spriteGuiUpper');
	var guiLower = guiGroup.create(0, 877, 'spriteGuiLower' );
	var spriteResetButton = guiGroup.create(70, 895, 'resetButtonSprite');
    var spriteMainMenuButton = guiGroup.create(374 ,895, 'mainMenuButtonSprite');

	resetButton = new Button('resetButton', spriteResetButton);
    mainMenuButton = new Button('menuButton', spriteMainMenuButton);

	guiGroup.alpha = false;
	spriteResetButton.inputEnabled = true;
    spriteMainMenuButton.inputEnabled = true;
	spriteResetButton.events.onInputDown.add(guiListener, resetButton);
    spriteMainMenuButton.events.onInputDown.add(guiListener, mainMenuButton);
}