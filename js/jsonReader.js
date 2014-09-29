function readJson() {
	console.log('sfasdasgas');	
	var jsonText = game.load.text('assets/levels/level1.json');
	console.log(jsonText);

	var parsedJsonData = JSON.parse(jsonText);
	var heh = parsedJsonData.level;
	console.log(heh);
}