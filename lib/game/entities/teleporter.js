ig.module(
	'game.entities.teleporter'
)
.requires(
	'plugins.box2d.entity'

)
.defines(function(){

var teleport = false;
var destination_x;
var destination_y;

EntityTeleporter = ig.Box2DEntity.extend({
	size: {x: 32, y: 32},

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.PASSIVE,
	
	animSheet: new ig.AnimationSheet( 'media/portalA.png', 32, 32 ),

	init: function( x, y, settings ) {
		this.addAnim( 'idle', 1, [0] );
		this.parent( x, y, settings );
		destination_x = this.xFinal;
		destination_y = this.yFinal;
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
		fixture.shape = new Box2D.Collision.Shapes.b2CircleShape(16 * Box2D.SCALE);
        
    	fixture.density = 0.5;
		fixture.friction = 1;
		fixture.restitution = 0.3;

		//this.body.CreateFixture(fixture);  
	},
	
	check: function(other){
		if (other instanceof EntityCrate){
			other.pos.x = destination_x;
			other.pos.y = destination_y;
			other.body.SetPosition(new Box2D.Common.Math.b2Vec2((destination_x + other.size.x / 2) * Box2D.SCALE,
																(destination_y + other.size.y / 2) * Box2D.SCALE));
		}
	},
	
	update: function() {
		this.parent();

	}
	
});


});