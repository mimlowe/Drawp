ig.module(
	'game.entities.moveblock_h'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){
	
var left;
var right;

EntityMoveblock_h = ig.Box2DEntity.extend({
	size: {x: 64, y: 16},

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.ACTIVE,
	
	animSheet: new ig.AnimationSheet( 'media/moveblock_h.png', 64, 16 ),

	init: function( x, y, settings ) {
		this.addAnim( 'idle', 1, [0] );
		this.parent( x, y, settings );
		left = x;
		right = x + this.distance;
	},	
	
	createBody: function() {
		var bodyDef = new Box2D.Dynamics.b2BodyDef();
		bodyDef.position = new Box2D.Common.Math.b2Vec2(
			(this.pos.x + this.size.x / 2) * Box2D.SCALE,
			(this.pos.y + this.size.y / 2) * Box2D.SCALE
		); 
		bodyDef.type = Box2D.Dynamics.b2Body.b2_kinematicBody;
		this.body = ig.world.CreateBody(bodyDef);

		var fixture = new Box2D.Dynamics.b2FixtureDef;
		fixture.shape = new Box2D.Collision.Shapes.b2PolygonShape();
		fixture.shape.SetAsBox(
			this.size.x / 2 * Box2D.SCALE,
			this.size.y / 2 * Box2D.SCALE
		);
		
		fixture.density = 1.0;
		fixture.friction = 0.5;
		fixture.restitution = 0.3;

		this.body.CreateFixture(fixture);
		this.body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(this.speed, 0));
	},	
	update: function() {

		if (this.pos.x <= left) {
			this.body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(this.speed, 0));
		}
		
		else if (this.pos.x >= right) {
			this.body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(-1 * this.speed, 0));
		}
		
		this.parent();
	},
	
	check: function(other){
		if(other instanceof EntityPath){
			other.kill();
			ig.game.numL++;
		}
	}
	
});


});