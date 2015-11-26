ig.module(
	'game.entities.lazerv'
)
.requires(
	'impact.entity',
	'game.entities.explosion',
	'impact.game'
)
.defines(function(){

var count = 0;
var isOff = false;
var count2 = 0;
var startC = false;
EntityLazerv = ig.Entity.extend({
	size: {x: 16, y: 64},

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.FIXED,

	
	animSheet: new ig.AnimationSheet( 'media/lazer_V.png', 16, 64 ),

	init: function( x, y, settings ) {
		
		this.addAnim( 'off', 1, [0] );
		this.addAnim( 'on', 1, [1] );
		this.parent( x, y, settings );
		
	},
		
	update: function() {
		count++;
		if (count == 120) {
			isOff = !isOff;
			count = 0;
		}
		if(startC){
			count2++;
		}
		if(count2 == 50){
			ig.game.loadLevel(ig.global["Level" + ig.global.levelToLoad]);
			ig.global.gameState = 0;
			ig.game.numL = ig.global.numL;
		}
		if (isOff) this.currentAnim = this.anims.off;
		else this.currentAnim = this.anims.on;
		
		
		this.parent();
	},

	check: function( other ) {
		if(other instanceof EntityCrate) {
			if(isOff) {
				ig.game.spawnEntity(EntityExplosion,other.pos.x-32, other.pos.y-64);
				startC = true;
				count2 = 0;
				other.kill();
			}
		}		 
	}
	
});


});