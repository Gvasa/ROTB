function setUpGui() {
	console.log('set up gui here');
	guiGroup = game.add.group();
    var text = "Moves: " + numOfMovesIndicator;
    var style = {font: "30pt Titan One", fill: "#ffffff"};


	var guiUpper = guiGroup.create(0, 0, 'spriteGuiUpper');
	var guiLower = guiGroup.create(0, 877, 'spriteGuiLower' );
	var spriteResetButton = guiGroup.create(70, 895, 'resetButtonSprite');
    var spriteMainMenuButton = guiGroup.create(374 ,895, 'mainMenuButtonSprite');


    movesIndicatorText = game.add.text(30, 20, text, style, guiGroup);
    //movesIndicatorText.blendSoftLight();
    var grad = movesIndicatorText.context.createLinearGradient(0, 0, 0, movesIndicatorText.canvas.height);
    grad.addColorStop(0, '#a3a3a3');
    grad.addColorStop(0.6, '#ffffff');
    movesIndicatorText.fill = grad;
    movesIndicatorText.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

	resetButton = new Button('resetButton', spriteResetButton);
    mainMenuButton = new Button('menuButton', spriteMainMenuButton);
    //moveCounterText();
	guiGroup.alpha = false;
	spriteResetButton.inputEnabled = true;
    spriteMainMenuButton.inputEnabled = true;
	spriteResetButton.events.onInputDown.add(guiListener, resetButton);
    spriteMainMenuButton.events.onInputDown.add(guiListener, mainMenuButton);
}

function setNumberOfMoves(moves) {
    var text = "Moves: " + moves;
    console.log(moves);
    movesIndicatorText.text = text;
    movesIndicatorText.preUpdate();
    text = "";

}

function setCurrentLevelIndicator() {
    
}