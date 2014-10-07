var BARREL_REVEAL_ABOVE = 'BARREL_REVEAL_ABOVE';
var BARREL_REVEAL_BELOW = 'BARREL_REVEAL_BELOW';
var BARREL_REVEAL_LEFT = 'BARREL_REVEAL_LEFT';
var BARREL_REVEAL_RIGHT = 'BARREL_REVEAL_RIGHT';
var BARREL_CHARGE = 'BARREL_CHARGE';
var BARREL_MOVE_COL_UP = 'BARREL_MOVE_COL_UP';
var BARREL_MOVE_COL_DOWN = 'BARREL_MOVE_COL_DOWN';
var BARREL_MOVE_ROW_LEFT = 'BARREL_MOVE_ROW_LEFT';
var BARREL_MOVE_ROW_RIGHT = 'BARREL_MOVE_ROW_RIGHT';
var BARREL_EMPTY = 'BARREL_EMPTY';
var BARREL_WIN = 'BARREL_WIN';
var BARREL_FADED = 'BARREL_FADED';

var BOARD_COLS;
var BOARD_ROWS;
var counter = 0;

var TEST_CONSTANT = 6;
var BARREL_WIDTH = 80*1.05;
var BARREL_HEIGHT = 100*1.05;
var X_SHIFT = 73;
var Y_SHIFT = 163;

var NUM_OF_LEVELS = 6;

var TWEENCHECK;

var guiGroup;

var gameBoard;

var winBarrelCol;
var winBarrelRow;

var currentLevel = '';

var bClick;

var fileText;

var charges;
var complete;

var mainMenuButtonSprite1;
var mainMenuButtonSprite2;
var menuButton1;
var menuButton2;
var levelButton1;
var levelButton2;
var levelButton3;
var levelButton4;
var levelButton5;
var header;

//var nextLevelButton;
var levelCompleteButton;
var resetButton;
var mainMenuButton;

var outOfChargesButton;
var chooseLevelButton;
var restartLevelButton;

var tutorial_1_1;
var tutorial_1_2;
var tutorial_1_3;
var tutorialFaded;
var tutorialContinue;