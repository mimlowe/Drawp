ig.module(
	'game.entities.end'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){


EntityEnd = ig.Box2DEntity.extend({
	size: {x: 32, y: 32},

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.PASSIVE,
	
	animSheet: new ig.AnimationSheet( 'media/ink.png', 16, 16 ),

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

    	var fixture = new Box2D.Dynamics.b2FixtureDef;
		fixture.shape = new Box2D.Collision.Shapes.b2CircleShape(8 * Box2D.SCALE);
        

		fixture.density = 0;
		fixture.friction = 0;
		fixture.restitution = 0;

		this.body.CreateFixture(fixture);  
	},
	
	update: function() {
				this.parent();
	}
	
});


});