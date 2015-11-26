ig.module(
	'game.entities.gravityModifier'
)
.requires(
	'plugins.box2d.entity'

)
.defines(function(){

var applyForce = false;;
var ball;
var timer = 0;

EntityGravityModifier = ig.Box2DEntity.extend({
	size: {x: 32, y: 32},
    xstart: 0, ystart: 0,
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.PASSIVE,
	
	animSheet: new ig.AnimationSheet( 'media/arrow.png', 32, 32 ),

	init: function( x, y, settings ) {
		this.addAnim( 'idle', 1, [0] );
		this.parent( x, y, settings );
		xstart = this.pos.x;
		ystart = this.pos.y;
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
			applyForce = true;
			ball = other;
		}
	},
	
	update: function() {
		if( ig.input.pressed('restart')){
			applyForce = false;
			timer = 0;
		}
		if( ig.input.pressed('reload')){
			applyForce = false;
			timer = 0;
		}
		if (applyForce && timer < 80){
			ig.global.gameState = -2;
			var gravity = new Box2D.Common.Math.b2Vec2(0, -8000 * Box2D.SCALE );
			ball.body.ApplyForce(gravity, ball.body.GetPosition());
			timer++;
		}
		else if (applyForce){
			applyForce = false;
			timer = 0;
			ig.global.gameState = 1;
		}
		this.parent();
	}
	
});


});