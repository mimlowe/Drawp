ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.levels.levelMENU',
	'game.levels.level1',
	'game.levels.level2',
	'game.levels.level3',
	'game.levels.level4',
	'game.levels.level5',
	'game.levels.level6',
	'game.levels.level7',
	'game.levels.level8',
	'game.levels.level9',
	'game.levels.level10',
	'game.levels.levelComplete',	
	'game.entities.crate',
	'game.entities.menubar',
	'game.entities.path',
	'game.entities.play',
	'game.entities.quit',
	'game.entities.instructions1',
	'game.entities.instructions2',
	'game.entities.instructions3',
	'game.entities.instructions4',
	'game.entities.pointer',
	'game.entities.lazerv',
	'game.entities.teleporter',
	'game.entities.moveblock_h',
	'game.entities.moveblock_v',	
	'game.entities.explosion',
	'game.entities.radius',
	'game.entities.starmeter',
	'plugins.box2d.game'
)
.defines(function(){

ig.global.numL = 0;
var font = new ig.Font('media/download.png');
ig.global.gameState = 0;
ig.global.currentLevel;
ig.global.levelON = 0;
ig.global.levelToLoad;
ig.global.score;
ig.global.canDraw = false;
ig.global.finishedGame = false;
var levelPastMenu = false;
ig.global.bounceSound = new ig.Sound('media/bounce1.mp3');

ig.global.mouseX;
ig.global.mouseY;
var r = 0;
var g = 225;


MyGame = ig.Box2DGame.extend({
	numL: 0,
	init: function() {		
		this.loadLevel( LevelLevelMENU);
		ig.global.gameState = -1;
		ig.music.add('media/background.mp3');
		ig.music.volume = 0.4;
		ig.music.play();
	},
	
	newGameState: function(ink) {
		ig.global.numL = ink;
		this.numL = ig.global.numL;
		ig.global.gameState = 0;
		ig.global.score = 0;
		g = 225;
		r = 0;

		levelPastMenu = true;
	},
		
	update: function() {
		if(ig.global.gameState == -1){
			this.loadLevel(LevelLevelMENU);
			levelPastMenu = false;
		}else if (ig.global.gameState == 2){
			this.newGameState(200);
			this.loadLevel(LevelLevel1);
			ig.global.levelON = 1;
			ig.global.levelToLoad = "Level1";
		}
		else if (ig.global.gameState == 3){
			this.loadLevel(LevelLevel2);
			this.newGameState(150);
			ig.global.levelON = 2;
			ig.global.levelToLoad = "Level2";
		}
		else if (ig.global.gameState == 4){
			this.loadLevel(LevelLevel3);
			this.newGameState(250);
			ig.global.levelON = 3;
			ig.global.levelToLoad = "Level3";
		}else if (ig.global.gameState == 5){
			this.loadLevel(LevelLevel4);
			this.newGameState(300);
			ig.global.levelON = 4;
			ig.global.levelToLoad = "Level4";
		}
		else if (ig.global.gameState == 6){
			this.loadLevel(LevelLevel5);
			this.newGameState(300);
			ig.global.levelON = 5;
			ig.global.levelToLoad = "Level5";
		}
		else if (ig.global.gameState == 7){
			this.loadLevel(LevelLevel6);
			this.newGameState(300);
			ig.global.levelToLoad = "Level6";
			ig.global.levelON = 6;
		}
		else if (ig.global.gameState == 8){
			this.loadLevel(LevelLevel7);
			this.newGameState(300);
			ig.global.levelON = 7;
			ig.global.levelToLoad = "Level7";
		}else if (ig.global.gameState == 9){
			this.loadLevel(LevelLevel8);
			this.newGameState(250);
			ig.global.levelON = 8;
			ig.global.levelToLoad = "Level8";
		}else if (ig.global.gameState == 10){
			this.loadLevel(LevelLevel9);
			this.newGameState(150);
			ig.global.levelON = 9;
			ig.global.levelToLoad = "Level9";
		}else if (ig.global.gameState == 11){
			this.loadLevel(LevelLevel10);
			this.newGameState(400);
			ig.global.levelON = 10;
			ig.global.levelToLoad = "Level10";
		}else if (ig.global.gameState == 12){
			this.loadLevel(LevelLevelComplete);
			ig.global.levelON = 12;
			ig.global.levelToLoad = "Level12";
			ig.global.finishedGame = true;
		}

		if( ig.input.pressed('start') ) {
 			ig.global.gameState = 1;
		}
		
		if( ig.input.pressed('restart')){
			ig.global.gameState = 0;
			this.loadLevel(currentLevel);
			this.numL = ig.global.numL;
			ig.global.score = 0;
			g = 225;
			r = 0;
		}
		if( ig.input.pressed('reload')){
			ig.global.gameState = 0;
			ig.global.score = 0;
			
			
		}
		if( ig.input.pressed('menu')){
			ig.global.gameState = -1;
			ig.global.finishX = 550;
			g = 225;
			r = 0;

		}
		
		
		if (ig.input.state('click') && ig.global.gameState == 0 && levelPastMenu == true && ig.global.gameState != -1 ) {
   			if(this.numL>0 && (ig.global.mouseX != ig.input.mouse.x || ig.global.mouseY != ig.input.mouse.y)){
       			ig.game.spawnEntity( EntityPath, ig.input.mouse.x-14, ig.input.mouse.y-15);
       			this.numL--;
				if(g > 0 && r < 255) {
				g--;
				r++;
				}
       			ig.global.mouseX = ig.input.mouse.x;
				ig.global.mouseY = ig.input.mouse.y;
      		}
 		}
		
		this.parent();
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		var x = ig.system.width/2;
   		var y = ig.system.height/2;
		
		this.parent();
		
		if (gameState != -1 && !finishedGame) {
				ig.system.context.fillStyle = "rgb("+r+","+g+",0)";
				ig.system.context.beginPath();
				ig.system.context.rect(824, 16, (150* (this.numL / ig.global.numL)) * ig.system.scale, 10 * ig.system.scale);
				ig.system.context.closePath();
				ig.system.context.fill();
		}


	
		// Add your own drawing code here
		
	}
	
});


ig.main( '#canvas', MyGame, 60, 1024, 640, 1);
	ig.input.bind( ig.KEY.SPACE, 'start' );	
	ig.input.bind( ig.KEY.MOUSE1, 'click' );
	ig.input.bind( ig.KEY.ENTER, 'reload');
	ig.input.bind( ig.KEY.R, 'restart');
	//ig.input.bind( ig.KEY.ENTER, 'enter');
	ig.input.bind( ig.KEY.ESC, 'menu');

});
