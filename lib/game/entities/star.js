ig.module(
	'game.entities.star'
)
.requires(
	'impact.entity'
)
.defines(function(){
ig.global.finishX = 550;
var finishY = 0;
var increment;
var count = 0;
EntityStar = ig.Entity.extend({
	size: {x: 32, y: 32},
    isTaken : false,
    xstart: 0, ystart: 0,
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.FIXED,
	sfxCollect: new ig.Sound('media/ding.mp3'),
	
	animSheet: new ig.AnimationSheet( 'media/star.png', 32, 32 ),

	init: function( x, y, settings ) {
		this.addAnim( 'idle', 1, [0] );
		this.timer = new ig.Timer(0.5);
		this.parent( x, y, settings );
		this.xstart = this.pos.x;
		this.ystart = this.pos.y;

	},
	
	check: function (other) {
		if (other instanceof EntityCrate && this.isTaken == false) {
			ig.global.score += 1;
			this.sfxCollect.play();
			//this.pos.x = finishX;
			//this.pos.y = finishY;
			//ig.global.finishX += 32;
			this.isTaken = true;
			
			this.kill();
		}
		
	},
	
	update: function(){
		if( ig.input.pressed('reload')){
			this.isTaken = false;
			this.pos.x = this.xstart;
			this.pos.y = this.ystart;
			ig.global.finishX = 550;
		}else if(ig.input.pressed('restart')){
			ig.global.finishX = 550;
		}
	}
	
});


});