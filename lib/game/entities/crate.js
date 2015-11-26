ig.module(
	'game.entities.crate'
)
.requires(
	'plugins.box2d.entity'

)
.defines(function(){
var xstart;
var ystart;
EntityCrate = ig.Box2DEntity.extend({
	size: {x: 32, y: 32},

	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.PASSIVE,
	
	animSheet: new ig.AnimationSheet( 'media/player_32x32.png', 32, 32 ),
	sfxBounce: new ig.Sound('media/bounce1.mp3'),

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
     	bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
		this.body = ig.world.CreateBody(bodyDef);

    	// These two lines define the shape
    	// e.g. b2.PolygonDef, b2.CircleDef
    	var fixture = new Box2D.Dynamics.b2FixtureDef;
		fixture.shape = new Box2D.Collision.Shapes.b2CircleShape(16 * Box2D.SCALE);
        
    	fixture.density = 0.5;
		fixture.friction = 1;
		fixture.restitution = 0.3;

		this.body.CreateFixture(fixture);  
	},
	
	reload: function(){
		gameState = 0;
		this.body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(0, 0));
		this.body.SetAngularVelocity(0);
		this.body.SetAngle(0);
		this.body.SetPosition(new Box2D.Common.Math.b2Vec2((xstart + 16) * Box2D.SCALE, (ystart + 16) * Box2D.SCALE));
	},
	update: function() {
		if (gameState == 1 ){
			var gravity = new Box2D.Common.Math.b2Vec2(0, 9001 * Box2D.SCALE );
			this.body.ApplyForce(gravity, this.body.GetPosition());
		}if (ig.input.pressed('next')) {
				ig.global.gameState += ig.global.levelON + 1;
				this.kill();
		}
		if( ig.input.pressed('reload')){
			this.reload();
		}
		this.parent();

	}

	
});


});