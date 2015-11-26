ig.module(
	'game.entities.play'
)
.requires(
	'impact.entity'
)
.defines(function(){
ig.global.level;

EntityPlay = ig.Entity.extend({
	size: {x: 64, y: 64},
	type: ig.Entity.TYPE.B,
	sfxClick: new ig.Sound('media/buttonclick.mp3'),
	animSheet: new ig.AnimationSheet( 'media/levelsheet.png', 64, 64 ),
	init: function( x, y, settings ) {
		this.addAnim( 'l1', 1, [0] );
		this.addAnim( 'l2', 1, [1] );
		this.addAnim( 'l3', 1, [2] );
		this.addAnim( 'l4', 1, [3] );
		this.addAnim( 'l5', 1, [4] );
		this.addAnim( 'l6', 1, [5] );
		this.addAnim( 'l7', 1, [6] );
		this.addAnim( 'l8', 1, [7] );
		this.addAnim( 'l9', 1, [8] );
		this.addAnim( 'l10', 1, [9] );
		this.parent( x, y, settings );
		this.level = this.test;

	},

	update: function(){
		if(this.level == 1) this.currentAnim = this.anims.l1;
		if(this.level == 2) this.currentAnim = this.anims.l2;
		if(this.level == 3) this.currentAnim = this.anims.l3;
		if(this.level == 4) this.currentAnim = this.anims.l4;
		if(this.level == 5) this.currentAnim = this.anims.l5;
		if(this.level == 6) this.currentAnim = this.anims.l6;
		if(this.level == 7) this.currentAnim = this.anims.l7;
		if(this.level == 8) this.currentAnim = this.anims.l8;
		if(this.level == 9) this.currentAnim = this.anims.l9;
		if(this.level == 10) this.currentAnim = this.anims.l10;
		if (ig.input.pressed('click') && this.inFocus()) {
			this.sfxClick.play();
			if(this.level == 0){ig.global.gameState = -1; ig.global.canDraw = false;}
    	    if(this.level == 1){ig.global.gameState = 2; ig.global.canDraw = false;}
    	    if(this.level == 2){ig.global.gameState = 3; ig.global.canDraw = false;}
    	    if(this.level == 3) ig.global.gameState = 4; 
    	    if(this.level == 4) ig.global.gameState = 5; 
    	    if(this.level == 5) ig.global.gameState = 6; 
    	    if(this.level == 6) ig.global.gameState = 7; 
    	    if(this.level == 7) ig.global.gameState = 8; 
    	    if(this.level == 8) ig.global.gameState = 9; 
    	    if(this.level == 9) ig.global.gameState = 10;
    	    if(this.level == 10) ig.global.gameState = 11;
    	}
    	

	},
	
	inFocus: function() {
    	return (
       		(this.pos.x <= (ig.input.mouse.x + ig.game.screen.x)) &&
		       ((ig.input.mouse.x + ig.game.screen.x) <= this.pos.x + this.size.x) &&
		       (this.pos.y <= (ig.input.mouse.y + ig.game.screen.y)) &&
       		((ig.input.mouse.y + ig.game.screen.y) <= this.pos.y + this.size.y)
   		);
 	}
});

});