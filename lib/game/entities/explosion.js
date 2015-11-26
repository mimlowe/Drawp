ig.module(
	'game.entities.explosion'
)
.requires(
	'impact.entity'
)
.defines(function(){

var count = 0;

EntityExplosion = ig.Entity.extend({
	size: {x: 128, y: 128},

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	
	animSheet: new ig.AnimationSheet( 'media/Explosion_Spritesheet.png', 128, 128 ),

	init: function( x, y, settings ) {
		this.addAnim( 'explode', .02,
			[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49] );
		this.timer = new ig.Timer(0.5);
		this.parent( x, y, settings );
	},

	update: function() {

		if(this.timer.delta() > 0) {
			this.kill();
		}
		this.currentAnim = this.anims.explode;
		this.parent();
	}
	
});


});