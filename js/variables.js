var BARREL_REVEAL_ABOVE = 'spriteRevealAbove';
var BARREL_REVEAL_BELOW = 'spriteRevealBelow';
var BARREL_REVEAL_LEFT = 'spriteRevealLeft';
var BARREL_REVEAL_RIGHT = 'spriteRevealRight';
var BARREL_CHARGE = 'spriteCharge';
var BARREL_MOVE_COL_UP = 'spriteMoveColUp';
var BARREL_MOVE_COL_DOWN = 'spriteMoveColDown';
var BARREL_MOVE_ROW_LEFT = 'spriteMoveRowLeft';
var BARREL_MOVE_ROW_RIGHT = 'spriteMoveRowRight';
var BARREL_EMPTY = 'spriteInvisBarrel';
var BARREL_WIN = 'spriteWinBarrel';

var BOARD_COLS;
var BOARD_ROWS;
var counter = 0;

var TEST_CONSTANT = 6;
var BARREL_WIDTH = 80;
var BARREL_HEIGHT = 100;

var guiGroup;

var gameBoard;

var winBarrelCol;
var winBarrelRow;

var currentLevel = '';


var bClick;

var fileText;

var menuButton1;
var menuButton2;
var menuButton3;
var menuButton4;
var header;

var tutorial_1_1;
var tutorial_1_2;
var tutorial_1_3;
var tutorialFaded;
var tutorialContinue;