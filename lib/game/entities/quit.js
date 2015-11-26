ig.module(
	'game.entities.quit'
)
.requires(
	'impact.entity'
)
.defines(function(){
ig.global.level;

EntityQuit = ig.Entity.extend({
	size: {x: 32, y: 32},
	type: ig.Entity.TYPE.B,
	sfxClick: new ig.Sound('media/buttonclick.mp3'),
	animSheet: new ig.AnimationSheet( 'media/x.png', 32, 32 ),
	init: function( x, y, settings ) {
		this.addAnim( 'quit', 1, [0] );
		this.parent( x, y, settings );
		this.level = this.test;

	},

	update: function(){
		if (ig.input.pressed('click') && this.inFocus()) {
			this.sfxClick.play();
			ig.global.gameState = -1;
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