ig.module(
	'game.entities.path'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){


EntityPath = ig.Box2DEntity.extend({
	size: {x: 16, y: 16},

	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	
	animSheet: new ig.AnimationSheet( 'media/ink.png', 16, 16 ),
	sfxBounce: new ig.Sound('media/bounce1.mp3'),

	init: function( x, y, settings ) {

		this.addAnim( 'idle', 1, [0] );
		this.parent( x, y, settings );
	},
	
	createBody: function() {        
    	var bodyDef = new Box2D.Dynamics.b2BodyDef();
    	bodyDef.position = new Box2D.Common.Math.b2Vec2(
			(this.pos.x + this.size.x / 2) * Box2D.SCALE,
			(this.pos.y + this.size.y / 2) * Box2D.SCALE
		); 
     	bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;
		this.body = ig.world.CreateBody(bodyDef);


    	// These two lines define the shape
    	// e.g. b2.PolygonDef, b2.CircleDef
    	var fixture = new Box2D.Dynamics.b2FixtureDef;
		fixture.shape = new Box2D.Collision.Shapes.b2CircleShape(8 * Box2D.SCALE);
        

		fixture.density = 0;
		fixture.friction = 0.1;
		fixture.restitution = 0;

		this.body.CreateFixture(fixture);  
	},
	
	check: function(other) {
		if (other instanceof EntityCrate) {
			this.sfxBounce.play();
		}
	},
	
	update: function() {

		this.zIndex = -10;
		this.parent();
	}
	
	
	
});


});