ig.module(
	'game.entities.starmeter'
)
.requires(
	'impact.entity'
)
.defines(function(){

var count = 3;

EntityStarmeter = ig.Entity.extend({
	size: {x: 96, y: 32},
    isTaken : false,

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	
	animSheet: new ig.AnimationSheet( 'media/star_meter.png', 96, 32 ),

	init: function( x, y, settings ) {
		this.addAnim( 'none', 1, [0] );
		this.addAnim( 'one', 1, [1] );
		this.addAnim( 'two', 1, [2]);
		this.addAnim( 'three', 1, [3]);
		this.parent( x, y, settings );
	},
	
	update: function(){
	
		count = ig.global.score;
	
		if(count == 0) {
			this.currentAnim = this.anims.none;
		} else if(count == 1) {
			this.currentAnim = this.anims.one;
		} else if(count == 2) {
			this.currentAnim = this.anims.two;
		}else if(count == 3) {
			this.currentAnim = this.anims.three;
		}
	

	
		if( ig.input.pressed('reload')){
			this.isTaken = false;
		}else if(ig.input.pressed('restart')){
			//this.count = 0;
		}
	}
	
});


});