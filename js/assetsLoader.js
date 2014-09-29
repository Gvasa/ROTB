function assetsLoader() {
    game.load.image('background', 'assets/backgrounds/bg_copy.jpg');
    game.load.image('spriteInvisBarrel', 'assets/barrels/barrel_invis_76_96.png');
    game.load.image('spriteWinBarrel', 'assets/barrels/barrel_win_76_96.png');
    game.load.image('spriteMoveRowLeft', 'assets/barrels/barrel_move_row_left_76_96.png');
    game.load.image('spriteMoveRowRight', 'assets/barrels/barrel_move_row_right_76_96.png');
    game.load.image('spriteMoveColUp', 'assets/barrels/barrel_move_col_up_76_96.png');
    game.load.image('spriteMoveColDown', 'assets/barrels/barrel_move_col_down_76_96.png');
    game.load.image('spriteRevealAbove', 'assets/barrels/barrel_reveal_up_76_96.png');
    game.load.image('spriteRevealBelow', 'assets/barrels/barrel_reveal_below_76_96.png');
    game.load.image('spriteRevealLeft', 'assets/barrels/barrel_reveal_left_76_96.png');
    game.load.image('spriteRevealRight', 'assets/barrels/barrel_reveal_right_76_96.png');
    game.load.image('spriteCharge', 'assets/barrels/barrel_add_charge_76_96.png');
    game.load.image('spriteFadedBarrel', 'assets/barrels/barrel_tinted_black_76_96.png');
    game.load.image('spriteBaseBarrel', 'assets/barrels/barrel_base_76_96.png');

    game.load.audio('sfx', 'assets/sound/barrelclick.wav');

    game.load.text('level1', 'assets/levels/level1.txt');
    game.load.text('level2', 'assets/levels/level2.txt');
    game.load.text('level3', 'assets/levels/level3.txt');
    game.load.text('level4', 'assets/levels/level4.txt');
    game.load.text('level5', 'assets/levels/level5.txt');

    game.load.image('header', 'assets/menu/menu_wood_chains_rotb.png');
    game.load.image('menuLowerButtonSprite', 'assets/menu/menuLowerButton_150_111.png');
    game.load.image('menuUpperButtonSprite', 'assets/menu/menuUpperButton_150_138.png');
    game.load.image('menuButtonSprite', 'assets/menu/menuButton_150_111.png');
    game.load.image('menuButtonWood2', 'assets/menu/menuButton_200_141.png');
    game.load.image('resetButtonSprite', 'assets/menu/menuButtonReset_196_53.png');
    game.load.image('continueButtonSprite', 'assets/menu/menuButtonContinue_150_113.png');
    game.load.image('levelsButtonSprite', 'assets/menu/menuButtonLevels_150_113.png');
    game.load.image('playButtonSprite', 'assets/menu/menuButtonPlay_150_113.png');

    game.load.image('tutorial_1_1', 'assets/tutorials/tutorial_1_1_420_310.png');
    game.load.image('tutorial_1_2', 'assets/tutorials/tutorial_1_2_420_310.png');
    game.load.image('tutorial_1_3', 'assets/tutorials/tutorial_1_3_420_310.png');
    game.load.image('tutorialFaded', 'assets/tutorials/tutorialFaded.png');

    game.load.image('spriteStar', 'assets/barrelIcons/chargeFlash_25_37.png');
    game.load.image('spriteChargeUpper', 'assets/barrelIcons/charge_upper_76_96.png');
    game.load.image('spriteChargeLower', 'assets/barrelIcons/charge_lower_76_96.png');

    game.load.image('spriteGuiUpper', 'assets/gui/gui_upper_bar.png');
    game.load.image('spriteGuiLower', 'assets/gui/gui_lower_bar.png');

    game.load.spritesheet('levels', 'assets/barrels/levels/levels_spritesheet.png', 77, 98);
}