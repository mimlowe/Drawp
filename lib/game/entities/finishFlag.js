ig.module(
	'game.entities.finishFlag'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

var gameState = 0;

EntityFinishFlag = ig.Box2DEntity.extend({
	size: {x: 32, y: 32},

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.FIXED,
	
	
	init: function( x, y, settings ) {
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
		fixture.shape = new Box2D.Collision.Shapes.b2CircleShape(16 * Box2D.SCALE);
        
    	fixture.density = 0.5;
		fixture.friction = 1;
		fixture.restitution = .3;

		this.body.CreateFixture(fixture);  
	},
	
	check: function(other){
		if (other instanceof EntityCrate && !ig.global.finishedGame){
			ig.global.gameState += ig.global.levelON + 1;
			ig.global.finishX = 480;
		} else other.kill();
	},
	
	update: function() {
		this.parent();
	}
	
});


});