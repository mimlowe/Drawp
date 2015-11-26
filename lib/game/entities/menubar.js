ig.module(
	'game.entities.menubar'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityMenubar= ig.Entity.extend({
	size: {x: 1024, y: 64},
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	
	animSheet: new ig.AnimationSheet( 'media/menubar.png', 1024, 64 ),

	init: function( x, y, settings ) {
		this.addAnim( 'idle', 1, [0] );
		
		this.parent( x, y, settings );

	},
	
	update: function(){
		/*if( ig.input.pressed('reload')){
		
		}else if(ig.input.pressed('restart')){
		}*/
	}
	
});


});