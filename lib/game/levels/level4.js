ig.module( 'game.levels.level4' )
.requires( 'impact.image','game.entities.crate','game.entities.menubar','game.entities.starmeter','game.entities.finishFlag','game.entities.lazerv','game.entities.star','game.entities.instructions2','game.entities.quit' )
.defines(function(){
LevelLevel4=/*JSON[*/{"entities":[{"type":"EntityCrate","x":112,"y":64},{"type":"EntityMenubar","x":0,"y":0},{"type":"EntityStarmeter","x":700,"y":5},{"type":"EntityFinishFlag","x":920,"y":500},{"type":"EntityLazerv","x":296,"y":128},{"type":"EntityStar","x":740,"y":392},{"type":"EntityStar","x":468,"y":144},{"type":"EntityStar","x":284,"y":344},{"type":"EntityInstructions2","x":480,"y":56},{"type":"EntityQuit","x":984,"y":4}],"layer":[{"name":"Background","width":16,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/background.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]]},{"name":"SceneryB","width":32,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"media/SceneSprites.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[218,0,0,0,0,0,0,0,218,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,153,154,155,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,169,170,171,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,187,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,187,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,203,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"collision","width":32,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"Scenery","width":32,"height":20,"linkWithCollision":true,"visible":1,"tilesetName":"media/SceneSprites.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":true,"data":[[0,0,0,0,241,242,243,244,0,252,253,254,255,256,0,0,0,0,0,0,0,0,0,0,0,119,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[218,0,0,0,0,0,0,0,218,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[218,218,0,0,0,0,0,0,218,231,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[218,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[99,99,98,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[41,42,99,218,218,45,46,46,48,232,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[57,58,98,218,218,45,46,48,80,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[223,223,223,223,223,223,223,223,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[98,9,10,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[98,25,26,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[47,47,48,218,0,0,0,0,0,0,0,0,0,218,45,46,46,46,46,48,218,0,0,0,0,0,0,0,0,0,0,0],[218,218,218,218,0,0,0,0,0,0,0,0,0,218,218,218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,218],[218,218,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,0,0,218],[218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,218,218,218,218,218,218],[218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,218,218,9,10,99,218,218],[218,218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,218,218,218,25,26,99,218,218],[218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218,218]]},{"name":"Grass","width":16,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/SceneSprites.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":true,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[42,43,42,43,43,43,42,43,42,42,42,42,43,42,43,42]]}]}/*]JSON*/;
LevelLevel4Resources=[new ig.Image('media/background.png'), new ig.Image('media/SceneSprites.png'), new ig.Image('media/SceneSprites.png'), new ig.Image('media/SceneSprites.png')];
});