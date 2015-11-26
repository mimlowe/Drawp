ig.module(
	'game.entities.instructions4'
)
.requires(
	'impact.entity'
)
.defines(function(){

var d_count;
var firstStart = true;

EntityInstructions4 = ig.Entity.extend({
	size: {x: 512, y: 320},

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	
	animSheet: new ig.AnimationSheet( 'media/Instructions4.png', 512, 320 ),

	init: function( x, y, settings ) {
		d_count = 0;
		this.addAnim( 'one', 1, [0] );
		this.parent( x, y, settings );
	},
	
	update: function(){
		if(!firstStart) {
			
			this.kill();
		} else {
	
			d_count++;
		
			if (d_count > 300) {
				firstStart = false;
			} 
		
		}
	}
	
});


});