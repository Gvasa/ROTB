function setUpGui() {
	console.log('set up gui here');
	guiGroup = game.add.group()

	guiUpper = guiGroup.create(0, 0, 'spriteGuiUpper');
	guiLower = guiGroup.create(0, 877, 'spriteGuiLower' );
	spriteResetButton = guiGroup.create(70, 895, 'resetButtonSprite');

	resetButton = new Button('resetButton', spriteResetButton);

	//guiUpper.alpha = false;
	//guiLower.alpha = false;
	//spriteResetButton.alpha = false;
	guiGroup.alpha = false;
	spriteResetButton.inputEnabled = true;
	spriteResetButton.events.onInputDown.add(menuListener, resetButton);
}