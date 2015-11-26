ig.module(
	'game.entities.pointer'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPointer = ig.Entity.extend({
    checkAgainst: ig.Entity.TYPE.B,
    size: {x:1, y:1},
    isClicking: false,
    
    update: function() {
        // Update the position to follow the mouse cursor. You
        // may also have to account for ig.game.screen.x/y here 
        this.pos.x = ig.input.mouse.x-14;
        this.pos.y = ig.input.mouse.y-15;
        
        // Only check for the click once per frame, instead of
        // for each entity it touches in the 'check' function
        this.isClicking = ig.input.pressed('click');
    },
    
    check: function( other ) {
        // User is clicking and the 'other' entity has 
        // a 'clicked' function?
        if( 
            this.isClicking && 
            typeof(other.clicked) == 'function' 
        ) {
            other.clicked();
        }
    }
});

});