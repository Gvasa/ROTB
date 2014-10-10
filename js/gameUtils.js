function levelComplete() {
 
    //var text = "- Gratz! -\n Level Complete";
    //var style = { font: "65px Arial", fill: "#ffd700", align: "center" };
    //var t = game.add.text(game.world.centerX-280, 0, text, style);
    sfxLevelComplete.play();
    complete = true;
    updateBarrelVisibility2(); 
    clearTutorials();
    tintGame(tintBlack, 1, 1000);
 
    //game.world.bringToTop(gameBoard[winBarrelCol][winBarrelRow].barrelSprite);
    tmpX = gameBoard[winIndex].barrelSprite.x;
    tmpY = gameBoard[winIndex].barrelSprite.y;
 
    animateWinBarrel();
 
    tintGame(winBarrelGlow, 1, 700);
 
    animateWinBarrelGlow();
    //createSmokeParticles();
 
    if(parseInt(currentLevel.slice(-1)) < NUM_OF_LEVELS) {
        showPostGameMenu();
        console.log('FORTSATT');
    } else {
        showMenu();
        console.log('MENU PLS');
    }
}


function emptyBoard2() {
var idcounter = 0;
  for (var i = 0; i < TEST_CONSTANT; i++) {
      for(var j = 0; j < TEST_CONSTANT; j++) {
        var barrel;
        var chargeSprite1;
        var chargeSprite2;
        
        
        //barrel = game.add.sprite(i*BARREL_WIDTH*barrelSpacing+xShift+1000, j*BARREL_HEIGHT*barrelSpacing+yShift, BARREL_EMPTY);
        barrel = game.add.sprite(i*BARREL_WIDTH+X_SHIFT, j*BARREL_HEIGHT+Y_SHIFT, BARREL_EMPTY);
        chargeSprite1 = game.add.sprite(5,0, 'spriteStar');
        chargeSprite2 = game.add.sprite(5*6, 0, 'spriteStar');


        gameBoard[idcounter] = new Barrel(BARREL_EMPTY, idcounter, barrel, 2, false, chargeSprite1, chargeSprite2, i*BARREL_WIDTH+X_SHIFT, j*BARREL_HEIGHT+Y_SHIFT);
       
        barrel.alpha = true;
        barrel.inputEnabled = true;
        chargeSprite1.alpha = false;
        chargeSprite2.alpha = false;
      
        barrel.addChild(chargeSprite1);
        barrel.addChild(chargeSprite2);
      
        gameBoard[idcounter].barrelSprite.events.onInputDown.add(listener,gameBoard[idcounter]);
        gameBoard[idcounter].barrelSprite.inputEnabled = false;
        counter++;
        idcounter++;
        
   
    }
  }
}

function resetBoard2() {
  var counter = 0;
  for (var i = 0; i < TEST_CONSTANT; i++) {
      for(var j = 0; j < TEST_CONSTANT; j++) {
        gameBoard[counter].barrelSprite.x = i*BARREL_WIDTH+X_SHIFT;
        gameBoard[counter].barrelSprite.y = j*BARREL_HEIGHT+Y_SHIFT;
        gameBoard[counter].spritePosX = i*BARREL_WIDTH+X_SHIFT;
        gameBoard[counter].spritePosY = j*BARREL_HEIGHT+Y_SHIFT;
        gameBoard[counter].barrelSprite.loadTexture(BARREL_EMPTY);
        gameBoard[counter].barrelType = BARREL_EMPTY;
        gameBoard[counter].visible = false;
        gameBoard[counter].charges = 2;
        counter++;
    }
    updateBarrelVisibility2();
  }
}

function updateBarrelVisibility2() {
  
  for(var i = 0; i < TEST_CONSTANT*6; i++) {  
      gameBoard[i].barrelSprite.inputEnabled = gameBoard[i].visible;
      
        if(gameBoard[i].barrelType != BARREL_WIN) {
          if(gameBoard[i].charges == 2) {
            gameBoard[i].chargeSprite1.alpha = gameBoard[i].visible;
            gameBoard[i].chargeSprite2.alpha = gameBoard[i].visible;
          } else if (gameBoard[i].charges == 1) {
            gameBoard[i].chargeSprite1.alpha = gameBoard[i].visible;
            gameBoard[i].chargeSprite2.alpha = false;
          } else {
            gameBoard[i].chargeSprite1.alpha = false;
            gameBoard[i].chargeSprite2.alpha = false;
          }
    } 
  }
  
}

function printRow(rowId) {
	for (var i = 0; i < TEST_CONSTANT; i++) {
   		gameBoard[i][rowId].barrelInfo();
   	}
}

function printCol(colId) {

   	for (var i = 0; i < TEST_CONSTANT; i++) {
   		gameBoard[colId][i].barrelInfo();
   	}
}

function printBoard() {
	for (var j = 0; j < TEST_CONSTANT; j++) {
   	    for (var k = 0; k < TEST_CONSTANT; k++) {
   			gameBoard[j][k].barrelInfo();

   		}
   	}
}

function calculateXIndex(tmpBarrel) {
  return (tmpBarrel.spritePosX-X_SHIFT) / (BARREL_WIDTH);
}

function calculateYIndex(tmpBarrel) {
  return (tmpBarrel.spritePosY-Y_SHIFT) / (BARREL_HEIGHT);
}

function resetWinBarrel() {
    gameBoard[winIndex].barrelSprite.loadTexture('BARREL_WIN');
    gameBoard[winIndex].barrelSprite.x = tmpX;
    gameBoard[winIndex].barrelSprite.y = tmpY;
    gameBoard[winIndex].barrelSprite.scale.setTo(1, 1);
    winBarrelGlow.x = tmpX;
    winBarrelGlow.y = tmpY;
    winBarrelGlow.scale.setTo(BARREL_SPRITE_WIDTH/400, BARREL_SPRITE_HEIGHT/400);
    winBarrelGlow.alpha = false;
}