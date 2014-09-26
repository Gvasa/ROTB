function setUpGui() {
	console.log('set up gui here');
	guiGroup = game.add.group()

	guiUpper = guiGroup.create(0, 0, 'spriteGuiUpper');
	guiLower = guiGroup.create(0, 877, 'spriteGuiLower' );
}