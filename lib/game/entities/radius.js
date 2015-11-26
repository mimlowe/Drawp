ig.module(
	'game.entities.radius'
)
.requires(
	'impact.entity'
)
.defines(function(){


EntityRadius = ig.Entity.extend({
	size: {x: 64, y: 64},

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.PASSIVE,

	
	animSheet: new ig.AnimationSheet( 'media/radius.png', 64, 64),

	init: function( x, y, settings ) {
		
		this.addAnim( 'idle', 1, [0] );
		this.currentAnim.alpha = 0;
		this.parent( x, y, settings );
		
	},
		
	update: function() {	
		this.parent();
	},

	check: function( other ) {
		if (other instanceof EntityPath){
			if (ig.input.state('click')) {
				if(this.currentAnim.alpha < 1) this.currentAnim.alpha += 0.02;
			}
			if (ig.input.released('click')) {
				this.currentAnim.alpha = 0;
				ig.game.numL++;
				other.kill();
			}
		}
		
	}
	
	
});


});