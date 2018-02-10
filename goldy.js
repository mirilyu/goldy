(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"goldy_atlas_", frames: [[695,1156,153,107],[0,0,960,672],[962,0,32,32],[0,674,693,636],[852,1143,148,148],[0,1312,396,305],[695,674,245,317],[695,993,155,161],[852,993,148,148]]}
];


// symbols:



(lib.arrowaiAssets = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cavern = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ComboBox = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.confettiaiAssets = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.correctaiAssets = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.goldForAnimationaiAssets = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pickaxeaiAssets = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.stoneaiAssets = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wrongaiAssets = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.confettiaiAssets();
	this.instance.parent = this;
	this.instance.setTransform(107.2,0,0.155,0.155,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,107.2,98.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldForAnimationaiAssets();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.257,0.257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,101.8,78.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pickaxeaiAssets();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.306,0.306);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,75,97.1), null);


(lib.stoneOption = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stone.ai
	this.optionText = new cjs.Text("", "12px 'Heebo'", "#009933");
	this.optionText.name = "optionText";
	this.optionText.textAlign = "center";
	this.optionText.lineHeight = 20;
	this.optionText.lineWidth = 85;
	this.optionText.parent = this;
	this.optionText.setTransform(95.1,60.6,1.718,1.561);

	this.instance = new lib.stoneaiAssets();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.393,1.393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.optionText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stoneOption, new cjs.Rectangle(0,0,216,224.3), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AhWOVQAAgHAEgeQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgDg3AAgbQAAgZAEgUQgHgPAVgaQADgEAEgBQgOgYgEghQgEgcAEhGQAHhcACgvQACg0gDgpIgGABQgFgBgBgFIAAgaQABgMAGgLQACgDADgCIgGgOQgHgWAAgoIADhUQADg1gBggQAAgcAEhfQAEhNgEgvIgIhkQgHgLACgSQAAgEADgDQgCggABgdIACAIIgEggQgBgGAFgEIABgKQABgIAKgEQAFgDADACQAAg4gIg1IgFghQgBgIAKgGIACgBQgIgdAAgkQgEgCAAgGIgBhDQAAgUACgQIAAgCQgCgEADgEIADgRQgCgKADgMQABgHAGgEIAAAAQgJgTgNghQgEgIAKgHQAKgHADAJQASAsAIAPQASAfAaAOQAHAEgEAIQgEAHgGACQgQAEgNgBQADgBADgDQAEgFAAgEIgCgBIgCABIABgCIgFgEIgNARQgGgLACgHIgBAAIAAAGIACALQAGADAIAAIgFABIgJAAIAIArQABAIgJAGIgEACIgBAZQgDBLAeAsQAEAEgFAHQgEAFgFABIgNACQAMBdgNBpQACAEAEACQAEACARACIA1ADQAiABAUADQAKABgDAKQgEAJgIABQgRADgjAAQgagBgNACQgYADAOASQAFAHgFAGQgFAHgHAAIgLAAIgBAaIAAAEIAAACQAAAIgKAEIgBAAIADAbQAEAsgBA0IgFBhQgCAaABA7QABA4gDAeQgFBAABAPQADAuAcAVQADACAAAEQgBAEgCACQgJANgKAKQADAigCArIgGB2QgBAkgEBPQADBFAkAiQAFAFgDAGQgDAFgFADIgFACQATADAOABQAIABgCAJQgDAJgFACQgkANgZgJIAAABQgCAPABAdIAFgCQAKgBgCAKIgBAEQALAtAngJQAJAAgBAJQgBAJgHADIgDAAIAAABIAAAAQgRAFgRABQgLABgNgBIgCAOQAAAsA0gOQALgDgCALQgDALgIACQgRAFgNAAQgkAAgEglgAg4LTIABADIAGgEIgEgGIgDAHgAgpluIADgCIgDAAIAAACg");
	this.shape.setTransform(9,95.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,18.2,190.7), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AAJO0QgJgDAHgKQAHgKAIACQAvANgBgtIgDgNQgRACgNgBQgSgBgRgGQgJgDAGgJQAFgKAHABIACAAQAiAIAJgoIgBgCQgBgIAJgGIAGgCIAAgKQAAgSgDgQQgdAMgjgOQgIgDAFgJQADgJAGAAIAZgCIgGgEQgEgCAAgGQAAgFAEgDQAkgjAChDIgFhzIgGh0QgCgsADgjQgLgKgKgOQgCgDACgFQADgFADgCQAdgVAAg2IgIhVQgBgYABg8QACg1gEgfQgHhEALiKIAAgEIgDABQgKACAAgLIAAgEIABggIgCAAQgJABgKAAQgHgBAAgGQAAgGAEgFQAPgSgZgFQgEgBgigBQgrAAgRgCQgJgCADgJQADgJAIgCQAVgDA2gCQAggBAXgEQgOhqAOhhIgTgDQgFgBgBgFQgCgEADgFQAfgqgEhLIgBggIgEABQgJACABgKQAGgcACgVIgRAAIgEgBQgMABgQgEQgHgDACgIQACgHAGgDQAZgNAQgeQAHgMASgsQADgJALAAQAKAAgEALQgOAjgLAVIADAAQAFABABAFQADANgCAKIADASIABABQABAEgBAEIACAkQAAAXgBAuQgBAFgEADQABAogLAfIAFgCQAKgDAAALQgBATgFAPQgJA6ACA+QACgCAFgDQAKgEABAKIABAMQAEABAAAHIgCAUIAAAEQABAdgBAiQACABAAAEQACASgHANIgIBiQgEAvAEBKQAEBgAAAZQAAAeACA6QADA9AAAcQABAjgIAYQgDAKgEAIQAEAAADAEQAGAKABAMIgBAYQAAAFgGAFQgDACgDABQgDAoACAwQACAwAHBfQAEBBgFAfQgHAtgZAeIAGADIAAgBQgDgHAIgIQAIgIAFAHQAVAagIAPQADATAAAWQAAAbgDA3IgCAGQADAdgBALQgGAngnAAQgNAAgSgFgAAplyIAEACIAEgDIgIABg");
	this.shape.setTransform(9.1,95.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0.1,18.2,190.5), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AgmCBQgKhJgEgkIgCgXIAAgHIAAgIQgBgnAGgfIgaAAIgBAHQgCAHAAAMIAAAHIAAAMQAAAJgMAAQgMAAAAgJIgCgKQgEgDABgFIAAgFIAAAAIgCgPIgBgFIAEgBIAAAAIAAgCIAAAAIgEABIAAACQgFACgFgBIAKgDQgBgGABgFIgUABIgFAAQAGALAJACIgDAAQgNAAgCgNIADAAIgDgIIAAAIIgwgEIhcgDQgEAEgGAAIgogBQgRAGgMARQgDAEgGABQgGABgEgEQgagZgwgFQgdgDg1AEQgMABACgJQACgJALgBQA4gFAiAFQAcADAWAKQAWgIAbgBIAGAAQAVgHAYAFIAxABIBcABIATABIABAAIAFAAQAPgEAZgBQAGgBADAFQARgLAbACQAJAAACAHIAAADIAUABQAZgKAXAAQAzgJBCAEQAoABBNAKIAVAAQBBgCCkAAQALAAgBAJQgCAJgLAAQiGAAg7ACIgoABIgGACIgdABIgBADQgEAJgJAAQg5AChYgCQgqAFgKADQghAJgRAUQAIAlgYA5IAAAAIABAJQAEAzgEAXQgBAIgLABIgEAAQgHAAgBgGg");
	this.shape.setTransform(54.3,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,108.6,27.1), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AkyBBQgHgCgBgIQgEgdAFgOIAEgGIAAgKQgOgLgWgGIgFAAQhDAHgjABQgbABgXgCQgHADgGAFIAAAAQgKAOgIAKQgCADgFgBQgDgBgDgDQgVgag1gGQgYgDg9ACIhCAEIhCADQgJAAAAgMQgBgMAKAAQArgBB2gLQBFgBApAVIgCgHQgBgMAIgCIADgBIAEABIACgBQBugSB1ADQB0ACBvAWQAFABACAEQALgGAOgEQAVgGAvgEQBLgGCMAIIBBACQArgJA4ACQAqACBVAHQDBAICGABIADAAQAHAAACAMQABAMgIAAQhJAChngDIiwgHIhvAAQg5AAgngCIgVAGQgIACgDgKIhcgEQg+gDgvACQhDACgPADQgTACgOAFQACAIgFAEQgTAQgLAEQgQAHgRgLQgVgOgKgFQgPgJgWAAQgSABgZADIggAEIABAGQACAHgGAFIgPAnIgCANQgCAHgFAAIgDAAgAoUgaIAGAAIADgCQAIgGALgFQgZgBgSgHIAAAGIAAABIAHAOIAEgBIAEABg");
	this.shape.setTransform(84.7,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,169.4,13), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AThA9QgHAAgBgJQgCgRAFgTIgBgEQgCgIgJgEQhHAMhJABQhdAChRgPQgHgBgBgIQgHgCABgKQAAgEACgDQhBgHgpAAQh1AAgzBDQgDAEgFgBQgFgCgBgFQgHgaAKgRIAAAAQh6AWh8ABQh2ABhqgTQhGAGhoAAIhGABIgwAEQhMANg4gBQgGgBgCgHQgzgCgvgHQgIgCgBgKQAAgGACgDIk4ABQniADkcgPQgJAAABgMQAAgNAJABQEdAPHhgDQGKgDDZACQBCgEAoACQAFAAACADIApABQAIABABALIgBAGIAJgBIAAgGQACgLAIAAIBlAAQA6AAArAFQAJABgBAMQAAALgKAAIgGAAQArADAtAAQCMgBCLgeQAJgCACAKQABAIgDAEQAyggBPgBQBEAACEARQAFAAACAFIAEAAIAkAAQBCgNAqgCQBQgEApAdIACACIAFgDIAEgFQAPgNAZAWIAJgDQAYgLANgFQAmgMBEgBQAJAAgBANQgBAMgJAAQgwAAgvAOQgXAIgtARQgCAJgIAEQgEADgEgDIgDgEQgDABgDgCQgDgCgBgDIgCgHIgBACQgHAHgDAIQABASgDAPQgBAHgHAAIgBAAg");
	this.shape.setTransform(147.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0.1,0,295.5,12.3), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AHJAaQgGgBAAgFQgqgBgtgCIgDAAQgKABAAgJIABgEQhtgEhegBQjVAAi8AMQgEAFgGAAIgXAAIgagBIgFAAIAAABIgEgBIijgEQiWgEhHAAQgLAAAEgKQADgKAJAAQBIAACVAEICsAFIgEAAIASAAIgOAAQDVgSD3ABQB6ABCSAGQCAgSCbAGQAJAAgBAIQgBAHgHAEQgdAOgsAGIgMABIgFAAIgBACIgbACIgWAEQglAFggAAQgUAAgTgCg");
	this.shape.setTransform(71.3,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,142.6,5.6), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("ARvBfQhIgHhzABQh1ACgygBIg1gBQhSAMhigDQhYgDh6gSQg4AHgjADQhPAFg6gOQhBAChZgCIgJAAQg7AZhYgBQghAAh5gMQhZAAhCgNIh0gGIg1AFQiCANhNgIQgJgBAEgJIABgCQjeAHjfAAQgJAAAAgHIgnAHQhJANgbADQg5AFgjgHQgMgDgWgJIgNgGIgMACQgMABgZAGQgZAHgMACQgsAFg6gBQhbgBhQgMIgFgCIgLADQgdAGg5ADQhdAEhygOQgHgBABgIQgwAIgZgEQgJgBADgJIAEgGQgRAFgYAGQgLADAAgKQABgKAJgDQAggHASgHQAagJATgOQAIgFAHAEQAHAEgHAIQASgBAYAAQAGAAACAFQACAFgEAFIgKAIIAEAAQA/gNAjAIQAJACgEAIQgDAIgGACIgVAGQAmADAlAAQBHgBAVgDQA8gIATgdQAEgHAIABQAIABgBAJQgDARAuABQAZABAjgCQALAAgDAKQgEAKgJABIgFAAIAfABQA/AAAbgCQA0gGAigRQAGgEAEADQA5AoBrgRIBZgRQA0gKAfgBQAKgBgCAKIgCAEQDSgBDSgHIAEgBIANAAIADAAIAKAAIABAAIADgBQA2gHBEABICZAFQAvgDAaABQAHAAABADIC5gDQCFABBhAMIAEACQBLABAzgBQACgEAFgCQAhgOA+gEQBEgEAdgJQAJgDABAHQACAHgGAGQgVAUgoAJIgDABIAogCIAdgDIABgBQAEgKAIAAQBmgKBmgDQA8gEAvAAQAcAAAaACIBBABQAKABgBAGIAPADIBTAAIAfgHQBEgNAvAKQAKACgFAJIAAABICSACIAIABIAJgBQAEAAACABIBEACIA5gDQCBgIBbgDIAWgCQAXgBAgAAQA5gBAkABQAHABABAEIBpAJIAmADIAhgJIABgCQAFgJAHgBIAIgCIACgBQANgGALgKQAGgFAHADIACgFIACgUQABgHAIgEQAJgDADAHQAJAYgJARQACAKAFAGIAvgBIAYgBQARgJASgOQgCgMAAgOQABgkAQgvQADgGAJgCQAJgCAAAJQABAgAIAxIAIAxIABABIALAAIAFABQAGgLgDgOIAAgDQgBgHAJgEQAJgFAEAIQAPAcgPATIApgCQAwgCAhAFQAJACgDAJIgBADQAkABAdADQAJABgEAKIgCAEIA/gBQALAAgDAKQgDALgKAAIheABQg2gBgogFQgIgBACgGIhPgGQgKgBAFgKIABgCIAAgBIgCAAIgBABQgJAFgLADQgEABgDgCQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQgUAEgaACQgoADhFgBIgJAAIgEABIg7AAQgFAAgCgDIgjgCIgDAAIgJgBIgLgBIhIgGQgDAIgJAAIhqAAIgBAAIgcADIgCAGQgGAKgIgBQhIgIgwAEQgLAAADgKIgdABQgEAAgCgCQg5AbhOAAQglAAhmgLgASTBNIBKAIQA7AEAugKIiBgEIgyACgAGuBDIASABIABgBIgWAAIADAAgAdbA6IgDABIAHgBIgDAAIgBAAgAeAA4IgEABIAcABIgDgCIgLAAIgKAAgEgk3AA4IACgBIgCAAgEgkrAAzIAPgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAgBIgMAFgAdlAeIAEAAIABgBIgFgBgEAgigASIAAAQIAEAAIABAAIgCgIIgCgTIgBALg");
	this.shape.setTransform(242.3,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,484.5,21.3), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AgyAKQgEgLAJgDQAqgNAsgBQAJAAACAMQABALgKAAQgrABgmANIgDAAQgGAAgDgJg");
	this.shape.setTransform(5.2,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,10.4,3.8), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AAfARQgSgSguAEQgJABgDgKQgDgMAJgBQA3gHAbAbQAHAIgFAIQgDAFgDAAQgEAAgEgFg");
	this.shape.setTransform(4.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,9.5,4.3), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("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");
	this.shape.setTransform(244.4,60.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,488.8,121.1), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("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");
	this.shape.setTransform(243,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,486,79.9), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AjECFQhZgNhMgdQgFgCAAgIQABgGAEgEQA6gyAegXQA0gpAugSQAsgRBlgVQBfgVAxgVQAKgEACALQABALgIADQgvAUhKARQhsAZgRAFQg7AQg8AqQgfAXg5AvQB2ApCaADQAqABBNgQIggABQhdABgYgCQhIgFgogaQgkgWAHggQAGgeAlgRQAZgLAjgHIA+gKQAcgEAkgLIA+gTQAjgKAZgEQACgKAKAAQAIAAgBAIQAngDAgAPQAeAOAcAdQARAQAfAmQAPATAhAlQARAdgyAMQgiAJg+gDQhEgCgdAFQgSADg/AQQgyANggABIglABQhCAAhCgKgAEpATQAIAYgIAUQgFAMgJAJQANAAAMgCQAmgHABgCQABgCgcgdIgXgYIAAABgAA6hCQgpAMg0ALIheAUQgoAIgQAHQglAPAKAZQAFAPAVAKQAMAFAXAGQBGASBsgDIC0gFQAhABAWgMQAbgQgOgeQgPgdgZgKQgggOhFADIgSABIgGASQAegFASACQAjACAVAXQAEAFgCAHQgDAIgGABQiEAbiogbQgIgBABgJQABgIAGgEQA7gqBYgQQAagEAYgCIAHgbQgVAEggAKgAg7AOQCEARBpgQQgMgFgPgBQgTgBglAHQgGABgCgFQgCgGACgFIAKgaQheAHg+AhgADzgoQgZgXgagLQgbgLgiADIgHAcQAvgCAsAIQAPACANAGIAAAAg");
	this.shape.setTransform(36.7,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,73.4,28.7), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("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AbgaAIQgmAMgrgGQgogGgmgUQgMgGgUgRQgVgQgMgGQgVgKgggCIg2AAQgmAAg7gHQhPgLgTgBQhIgHgqASQgMAGgSAMIgdAUQghAVgmADQghACgqgLQhGgXglgHQhBgMgpAYIAOAHIADgCQAjgfBGAhQAWAKARAMQANgEAQAGQAhAMgQAwQgCAGgFABQgGACgDgGQgKgVgZgTIgCABQgDACgCADIgFAGQgKAMgGAFQgVASgrAAQgeAAgagKQgfgNgNgXQgJgSAEgTIADgKQhAgfgxgFQh3gKiMAOQgfADgrAAIhLgBQgkAAgNADQgfAHAJAZQADAHANAPQALANACALQABAGgCAFQgCAFgFABQgyAPgTglQgPgeARgkQgPgLgYgDQgMArg0gLIgtgOIgDAFIADAPQAHAbAUAJQAHADgCAKQgBAKgHABQgwAIAIBoQAFA3ASBSIASBhQAEAugLAbQAOADANABIAugDQAKgBAAALQAAAMgJACIAAAAIggACIgOACIgQADQgSACgHAEQgLAGAGAWQABACAGAEIAHAGQASAYADAHQAGAOAAAZQgBAcgGAxQgIA2gBAWQgDA8gDB2QgJEEAABuIABC8IAABfIgCApQADAXAXAHQAIACgBAKQAAAKgIACQgwALASAeQAKATATAIIAfgFIA7gIQCIgYA4gGQAJgBAAAMQABALgJACIhVAVQg1AOggAGQguAIgSABQghACgWgIIgKABQgZAEgFAIQgQAZA1AGQAbADApgCQBKAFAqgFQA4gHA2gdIAjgWQAVgOAPgFQATgHAoAAQAnAAATgHQAIgDACAMQABAMgHADIgvASQgbALgSAJQgIAFgJADQgCACALAEQALAEARACIAeADQBDAGBigCICmgGIACAAQAfAACeAKgAUvsoIhgAEQAeAMAjABIBbAEQApgCAXgPQgXgEgcgBIgMAAIg9ABgAMLtOQgYAEgWACIAXAGQApAJBZAFQA2ADBCgBQhFgFg5gJQgugHghgMIgWAFgA4qthQAIATAaALQAWAKAbABQAeABATgLQAMgHAPgRQgcgRgcgGQgTgEgRACIgJABQAeAQAWAIQAHACgCAKQgCAKgGABQgfAHgigUQgVgMAAgOIgVgKQgEAJAEAKgARzthIARANIATAPIAGAAQAygCAmgNQgggLgqgCIgZgBIgfABgANStfQAqAKA1AFQAmAEBPAEIBMADIgigaIgNABIhUAGQguADgmgGIg6gHIgBAAIgOADgEgingOPQgSAfAOAUQAMAQAYgDIgIgNIgSgbQgJgOAEgMIgBACgAKBuuQgFAEACAQQABAJAIAOQANAVAXAQQAkACAsgHIACgBQgNgHgMgIQgXgGgMgKQgOgMACgLQgTgQgOgEQgIgCgFAAQgEAAgCACgAPPt7QgMACgqAKQA8AGApgFIAtgGQgZgJghAAQgQAAgSACg");
	this.shape.setTransform(244.5,98.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,489,197), null);


(lib.playagain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("שחקו שוב", "18px 'Heebo Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 109;
	this.text.parent = this;
	this.text.setTransform(-2.5,-14.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().rr(-75,-30,150,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:0,y:0}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.5,y:-14.9}}]}).to({state:[{t:this.shape,p:{scaleX:1.043,scaleY:1.043,x:-3.2,y:-1.3}},{t:this.text,p:{scaleX:1.043,scaleY:1.043,x:-5.9,y:-16.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-30,150,60);


(lib.goToInstructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("איך משחקים", "16px 'Heebo'", "#003399");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.parent = this;
	this.text.setTransform(0,-11.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003399").p("Am6AAIN1AA");
	this.shape.setTransform(0,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{font:"16px 'Heebo'",lineWidth:85}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"bold 16px 'Heebo'",lineWidth:90}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-13.7,90.6,27.5);


(lib.goToAbout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אודות", "16px 'Heebo'", "#003399");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.parent = this;
	this.text.setTransform(0,-11.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003399").p("Ai5AAIFzAA");
	this.shape.setTransform(0.4,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003399").p("AjOAAIGdAA");
	this.shape_1.setTransform(0,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{font:"16px 'Heebo'",lineWidth:38}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{font:"bold 16px 'Heebo'",lineWidth:41}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-13.7,42.2,27.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("בחר", "16px 'Heebo Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(50,8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4CAF50").s().p("Am3DIQg8AAAAg8IAAkXQAAg8A8AAINvAAQA8AAAAA8IAAEXQAAA8g8AAg");
	this.shape.setTransform(50,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,100,40), null);


(lib.answerModal__btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("המשך", "14px 'Heebo Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-10.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().rr(-32.5,-12.5,65,25,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}},{t:this.text,p:{scaleX:1,scaleY:1,y:-10.4}}]}).to({state:[{t:this.shape,p:{scaleX:1.028,scaleY:1.028}},{t:this.text,p:{scaleX:1.028,scaleY:1.028,y:-10.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-12.5,104,25);


(lib.modal_btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("לחזור לבחירת נושא", "16px 'Heebo Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 213;
	this.text.parent = this;
	this.text.setTransform(0,-11.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("EglfADSIAAmjMBK/AAAIAAGjg");
	this.shape.setTransform(0,-0.3);

	this.instance = new lib.arrowaiAssets();
	this.instance.parent = this;
	this.instance.setTransform(-72.7,7.6,0.146,0.146,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-21.3,480,42.1);


(lib.modal_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("המשך", "20px 'Heebo Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-14.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4CAF50").s().rr(-50,-20,100,40,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}},{t:this.text,p:{scaleX:1,scaleY:1,y:-14.6}}]}).to({state:[{t:this.shape,p:{scaleX:1.036,scaleY:1.036}},{t:this.text,p:{scaleX:1.036,scaleY:1.036,y:-15.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-20,104,40);


(lib.answerModal__iconwrong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wrongaiAssets();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15,0.203,0.203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.answerModal__iconwrong, new cjs.Rectangle(-15,-15,30,30), null);


(lib.correctai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.correctaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,148);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.answerModal__overlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhK/ArwMAAAhXfMCV/AAAMAAABXfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.answerModal__overlay, new cjs.Rectangle(-480,-280,960,560), null);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoSGCIlVsDIbPAAIlVMDg");
	this.shape.setTransform(87.2,38.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,174.4,77.2), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A5D3B").s().p("AoeBOIDViiIKUAEIDUClg");
	this.shape.setTransform(54.3,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,108.6,16.9), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbCBQgmg1AAhMQAAhKAmg2QAng1A0AAQA2AAAmA1QAlA2ABBKQgBBMglA1QgmA1g2AAQg0AAgng1g");
	this.shape.setTransform(13,18.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,25.9,36.5), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE76F").s().p("AAMDuQhagKgngBQhzgEhBAAQhVABhGAEIgVACIgFAAQgbACAEgiQAFgjAagCIALgBIAagCIAsgFQAvgJAWgbIAfgoQASgSAZgIQAtgNBTAJQBbAKAkgGQAbgEgEAjQgDAUgJAJIAIABQAVADA8ALIAhAFQAbgPASgCQAigGA1AMQBKARANABQAQACATgBQgNgIgPgPQgagaglgcIgJgDQgwgTglgIQgsgJgtADIhLAJQguAHgcAAQgxAChQgUIgsgKQgZgFgUABQgTAAgSAIIghARQglAUg8gBQh/gBhWgxQgxgbgYgrQgeg1ArglQARgOAXgCQAOgBAeAEQAeAFAIgBQASgBAPgRIAMgQQAHgKAFgFQAogmA/AYQAjANBAAoQA3AdA4gSQAIgCBggvQAzgZArAKQAnAIAtAoQAwApBJAzIB8BWIAEACQAbAJAhACQAVACAtABQA2ADAkApQALAMAGANQApgCAUACQA6AIAQAnQAPAigaAVQgWASgjAAQgPAAgdgEQgegEgOAAQgMgBgOACIgEABQgYAKgtAFQgqAEg1gBIhfgFIhbgGIgYgCIgMAIQgnAchGAAIgNAAgAi2CbQgBgLAIgPQAFgJAFgGQgegCgHAAQgsABgUAUIgRAVQAxgBA0ACIAAAAgAHdBZQgRgGgKAAIgNAAIAFACQAOAEAVAAIAAAAgAp9hbIASARQASAOAfAOQA3AXA6AIQBFAKAugQQAXgIAjgSQAegNAgACQAaACAlAJIA/AOQA1ALBbgLQBEgJAqgBIgRgNQhThBgggWQgpgegzATQg8AhgeAOQgyAYgvgEQgsgEgzgdQgqgcgYgKQgtgTgYAWIgbAgQgQATgTAGQgLADhggJIAPANg");
	this.shape.setTransform(71.1,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,142.3,47.7), null);


(lib.Path_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC63B").s().p("ACLBtQhbAAj4gEQjWgDh+ABIiIAAQhNgCg7gFQhPgIACg7QAAgJAHACQAHABgBAIQgBArBYAJQAvAFBJgDQA5ABBhAAICZgBIETAEIETADQDIABBUgEIBTgFQAzgEAfAAQB9AAAOgCQBpgLgFgyQgEgjg5gVQgXgJg/gNIhAgNQglgIgZgKQgGgCABgJQABgIAHADQAhANCKAYQB3AggGBFQgFAzhYANQgYADhnAAQgpAAhHAFIhvAGQhAAChaAAIiagBg");
	this.shape_1.setTransform(89,11);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14_1, new cjs.Rectangle(0,0,178.1,22), null);


(lib.Path_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC63B").s().p("ANUD3ImhgMQmWgLnLAKQhIACiHgCQiNgChBABQhAABgXgvQgPggAAhNQAAgGAJgCQAIgCAAAHQAABEAKAbQAQAwA1ABIBXABQA4gBAgABQBTADB9gCIDQgDQHRgEEPAIIFsALQAnABASgHQAbgKADghQABgRgFgVQgFgTgJgQQgbgvhUghQg5gWhKgOQgzgLhTgLQhYgNglgKQhDgTgsgoIglggQgWgRgVgIQgOgGgWgCQgcgCgJgCIgMgCQgHgCgBgGQgBgKAigOQAWgKgkgKQgIgCAFgHQAEgGAHABIAYAIQAMAHgCANQgCAIgOAHIgUAKIgGAEQAHgDAGABIAZABQAiADAcAOQARAIATARIAhAeQAtAoA6APQA1ANBuARQBsAQA2APQBLATAoAXQA9AiATA2QAXBAgfAjQgNAOgWAEQgLACgWAAIgJAAg");
	this.shape_1.setTransform(94.6,24.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13_1, new cjs.Rectangle(0,0,189.3,49.4), null);


(lib.Path_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC63B").s().p("AIABAQgkgMhegoQhRghgygPQhSgYhPAMIg9ALQglAHgXACQgqAEhNgLQgngFgpACQggACgvAJQgYAFghABIg6ABQgWABgYALQgOAHgdAPQgHAEgDgGQgCgGAHgEIAjgUQAWgMAQgDQAWgDAuAAQAsAAAYgEIA+gLQAigFAdACIBGAJQApAGAdgCICLgTQBRgLA7APQA5APBWAkQByAvAbAJQAIADgFAGQgCAFgFAAIgDgBg");
	this.shape_1.setTransform(52.4,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_1, new cjs.Rectangle(0,0.1,104.8,13), null);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC63B").s().p("AkHAwQgGgFAHgFQAYgSAuACQA1ADAWgLQAOgGAjgdQAdgXAZgEQAZgFAmAKIA+ASQAaAHA0AJQAtAJAdARQAHADgGAGQgGAFgGgEQgcgQgtgJQgygIgagGQgygQgagEQgrgIgfATQgKAGgcAXQgXATgSAGQgQAGgxgDQgpgDgUAPQgDADgCAAQgDAAgDgDg");
	this.shape_1.setTransform(26.7,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,53.5,10.1), null);


(lib.Path_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC63B").s().p("ADNA5QhDgBh3gaIirgqQhXgWgXgDQhEgJgqAWQgHADgCgIQgCgIAFgDQAkgTA0ADQAfABA6ANQAkAIAzANIBWAVQCMAjBCAFQB/AHBFg7QAGgEACAIQACAIgEADQg/A2hsAAIgEAAg");
	this.shape_1.setTransform(38.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,76.6,11.5), null);


(lib.Path_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFDB39").ss(0.7).p("AEHCHQAmACAwARQAXAHALAGQAFACAfgEQAtgGA9gLQAwgDAzAbQASAHAjAQQAfAKAWgJQgMgIgpgpQgigigWgJQgfgLgcATQgiAYgUAAQgJAAgUgQQgVgSgKgBQgLgFgSAAQgTABgJAAQg5gFgTAHQgQAFgkAfgAFYgBQAUgBAGABQATADAQALQASANAOAEQAbALBJgCQBEgDAeATQhuAFhoggQgogNglgQQg6gbgygoQADAGgBAXQgBAUAGAIQAOANAsgCQAagBARAAgACyhrQgRgKgSgIQgtgUg8gLQgvgMgRAAQgXgCghAVQgDACgnAdQgZATgVAKQghgyg0gLQg3gNgsAnQAAABgeAnQgRAYgXAGQgJADglgBQgXgBgXAVQgCgOgJgSQgHgNAEgQQAHgUAigaQAhgaAYgFQAPgCAWAFQAVAFAKgBQAKgDAagPQAYgOARgEQAhgEAlANQAyASAPACQAaACAagJQAQgGAigMQAkgMA3AFQBEAGAYgDQAKgBA2gOQAngKAfAIQAUAFAbAQQAdARANAPQAHAHAFAWQAFAWAHAFQAVAWBFAJQBFAJAZAcAD7CGQg3g0hKghQhngtg3AsQgLAKgIAhQgIAfgPAHQgVAKgygjQg2gmgQAAQgSABgiAVQggAUgWAAQgTgCgqgZQgpgYgWgCQgXgCgHACQgLAHgQAHQgTAHgsAZQgpAXgXAFIg4gBQgggBgLAXQgQhCBJgqQA3ghBLgHQA5gFCNgWQATgCApABQAgABAVgEQAWgDAogNQAigGAZAWQAPg6AogaQAngZBHAAQAtADA1ARQAPAFANAGQArARAPAWQgcgWgegRApuDhQAEghAwgMQAigIAsADQAJACAVAIQATAIALAAQAPgCAagMQAagNALgBQAjgKAvARQAvARAbgHQAqgMA1gSQApgIA+AVQAwAOA/gRQBagYAYgCQAMgCAOAAQAGAAAGABQgDACgDADQgDgDgDgD");
	this.shape_1.setTransform(73.9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(-0.6,-0.6,148.6,46.6), null);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.7).p("AtJE4QDXAADAgLQEogRBlgmQAzgVgIgjQgGgVgmgrQgogrgEgSQgIgfA1gPQAGgBBlgXQB7gaB0gPQFtgvC3BOQAoAQh0hmQh1hohDgiQgjgThEgSQhMgSghgLQg0gRi7AeQjLAhgngEQiSgPhnAoQh7A7hzAhQhIASgeAIQgxAMgcAPQhDAkgcBrQgNA2AFA2QAFA6AZAu");
	this.shape_1.setTransform(87.1,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtDEGQgZgugFg6QgFg2ANg2QAchrBDgkQAcgPAxgMIBmgaQBzghB7g7QBngoCSAPQAnAEDLghQC7geA0ARQAhALBMASQBEASAjATQBDAiB1BoQB0BmgogQQi3hOltAvQh0APh7AaIhrAYQg1APAIAfQAEASAoArQAmArAGAVQAIAjgzAVQhlAmkoARQjAALjXAAg");
	this.shape_2.setTransform(87.1,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(-0.6,-0.6,176.6,64.5), null);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AigG1IlmtRIQNgZIgRNqg");
	this.shape_1.setTransform(51.9,43.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,103.8,87.5), null);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjqB9Qgug3AzgoQAjgaBKgQIBYgVQAsgOAhgeQAoglA4gJQAbgEBSABQAJAAgDAHQgCAHgIgBIhFgCQgqABgbAKQgUAIgWAUIgmAiQgSANgYAIQgOAEghAGQhgARghAQQhOAjAxA6QAEAFgHAFQgEACgDAAQgDAAgCgCg");
	this.shape_1.setTransform(25.7,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0.1,51.4,25.5), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8A5D3B").ss(1.4).p("AAJAAQAAAEgCAEQgDADgEAAQgDAAgDgDQgCgEAAgEQAAgDACgDQADgEADAAQAEAAADAEQACADAAADg");
	this.shape_1.setTransform(1.7,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgGAIQgCgEAAgEQAAgDACgDQADgEADAAQAEAAADAEQACADAAADQAAAEgCAEQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(1.7,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(-4,-0.3,11.4,7.1), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8A5D3B").ss(1.4).p("AAJAAQAAAEgCAEQgDADgEAAQgDAAgDgDQgCgEAAgEQAAgDACgEQADgDADAAQAEAAADADQACAEAAADg");
	this.shape_1.setTransform(1.6,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgGAIQgCgEAAgEQAAgDACgEQADgDADAAQAEAAADADQACAEAAADQAAAEgCAEQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(1.6,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(-0.3,-0.3,3.9,4.2), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8A5D3B").ss(1.4).p("AAKAAQAAALgKAAQgDAAgDgEQgDgCAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEg");
	this.shape_1.setTransform(1.7,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgEADAAQAEAAADAEQACADABADQAAALgKAAQgDAAgDgEg");
	this.shape_2.setTransform(1.7,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(-0.3,-0.2,3.9,4.1), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8A5D3B").ss(1.4).p("AAKAAQAAAKgKAAQgDAAgDgCQgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEg");
	this.shape.setTransform(1.7,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgGAIQgCgDAAgFQAAgEACgDQADgCADAAQAEAAADACQACADABAEQAAAKgKAAQgDAAgDgCg");
	this.shape_1.setTransform(1.7,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(-0.3,-0.3,3.9,4.1), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhYCBQgkg1AAhMQAAhKAkg2QAlg1AzAAQA0AAAlA1QAkA2AABKQAABMgkA1QglA1g0AAQgzAAglg1g");
	this.shape_1.setTransform(12.5,18.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,25.1,36.5), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjpB9Qgvg3A0gnQAigaBKgRIBYgUQAsgPAhgdQApglA3gKQAdgEBRABQAIAAgDAHQgCAHgHAAIhGgCQgpAAgbAKQgVAIgWAUIgmAiQgRANgZAIQgPAFggAGQhfARgiAPQhOAkAxA5QAFAGgIAEQgDACgDAAQgDAAgCgCg");
	this.shape.setTransform(25.6,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0.1,51.4,25.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkNAzQgYhBA7gUQAogOBJAJQAbAEA4ALQAxAGAggMIAugRQAagIAWAAQAeABAnAPQAXAIArATQAIADgFAGQgFAFgGgCQgqgSgWgIQgmgOgdgBQgXAAgdALIgxASQgUAGgZgCQgPgBgggFQhhgRgkACQhVAEAZBGQACAGgIADIgFACQgEAAgBgFg");
	this.shape.setTransform(27.7,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0.1,0,55.4,11.1), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE76F").ss(0.4).p("AlPA7QAnhTBtgwQBzgzByAcQAcAGAWAKQAUAJAWASQAQAOAGAIQADACAjADQBFAGAcAPQAlASAHAvQgZAFg7gKQg4gJgaAHQgUAEgnAYQgkAVgdADQgaABgngLQgtgQgXgGQhTgXgsAv");
	this.shape.setTransform(33.8,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBgQgugQgXgGQhTgXgsAvIh4gnQAnhTBtgwQBzgzByAcQAdAGAVAKQAUAJAWASQAQAOAGAIQAEACAiADQBFAGAdAPQAkASAIAvQgaAFg7gKQg4gJgZAHQgUAEgoAYQgjAVgdADIgGAAQgZAAgigKg");
	this.shape_1.setTransform(33.7,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.8,-0.8,69.1,23.2), null);


(lib.Path_14_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoBlQgQgBgMgKQgOgJgEgPQgIgOAAgRQACgeALgXQAMgZAXgYQAMgMAQgIQAbgNAWgBQAVgBARAMIAOAPQAQAVgHArQgEASgLAQQgIARgQAOIgGAFQgUAbgjAMQgKAEgKAAIgMgBg");
	this.shape_2.setTransform(9.5,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14_2, new cjs.Rectangle(0,0,18.9,20.4), null);


(lib.Path_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2D3A2").s().p("AglCDQgogDgdgbQgZgYgLghQgLgjAIggQAKgmAigUQAVgMAagEQgCgCgBgEQgDgMAJgDQA5gTA2ALQBCANASA2QARAxgoA0QghArg0AdQggARggAAIgJAAgAgdhjQAKAAABANQABAMgKAAQgrABgcATQghAXABAoQACAiAYAcQAXAcAiAGQAxAJA5gpQA3goANgwQARg/hJgTQgbgHgbAAQgXAAgXAFg");
	this.shape_2.setTransform(14.9,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2836E").s().p("Ag5BzQgxgOgWgzQgXgyAYgoQAbguBJAAIgUgUQAygTAxAJQAvAIAYAdQAZAfgMAoQgOAtg8AuQgvAkgrAAQgOAAgPgEg");
	this.shape_3.setTransform(14.9,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_2, new cjs.Rectangle(0,0,29.9,26.2), null);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEARQgEgEgCgHQgCgGgCgCQgHgIALgGQAKgHAFAHQAEAFACAGIAEAIQAHAIgLAGQgFAEgEAAQgDAAgDgEg");
	this.shape_3.setTransform(1.7,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,3.6,4.1), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAQIAAgdQAAgJALgBQAMgBAAAJIAAAdQAAAJgMABIgCAAQgJAAAAgIg");
	this.shape_3.setTransform(1.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,2.5,4.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2D3A2").s().p("AAUCDQglgEgkgZQgzgigZgrQgig2AbgvQAZgrA8gJQAygIAzASQAJADgBAMQgBAFgBACQAdAFAWAPQAlAYAFAtQAEAhgPAgQgPAhgbAUQgdAUgjAAIgMAAgAg/hkQhHAQAGA7QACAfAgAiQAYAaAjAVQApAYAmgFQAigFAYgbQAZgbADgiQAEgpgggYQgcgUgsgBQgKgBAAgMQgBgNAJABIAEAAQgZgGgZAAQgXAAgWAEg");
	this.shape_1.setTransform(14.9,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2836E").s().p("Ag9BTQg8gugOgtQgNgoAagfQAYgdAvgIQAxgJAyATIgUAUQBJAAAbAuQAXAogWAyQgWAzgyAOQgOAEgOAAQgrAAgvgkg");
	this.shape_2.setTransform(15,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,29.9,26.3), null);


(lib.finish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("סיום", "18px 'Heebo Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-1,-14.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().rr(-75,-30,150,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:0,y:0}},{t:this.text,p:{scaleX:1,scaleY:1,x:-1,y:-14.9}}]}).to({state:[{t:this.shape,p:{scaleX:1.043,scaleY:1.043,x:3.2,y:-1.2}},{t:this.text,p:{scaleX:1.043,scaleY:1.043,x:2.2,y:-16.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-30,150,60);


(lib.Path_12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("AJSABQAAD1ioCfQinCfkEAAQj8AAiqinQiqinAAj1QAAjzCmiaQCkiXD+AAQD9AACuCgQCwCiAADyg");
	this.shape_2.setTransform(60.4,57.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_2, new cjs.Rectangle(0,0,120.8,114.8), null);


(lib.cavernBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cavern();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cavernBg, new cjs.Rectangle(0,0,960,672), null);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6D6E70").ss(1.4).p("AgQAAQAAAWAFAQQAFAQAGAAQAHAAAEgQQAFgQAAgWQAAgVgFgQQgEgQgHAAQgGAAgFAQQgFAQAAAVg");
	this.shape_1.setTransform(-119,-106.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6D6E70").ss(1.4).p("AAPAAQAAAWgFAQQgEAQgGAAQgFAAgEgQQgFgQAAgWQAAgVAFgQQAEgQAFAAQAGAAAEAQQAFAQAAAVg");
	this.shape_2.setTransform(-119,-97.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6D6E70").ss(1.4).p("AAdAAQAAAcgJATQgIAUgMAAQgLAAgJgUQgIgTAAgcQAAgaAIgUQAJgUALAAQAMAAAIAUQAJAUAAAag");
	this.shape_3.setTransform(-119,-87.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6D6E70").ss(1.4).p("AgPAAQAAAWAFAQQAEAQAGAAQAHAAAFgQQAEgQAAgWQAAgVgEgQQgFgQgHAAQgGAAgEAQQgFAQAAAVg");
	this.shape_4.setTransform(118.4,-107.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#6D6E70").ss(1.4).p("AAOAAQAAAWgDAQQgFAQgGAAQgFAAgEgQQgEgQAAgWQAAgVAEgQQAEgQAFAAQAGAAAFAQQADAQAAAVg");
	this.shape_5.setTransform(118.4,-98.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#6D6E70").ss(1.4).p("AAdAAQAAAcgIATQgJAUgMAAQgLAAgIgUQgJgUAAgbQAAgbAJgTQAIgUALAAQAMAAAJAUQAIATAAAbg");
	this.shape_6.setTransform(118.4,-88.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#896340").s().p("AgSPiIAD/DIAiAAIgDfDg");
	this.shape_7.setTransform(242.9,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8C6542").s().p("Egl4gAHMBLxgATIgCA0MhLvAABg");
	this.shape_8.setTransform(0.4,-84.2);

	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,13.8,1,1,0,0,0,244.5,98.5);
	this.instance.alpha = 0.039;

	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-89.6,-28.7,1,1,0,0,0,36.6,14.3);
	this.instance_1.alpha = 0.109;

	this.instance_2 = new lib.Path_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.4,-41.2,1,1,0,0,0,243,40);
	this.instance_2.alpha = 0.109;

	this.instance_3 = new lib.Path_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,49.6,1,1,0,0,0,244.3,60.5);
	this.instance_3.alpha = 0.109;

	this.instance_4 = new lib.Path_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-159.3,-78.8,1,1,0,0,0,4.7,2.1);
	this.instance_4.alpha = 0.328;

	this.instance_5 = new lib.Path_7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-218.9,-80.2,1,1,0,0,0,5.2,1.9);
	this.instance_5.alpha = 0.648;

	this.instance_6 = new lib.Path_8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.7,102.3,1,1,0,0,0,242.3,10.6);
	this.instance_6.alpha = 0.648;

	this.instance_7 = new lib.Path_9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80.6,-79.7,1,1,0,0,0,71.3,2.8);
	this.instance_7.alpha = 0.648;

	this.instance_8 = new lib.Path_10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(94.5,-76.9,1,1,0,0,0,147.8,6.1);
	this.instance_8.alpha = 0.648;

	this.instance_9 = new lib.Path_11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-51.6,-77.7,1,1,0,0,0,84.7,6.5);
	this.instance_9.alpha = 0.648;

	this.instance_10 = new lib.Path_12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-185.9,-68.3,1,1,0,0,0,54.3,13.6);
	this.instance_10.alpha = 0.648;

	this.instance_11 = new lib.Path_13();
	this.instance_11.parent = this;
	this.instance_11.setTransform(233.3,13.8,1,1,0,0,0,9.1,95.3);
	this.instance_11.alpha = 0.648;

	this.instance_12 = new lib.Path_14();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-232.2,13.7,1,1,0,0,0,9,95.3);
	this.instance_12.alpha = 0.648;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#A87C4F").ss(2.9).p("EAlpAPAMhLRAAAIAA9/MBLRAAAg");
	this.shape_9.setTransform(0.4,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CDB388").s().p("EgloAPAIAA9/MBLRAAAIAAd/g");
	this.shape_10.setTransform(0.4,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(-244.8,-113.9,489.6,226.9), null);


(lib.finalModal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.endGameBtn = new lib.finish();
	this.endGameBtn.parent = this;
	this.endGameBtn.setTransform(-175,363.3);
	new cjs.ButtonHelper(this.endGameBtn, 0, 1, 1);

	this.anotherGameBtn = new lib.playagain();
	this.anotherGameBtn.parent = this;
	this.anotherGameBtn.setTransform(175,363.3);
	new cjs.ButtonHelper(this.anotherGameBtn, 0, 1, 1);

	this.gameScore__text = new cjs.Text("", "16px 'Heebo'", "#333333");
	this.gameScore__text.name = "gameScore__text";
	this.gameScore__text.textAlign = "center";
	this.gameScore__text.lineHeight = 26;
	this.gameScore__text.lineWidth = 219;
	this.gameScore__text.parent = this;
	this.gameScore__text.setTransform(0,223.3);

	this.gameTime__text = new cjs.Text("", "16px 'Heebo'", "#333333");
	this.gameTime__text.name = "gameTime__text";
	this.gameTime__text.textAlign = "center";
	this.gameTime__text.lineHeight = 26;
	this.gameTime__text.lineWidth = 218;
	this.gameTime__text.parent = this;
	this.gameTime__text.setTransform(0,138.3);

	this.gameFinish__text = new cjs.Text("", "16px 'Heebo'", "#333333");
	this.gameFinish__text.name = "gameFinish__text";
	this.gameFinish__text.textAlign = "center";
	this.gameFinish__text.lineHeight = 26;
	this.gameFinish__text.lineWidth = 441;
	this.gameFinish__text.parent = this;
	this.gameFinish__text.setTransform(0,45.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-250,-125.65,500,251.3,8);
	this.shape.setTransform(0,159,1,1.266);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.gameFinish__text},{t:this.gameTime__text},{t:this.gameScore__text},{t:this.anotherGameBtn},{t:this.endGameBtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.finalModal, new cjs.Rectangle(-250,0,500.1,393.3), null);


(lib.questionBoard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// board.ai
	this.questionText = new cjs.Text("", "16px 'Heebo'", "#333333");
	this.questionText.name = "questionText";
	this.questionText.textAlign = "center";
	this.questionText.lineHeight = 26;
	this.questionText.lineWidth = 439;
	this.questionText.parent = this;
	this.questionText.setTransform(0,105.3);

	this.text = new cjs.Text("בחרו בתשובה הנכונה", "16px 'Heebo'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 160;
	this.text.parent = this;
	this.text.setTransform(0,250.3);

	this.instance = new lib.Symbol1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,172.6,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.questionText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.questionBoard, new cjs.Rectangle(-244.8,59.4,489.6,242), null);


(lib.pickaxe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(8.5,24.5,1,1,0,0,0,37.5,48.5);

	this.instance_1 = new lib.pickaxeaiAssets();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53.8,26.3,0.306,0.306,-53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:15.4},0).wait(1).to({rotation:28.4,y:24.6},0).wait(1).to({rotation:38.8},0).wait(1).to({rotation:46.9,y:24.5},0).wait(1).to({rotation:53},0).wait(1).to({rotation:55.5},0).wait(3).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-24,75,97.1);


(lib.modalWindow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.modalText = new cjs.Text("", "12px 'Heebo'", "#009933");
	this.modalText.name = "modalText";
	this.modalText.textAlign = "center";
	this.modalText.lineHeight = 20;
	this.modalText.lineWidth = 406;
	this.modalText.parent = this;
	this.modalText.setTransform(0,26.5);

	this.returnBtn = new lib.modal_btn2();
	this.returnBtn.parent = this;
	this.returnBtn.setTransform(0,250);
	new cjs.ButtonHelper(this.returnBtn, 0, 1, 1);

	this.continueBtn = new lib.modal_btn();
	this.continueBtn.parent = this;
	this.continueBtn.setTransform(0.1,183.8);
	new cjs.ButtonHelper(this.continueBtn, 0, 1, 1);

	this.text = new cjs.Text("בשביל להציל את הכפר עליכם לאסוף 10 מטילי זהב", "16px 'Heebo'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 293;
	this.text.parent = this;
	this.text.setTransform(0,105);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EglfASwMAAAglfMBK/AAAMAAAAlfg");
	this.shape.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text},{t:this.continueBtn},{t:this.returnBtn},{t:this.modalText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.modalWindow, new cjs.Rectangle(-240,0,480,270.7), null);


(lib.answerModal__iconcorrect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.correctai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.6,0.202,0.202,0,0,0,71.6,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.answerModal__iconcorrect, new cjs.Rectangle(-15,-14.9,30,30), null);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startbtn = new lib.Symbol1();
	this.startbtn.parent = this;
	this.startbtn.setTransform(-62.4,17.1,1.217,1,0,0,0,52.4,17.1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'בחר נושא', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, test, test, אזרחות, civil, מדעים, science', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(90.9,20,1.818,1.818,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-126.2,-0.9,308.9,41.8), null);


(lib.answerModal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnBG.ai
	this.instance = new lib.answerModal__btn();
	this.instance.parent = this;
	this.instance.setTransform(0,362.4,1.173,1.173);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.answerModal__iconwrong();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-124.4,273.9);

	this.instance_2 = new lib.answerModal__iconcorrect();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-124.4,273.9);

	this.answerModal__text = new cjs.Text("", "16px 'Heebo'", "#333333");
	this.answerModal__text.name = "answerModal__text";
	this.answerModal__text.textAlign = "center";
	this.answerModal__text.lineHeight = 26;
	this.answerModal__text.lineWidth = 150;
	this.answerModal__text.parent = this;
	this.answerModal__text.setTransform(0,305.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-91.95,-45.1,183.9,90.2,6);
	this.shape.setTransform(0,324.9,1.632,1.663);

	this.instance_3 = new lib.answerModal__overlay();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,295,1,1.054);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape},{t:this.answerModal__text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answerModal, new cjs.Rectangle(-480,0,960,590), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(33.7,10.7,1,1,0,0,0,33.7,10.7);
	this.instance.alpha = 0.27;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,67.5,21.5), null);


(lib.goldTrolley = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(2));

	// Layer 1
	this.goldTrolley__text = new cjs.Text("", "12px 'Heebo'", "#333333");
	this.goldTrolley__text.name = "goldTrolley__text";
	this.goldTrolley__text.textAlign = "center";
	this.goldTrolley__text.lineHeight = 20;
	this.goldTrolley__text.lineWidth = 109;
	this.goldTrolley__text.parent = this;
	this.goldTrolley__text.setTransform(51.5,25.7,0.552,0.552);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(60.6,25.6,0.497,0.497,0,0,0,27.9,5.8);
	this.instance.alpha = 0.371;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.9,17.6,0.497,0.497,0,0,0,25.8,12.9);
	this.instance_1.alpha = 0.371;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(87.4,34.3,0.497,0.497,0,0,0,1.7,1.7);
	this.instance_2.alpha = 0.52;

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(15.6,33.5,0.497,0.497,0,0,0,1.7,1.8);
	this.instance_3.alpha = 0.52;

	this.instance_4 = new lib.Path_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(94.9,39,0.497,0.497,0,0,0,1.7,1.9);
	this.instance_4.alpha = 0.52;

	this.instance_5 = new lib.Path_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(7.5,40.3,0.497,0.497,0,0,0,1.7,3.6);
	this.instance_5.alpha = 0.52;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AggAiQgNgOAAgUQAAgTANgOQAOgOASAAQATAAANAOQAOAOAAATQAAAUgOAOQgNAOgTAAQgSAAgOgOg");
	this.shape.setTransform(36.5,79.1,0.497,0.497);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8A5D3B").ss(2.1).p("ACRAAQAAA7gqApQgrAqg8AAQg7AAgrgqQgqgpAAg7QAAg5AqgqQArgqA7AAQA8AAArAqQAqAqAAA5g");
	this.shape_1.setTransform(36.5,79.1,0.497,0.497);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3996B").s().p("AhmBkQgqgpAAg7QAAg6AqgpQArgqA7AAQA9AAAqAqQArApAAA6QAAA7grApQgqAqg9AAQg7AAgrgqg");
	this.shape_2.setTransform(36.5,79.1,0.497,0.497);

	this.instance_6 = new lib.Path_2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(32,79.1,0.497,0.497,0,0,0,12.6,18.4);
	this.instance_6.alpha = 0.422;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#8A5D3B").ss(2.1).p("ADXAAQAABbg+BBQg/BAhaAAQhYAAhAhAQg+hBAAhbQAAhaA+hAQBAhBBYAAQBaAAA/BBQA+BAAABag");
	this.shape_3.setTransform(36.5,79.1,0.497,0.497);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A6A8AB").s().p("AiXCbQhAhAABhbQgBhaBAhAQA/hBBYAAQBaAAA/BBQA+BAABBaQgBBbg+BAQg/BBhaAAQhYAAg/hBg");
	this.shape_4.setTransform(36.5,79.1,0.497,0.497);

	this.instance_7 = new lib.Path_6_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(22.1,19,0.497,0.497,0,0,0,25.8,12.8);
	this.instance_7.alpha = 0.25;

	this.instance_8 = new lib.Path_7_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(27.4,52.4,0.497,0.497,0,0,0,52,43.8);
	this.instance_8.alpha = 0.281;

	this.instance_9 = new lib.Path_8_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(44.6,15.4,0.497,0.497,0,0,0,88,31.3);
	this.instance_9.alpha = 0.559;

	this.instance_10 = new lib.Path_9_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(51.1,15.4,0.497,0.497,0,0,0,73.9,22.7);
	this.instance_10.alpha = 0.75;

	this.instance_11 = new lib.Path_10_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(66.9,25.6,0.497,0.497,0,0,0,38.5,5.9);
	this.instance_11.alpha = 0.422;

	this.instance_12 = new lib.Path_11_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(38.4,12.3,0.497,0.497,0,0,0,26.8,5.2);
	this.instance_12.alpha = 0.352;

	this.instance_13 = new lib.Path_12_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(49.8,19.5,0.497,0.497,0,0,0,52.5,6.7);
	this.instance_13.alpha = 0.281;

	this.instance_14 = new lib.Path_13_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(51,17.5,0.497,0.497,0,0,0,94.9,24.9);
	this.instance_14.alpha = 0.629;

	this.instance_15 = new lib.Path_14_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(50.7,23.5,0.497,0.497,0,0,0,89.2,11.2);
	this.instance_15.alpha = 0.801;

	this.instance_16 = new lib.Path_15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(58.4,17.1,0.497,0.497,0,0,0,71.4,23.9);
	this.instance_16.alpha = 0.801;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFE76F").ss(0.4).p("AEBg0QjAgfhugHQjNgPgmBOQApAEBPAEQBEAEAqAOQAeAHAjAWQAnAXAQAGQAZAKBUAGQBUAFAkAQ");
	this.shape_5.setTransform(64.1,17.6,0.497,0.497);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE54C").s().p("ACqBJQhVgGgYgKQgQgGgngXQgjgWgfgHQgpgOhEgEQhQgEgogEQAmhODNAPQBuAHDAAfIAiCSQgkgQhUgFg");
	this.shape_6.setTransform(64.2,17.6,0.497,0.497);

	this.instance_17 = new lib.Path_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(23.4,22.2,0.497,0.497,0,0,0,34,10.9);
	this.instance_17.alpha = 0.27;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFE76F").ss(0.4).p("ADqg+QgFgEAeABQAeACAeAGQBWAQgwAaQgMAHhlgQQhzgTgMAAQghAAgtANQgxAPgYACQhmAFgdA7QgTAAgugMQgpgKgZAEQgNADgYAOQgYANgQAD");
	this.shape_7.setTransform(59.1,16.2,0.497,0.497);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE54C").s().p("AlRAzQAYgOAOgDQAWgDAjAHIiAAbQAPgEASgKgAjqAoIgIgCIBngWQgTAPgKAVQgUAAgugMgAjyAmIAAAAgAgmgMQAZgCAxgPQAtgNAgAAIARACIBkgVQgEgEAdABQAeACAfAGQBVAQgvAaQgMAHhmgQIhugRIkNA4QAjgZBCgDg");
	this.shape_8.setTransform(59.2,16.2,0.497,0.497);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFE76F").ss(0.7).p("ACEgpQBBg6B2ADQB3ADAtBBQAigSBCgIQBCgIBBAGQCjANAFBHQgyALhvgKQhhgIg8AYQg1AWggAEQglAFg6gLQh5gbhfAKQhFAJgjAEQg+AHgpgNQgTgFg3gdQgpgVgpgBQg2gBgzASQgcALg6AhQhMAshngIQhJgGhsglQgcgMgHgBQgTgGgUAEQgUAEgUALQgUALAKAE");
	this.shape_9.setTransform(53,21.3,0.497,0.497);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFE76F").ss(0.4).p("ACHgjQhlgUg5gFQhsgKgTA1QAVACApADQAkADAWAJQAQAEARAPQAVAQAIAEQANAHAtADQAsAEATAL");
	this.shape_10.setTransform(63.4,9.8,0.497,0.497);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE54C").s().p("ABZAxQgsgEgOgHQgHgEgVgQQgSgOgQgFQgWgJgjgDQgpgCgWgDQAUg1BrAKQA6AFBkAVIASBiQgTgKgsgEg");
	this.shape_11.setTransform(63.5,9.8,0.497,0.497);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFE76F").ss(0.4).p("AlPA6QAnhTBtgvQBzgzByAcQAdAGAVAKQAUAJAWASQAQANAGAJQAEACAiADQBFAGAcAPQAlASAHAvQgaAFg6gKQg4gJgaAHQgUAEgnAXQgkAWgcADQgaABgogLQgtgQgXgGQhTgXgsAv");
	this.shape_12.setTransform(35.4,10.8,0.497,0.497);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE54C").s().p("AgTBgQgugQgXgGQhTgXgrAvIh5goQAnhTBtgvQB0gzByAcQAcAGAVAKQAVAJAVASQAQANAHAJQADACAjADQBEAGAdAPQAkASAIAvQgaAFg7gKQg4gJgZAHQgUAEgnAXQgkAWgdADIgGAAQgYAAgjgKg");
	this.shape_13.setTransform(35.4,10.8,0.497,0.497);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF100").s().p("AqzEwQgkAAhngFQhYgDg0ABQgNABgCgSQgDgRANgBIAXAAQgEgWgLgiQgThAgFgWQgUhmBLggQAjgOBiABQBTABArgoQAUgRA3hBQAtg0AlgYQAsgdAzgKQAzgKA0ALIA6ANQAiAIAZAAQAzAABTgaQBdgeB7gFQA6gCAhAEQA0AHAhAZQARANAOAUIAYAmQASAdAYATQAWARAiAMQAmAOBBAQQBRAUAXAHIBlAeQA6ATAmAWQBKAtAkBuQALAigFAlQgBAXgDAHIAAABQACAEABAHQAEAUgSACQgHABgFgIIgDgFIgTAFQgpAKg5gBIhigEQh6gHijABIkdADQmBAHjBACIj5ACIgrAAgAtvAJQhYAHgCBEQAAAjAVA+QASAyAFAfIBkACQBvAFAmAAQCoAACGgCIJVgJQFigFDKAJQBCAEAtgDIArgJQATgFANABIACgQQAGgpgSgvQgRgtgegfQgsgthYgcQgRgGiFgiQhKgQglgLQhBgRgngaQgUgNgRgXQgHgJgVgjQgVgjgggSQgdgQgrgEQiLgOiOAuQgpANgZAGQgkAJggAAQgaABghgGIg5gNQhKgRhEAXQhBAWg2A4QgxA8gZAcQguAwgxAKQgTAEgtgBIgugBIgdABg");
	this.shape_14.setTransform(51.4,16.5,0.497,0.497);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("As/EdQgSAAg1gEIgjgBQAAgXgPgvQgVhBgDgPQgXhkBFgcQAhgNBMADQBKAEAggQQAlgQAmguIA8hIQAqgqAqgXQAzgcA7gEQAkgBA+AQQA8APAogDQAugCBTgbQBRgaAygCICHgEQBOAEAmAjQARAPAZAsQAXAoAbASQAoAZBdAYICPAmQBqAgAfAMQBJAeAeAsQAiA3AQA3QAGAVgNA+QAGABAAAGQgGAJAAgOIAAgCQgHgDgOAFQgpAMhVgCIh8gFQkMgFnzAIQl0AHjqAAIihgBg");
	this.shape_15.setTransform(51.5,16.5,0.497,0.497);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A87C4F").s().p("AggAiQgNgOAAgUQAAgTANgOQAOgOASAAQATAAAOAOQANAOAAATQAAAUgNAOQgOAOgTAAQgSAAgOgOg");
	this.shape_16.setTransform(67.7,79.1,0.497,0.497);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#8A5D3B").ss(2.1).p("ACRAAQAAA7gqApQgrAqg8AAQg8AAgqgqQgrgpAAg7QAAg5ArgqQAqgqA8AAQA8AAArAqQAqAqAAA5g");
	this.shape_17.setTransform(67.7,79.1,0.497,0.497);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C3996B").s().p("AhmBkQgqgpAAg7QAAg6AqgpQAqgqA8AAQA8AAArAqQAqApAAA6QAAA7gqApQgrAqg8AAQg8AAgqgqg");
	this.shape_18.setTransform(67.7,79.1,0.497,0.497);

	this.instance_18 = new lib.Path_25();
	this.instance_18.parent = this;
	this.instance_18.setTransform(64.2,79.1,0.497,0.497,0,0,0,13.1,18.4);
	this.instance_18.alpha = 0.422;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#8A5D3B").ss(2.1).p("ADXAAQAABbg/BBQg/BAhZAAQhYAAhAhAQg/hBAAhbQAAhaA/hAQBAhBBYAAQBZAAA/BBQA/BAAABag");
	this.shape_19.setTransform(67.7,79.1,0.497,0.497);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A6A8AB").s().p("AiYCbQg/hAAAhbQAAhaA/hAQBAhBBYAAQBZAAA/BBQBABAgBBaQABBbhABAQg/BBhZAAQhYAAhAhBg");
	this.shape_20.setTransform(67.7,79.1,0.497,0.497);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#8A5D3B").ss(2.1).p("AKYAiI0vAAIAAhDIUvAAg");
	this.shape_21.setTransform(52.3,77.1,0.497,0.497);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A6A8AB").s().p("AqXAiIAAhDIUvAAIAABDg");
	this.shape_22.setTransform(52.3,77.1,0.497,0.497);

	this.instance_19 = new lib.Path_28();
	this.instance_19.parent = this;
	this.instance_19.setTransform(52.2,74.1,0.497,0.497,0,0,0,54.4,8.6);
	this.instance_19.alpha = 0.34;

	this.instance_20 = new lib.Path_29();
	this.instance_20.parent = this;
	this.instance_20.setTransform(52.3,57.6,0.497,0.497,0,0,0,87.3,38.6);
	this.instance_20.alpha = 0.551;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#603813").ss(4.2).p("AJaHbIy0AAImDu1Ie7AAg");
	this.shape_23.setTransform(52.2,55.5,0.497,0.497);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B36C10").s().p("ApZHbImEu1Ie7AAImDO1g");
	this.shape_24.setTransform(52.2,55.5,0.497,0.497);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE54C").s().p("AlRAzQAYgOAOgDQAWgDAjAHIiAAbQAPgEASgKgAjqAoIgIgCIBngWQgTAPgKAVQgUAAgugMgAgmgMQAZgCAxgPQAtgNAgAAIARACIkNA4QAjgZBCgDgADwgXIhugRIBkgVQgEgEAdABQAeACAfAGQBVAQgvAaQgEACgMAAQgbAAhHgLgACCgoIAAAAg");
	this.shape_25.setTransform(59.2,16.2,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.instance_20},{t:this.instance_19},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_18},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_17},{t:this.shape_6},{t:this.shape_5},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3},{t:this.instance_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.goldTrolley__text}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.instance_20},{t:this.instance_19},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_18},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_25},{t:this.shape_7},{t:this.instance_17},{t:this.shape_6},{t:this.shape_5},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.shape_3},{t:this.instance_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.goldTrolley__text}]},21).wait(2));

	// Layer 3
	this.instance_21 = new lib.Symbol4();
	this.instance_21.parent = this;
	this.instance_21.setTransform(58.9,45.2,0.627,0.627,0,0,0,53.5,49.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(15).to({_off:false},0).wait(1).to({regX:53.6,regY:49.2,scaleX:0.82,scaleY:0.82,x:58.8,y:18.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:58.7,y:-8.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:58.8,y:-23.2},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:-37.7},0).wait(1).to({_off:true},1).wait(2));

	// Layer 2
	this.instance_22 = new lib.Symbol3();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-247.4,86.4,0.491,0.491,0,0,0,50.5,39.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({_off:false},0).wait(1).to({regX:50.9,regY:39.2,x:-226.9,y:56},0).wait(1).to({x:-204.2,y:27.3},0).wait(1).to({scaleX:0.49,x:-178.9,y:1},0).wait(1).to({x:-150.8,y:-22.4},0).wait(1).to({x:-119.9,y:-41.9},0).wait(1).to({x:-86.3,y:-56.3},0).wait(1).to({x:-50.7,y:-64.1},0).wait(1).to({x:-26.8,y:-63.9},0).wait(1).to({x:-3.2,y:-59.9},0).wait(1).to({x:18.8,y:-50.7},0).wait(1).to({x:37.4,y:-35.7},0).wait(1).to({x:51,y:-16.1},0).wait(1).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,104.5,95.3);


(lib.gamelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEC198").s().p("AgWAaQgMgHgIgPQgFgHAIgJQAJgJAEAKQANAVAPgDQARgDAGgWQAEgNAIABQAEAAADAEQACAEgBAEQgMAogcAIQgFABgEAAQgKAAgIgFg");
	this.shape.setTransform(-28.4,97.8);

	this.instance = new lib.Path_1_1();
	this.instance.parent = this;
	this.instance.setTransform(-82,57.1,1,1,0,0,0,15,13.1);
	this.instance.alpha = 0.32;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CEC198").s().p("AgvAbQgRgTADgcQABgLAKgBQAJgCgBAMQgCAWANAKQAMAKASgCQASgCAMgNQAOgNAAgUQgBgLAKgCQAKgBAAAMQABAdgSAVQgSAWgcADIgJABQgXAAgOgRg");
	this.shape_1.setTransform(-35.1,77.6);

	this.instance_1 = new lib.Path_3_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61.4,9.4,1,1,0,0,0,1.2,2.4);
	this.instance_1.alpha = 0.609;

	this.instance_2 = new lib.Path_4_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-17.9,8,1,1,0,0,0,1.7,2);
	this.instance_2.alpha = 0.609;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAAQgCgLAJAAQAIAAACALQACAMgJAAQgIAAgCgMg");
	this.shape_2.setTransform(-21.9,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAAQACgJAKAAQAMAAgBAJQgCAJgKAAQgMAAABgJg");
	this.shape_3.setTransform(-66.9,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAAQgCgJAMABQAKgBADAJQACAKgMAAQgKAAgDgKg");
	this.shape_4.setTransform(-57.2,42.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgeBKQgegHgLgfQgKgbALgcQALgcAZgRQALgIANAAIAEAAQAKgDANAAQAUABAQANQAQANAFAUQAHAagQAbQgPAZgZAOQgVAMgTAAQgIAAgHgCg");
	this.shape_5.setTransform(-75.6,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgOAsQgOgEgIgRQgHgQAEgSQAFgUAQgKIAEAJQADgEAEgDQANgLARALQAQALACAUQACAWgWATQgQAMgMAAIgHgBg");
	this.shape_6.setTransform(-75.6,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgeBKQgdgHgLgfQgKgcALgbQALgcAYgRQALgIAOAAIAEAAQAKgDAMAAQAUABAQANQAQANAFAUQAHAagQAbQgOAYgZAPQgWAMgTAAQgHAAgIgCg");
	this.shape_7.setTransform(-25.9,12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgOAsQgOgEgIgRQgHgQAEgSQAFgUAQgKIAEAJQADgEAEgDQANgLARALQAQALACAUQACAWgWATQgQAMgMAAIgHgBg");
	this.shape_8.setTransform(-25.9,12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#981B1E").s().p("AiqC+QhtgPgog2QgwhABBhpIAAgBQADgHAKACQDLAqCRg0QA2gTBDgnIByhHQAFgCAGABQAFACADAEQAsA8gaBdQgZBVg8AwQhLA9h8AYQhAAMhBAAQgsAAgsgFgAkugxIAAACQgBAKALACIAJACQgdAygBAqQgBA3A0AdQBMAsCWgPQCKgNBcg0QBIgoAihYQAjhYglg9IhuBEQhHAog7AUQiPAvjGgmIAEgHQAFgIgMgEIgHgCQgFAAgEAFg");
	this.shape_9.setTransform(-21.2,110.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC3232").s().p("AiHC4Qh5gIgvg0Qg2g9BDhrQDIArCVgzQA6gUBEgnIB2hJQAkArgRBSQgPBMgwA3QgvA2h4AhQheAahcAAIgpgBg");
	this.shape_10.setTransform(-21.3,110.1);

	this.instance_3 = new lib.Path_11_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.2,52.8,1,1,0,0,0,14.9,13.1);
	this.instance_3.alpha = 0.32;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F3227").s().p("AhmBPQgEgWAQgKQAWgNATgdQAUggAMgQQAkgvBFgCQAUgBgFAZQgFAYgSAAQghABgVAPQgSAMgRAdQgRAbgNAQQgSAVgVAMQgHAEgFAAQgJAAgDgOg");
	this.shape_11.setTransform(-79.1,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("Ag5ApIAdgsQAhg0BAAAIiKBvIAMgPg");
	this.shape_12.setTransform(-77.6,3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F3227").s().p("ABZChQgVhJgGgRQgTgzgbgeQgWgbgrgmQg4gwgNgNQgOgPAKgSQALgSARARIBKBCQAsAoAYAeQAbAiAUA2QAJAXAVBJQAHAWgSAGIgHABQgMAAgGgSg");
	this.shape_13.setTransform(-4.2,2.7);

	this.instance_4 = new lib.Path_14_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(142.9,-49.1,1,1,0,0,0,9.5,10.2);
	this.instance_4.alpha = 0.211;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#456B4D").s().p("AgJCyQhAgGgpgzQgZgfgFgrQgFgmALgoQALgoAdgkQAaghAlgYQAegTAdAIQAVAFAOAYQALgEAOADQAQACAMAJQAUAQAIAqQALA4gJAzQgKA5ghApQgUAZgcAOQgaANgZAAIgJgBgAgJAaQgCAKADgMIAAgHIAAgCIgEAJQABAGADgNgAgCAUQgHALAGgHIACgDIABgDgAAEALQAAAAAAAAQAAABAAAAQAAgBAAAAQAAAAABgBIAAgBIgBACgAAHgKIAAACIAAAAIAAgBIABgBIgBgGIAAAGgAAFgZIAAgBIgFgFg");
	this.shape_14.setTransform(141.5,-54.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#456B4D").s().p("AhQBdQgggxgehCQgSgpgghSQgEgKAJgHQAIgGAEALQAjBbARAnQAhBHAjAyQAYAhAVASQAdAaAeAAQAjAAAhghQAZgaAUgnQAxhlibg+QglgOhegcQhOgXgYgOQgHgFADgMQADgMAIAFQAqAaBOAWQBiAcAaALQAzAUAcAZQAnAhACArQADAwgkA3QgkA3guARQgPAGgPAAQhAAAhBhng");
	this.shape_15.setTransform(63.3,-26.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#71A279").s().p("Ag3BuQg3hLhJi7IAKgeQAeATBZAbQBnAfAnARQCdBHhjCGQgvBCgxAAQgzAAg2hJg");
	this.shape_16.setTransform(63.2,-26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#456B4D").s().p("AAUCXQiGgViNhVQgIgFAGgLQAFgLAIAFQCGBQCAAWQCjAcBThXQgygwhEgtQhZg8hMgaQjRhIgqC/QgDAMgJgDQgJgCADgMQAtjPDaBDQBRAZBeA8QBPA0A6A4QADADgBAGQAAAFgDAEQhHBUh/AAQggAAgkgFg");
	this.shape_17.setTransform(-43.1,-71.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#71A279").s().p("AATCKQiMgXiAhPIgegeQAojGDSBAQBQAZBbA8QBPAzA7A6Qg+BOh7AAQgjAAgpgGg");
	this.shape_18.setTransform(-43.1,-71.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A54122").s().p("AFBCdQjDgci1hEQhpgog3giQhZg4gYhJQgDgLAJgDQAIgCAEALQAYBIBjA4QA3AdBzAoQB5ArB4AXIgngTQhOgogZg5QgCgEABgFQAAgHAGgBQAsgFBIALQBDAKAgACQgNgUgPgSQgHgHAGgJQAFgJAIAJQAYAaASAkQADAFgCAGQgCAHgGAAQgcgBhWgNQg8gJgpABQAbAqA/AfQApAVBSAhIADABQAHADAAALQABAKgIAAIgBAAg");
	this.shape_19.setTransform(-47.2,-48.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A54122").s().p("ApDLUQgvhDAKh/IAMhpQAEglAAgdQgWAngUAwQgRApgcBXQgDAHgKACQgKACAAgKQAAiyAchlQAkiEBehTQhHgHhdAJQh6APg9AFQgGABgEgEQgDgEAEgGQBciBDEgmQBPgPCqgEQh0gyhsiwQiPjrAmifQACgGAIgDQAIgDAEAFQCrDwDXBwQD7CDDphiQg5hEgbgjQg1hEAEhBQAAgGAJgFQAJgEAEAGQA2BXCfA4QCPAzBjgPIgIglQgHgdgLgTQgEgIAKgHQAKgHAFAIQAnA+A8AxQApg+BAgxQAGgFAGADQAGACgBAIQgRBSgCAyQgCBEAVBAQAOAqAtBFQAvBHAOAmQAnBpAACVQABBigUCgQgBAJgMADQgLADABgLIABgGQgfg2g3gJQg0gIg4AhQgEACgEABQgGAAgCgEQgcgygNg0QgFAdgGAeQgYBugqBhQgDAGgJADQgJAEgCgJQgOhhgphjQgfhNg0hYIgOAUQgYAggMgTQgGgIANgWQAHgLALgPQAQgYgBgNQgCgMgXgSQgcgXgsgQQg2gTgYgDQgwgHgaAZQgNANgRAZQgUAfgHAJQgvA8hAgdIgDACQgJACgOgFQgIgDgMgJIgSgNIgMgIQgKgGgBABQgBABAJAiQACAIgJAFQgJAFgFgGQgOgPgGAOQgKAXgFADQgMAHgKgGIgIgIQgIABgJgGQgHgFgIgMIgMgSIgSgaIgLgMIAAAAIgCABQgGACgEgDQgMgJgWAZIgrA5Qg1BIgagTQhNA1gPB8QgFAlgCBMQgCBLgEAgQgBAHgIAFQgDABgDAAQgEAAgDgDgApBFBQADAkgHA8IgMBnQgIBgAZA8IADhHQADhOAGgoQATiHBbg4QAKgHAGAHQAEAGATgXIAqg0QA3hDAeAJQAKgFAQAOQAHAGAIALIANATIANATIAIALIABAAIABAAQAIgEAFAGQAIALAGgNQAKgTAFgDQAIgFAHABIAAgKQABgZAXAAQAJgBAMAHIASAMIAWAPIAMAHIABABIADgDQAHgEAGADQA2AeAtg9QAYgkANgRQAYgeAXgIQAbgKAqAIQAYAFArAPQBcAfAeA7QADAGgEAEIgLASIACACQA9BkAiBTQAiBSAQBSQAfhOAShWQAVhjADhiIAAgRQABgIALgEQALgDAAALIAAARQACA1AsAwQAqAuBCAdQArAUAUAQQAPALAKAPQAOiEgDhnQgDhWgLg5QgQhOghg4IhBhrQghg8gMg5QgJgwAHg9QADgXALg6QgyArgiA2QgCAFgGACQgGACgEgDQglgdgeghIAHAcQABAFgEAFQgEAEgFABQhtAXifg4QhLgbgxgeQgqgbgdgfQALAoAhArIAuA2QAeAhAOAVQADAEgDAGQgDAEgFADQj3BwkLiHQjUhtipjkQgSCNB9DQQCQDtCcAEQALAAgEAKQgFALgJAAQjvAAhbAQQixAghYBsQA9gGBogNQBtgKBOALQAIABAAAGQAAAGgGAFQhoBQgkCOQgTBLgEB9IAXg9QAehHAjgzQAEgGAIgBIACAAQAHAAAAAIgAKlG3QAvgYAsgBQg8gcgQgOQglgigVglQAGBGAlBEg");
	this.shape_20.setTransform(-34.8,-30);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DF8040").s().p("ApYIQIAKhuQAGg9gDgiQgiAvgdBHQgRAqgeBaQAAi5AZhfQAliLBshRQhQgMhtALQh5AQg8AFQBVh7DHglQBjgTDoAAQhMgChThFQhNhBhBhrQg/hogdhoQgfhtAThGQCpDxDZByQEMCOD1h1QgPgXgegiIgwg3Qg1hDAGg9QAzBXCmA8QChA5BmgYIgLgyQgGgbgKgSQAoBBBDAyQAphEBFg0QgVBpgCAbQgEBBAbBJQAKArAuBDQAyBKAOAkQA9C2gpFHIhehPIAEABQA8AKAeA6QgSgwgsgXQgogQgigSIhPhCIgYgfQgTgbgDggQgDBRgWBoQgbB8glBSQgOhpgnhcQgfhLhChsQgHAVgNARQgMAPgFAAQgQgBA/hSQgVgwhHgdQg3gXhKgKQghAAgbAeQgIAIgiA0QgZAkgVAKQgdAOgpgYQAAANgUgLIgngaQg0ghAXBIQgQgUgLAFQgGADgHARQgHARgEADQgIAEgNgUQAAAUgkgzQgng3gFAPQgUgUhABVQgfApgNAMQgWAUgKgRQhYAygRCHQgFAlgDBPQgCBOgFAjQgqg2AJiHgAJuEbIAtAnIAjApQAVANAXAMIAqAkQg5gIg7AlQgyhTAAhXg");
	this.shape_21.setTransform(-35,-30);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJAAQAFgKAIAAQALAAgFAKQgFALgIAAQgKAAAEgLg");
	this.shape_22.setTransform(-16.4,11.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#456B4D").s().p("ADPH6QgIgGAJgHQAnggAcg2QAUgoATg/IAOg2QANgqgCgGQgFgQgSgFIgEACQg6AWhBgGQgJgBABgIQACgIAHgDQAvgSAmgBQATgBARADIALgEQApgTBCgzQAwglAjgSQAvgYAvgCIA6gBQAigBAWgIQAhgNAFgaQAEgVgMgiQgKgcgRgiIgOgcIgQgcIgEgJIgbgyQgEgIAKgHQALgHAEAIIAZAvIAGAMIAYAqIARAiIA7ByQA7BwApBeQAFhKABguQAChggJhNQgJhRgPg1QgWhKgngtQgcgggugSQghgNg2gJQhXgPgygGQhLgKg+gDQiZgHirAaQiPAViuAwQjUA6imBVQhzA7g+AwQhfBMgYBVQgCAKgLAAQgMAAADgLQAbhfBqhTQBEg0CAhAQC+hdD7g/QF9hhExAmQCqAVAdAIQBzAeAuBMQBABsAJCvQADBPgODXQAAAJgKADQgJADgEgIQguhvhIiMIgLgUQgEAYgUATQgdAZgyAFIhEACQgpABgZAKQgeALgjAYQgRAMgrAhQgqAhglATIASAIQAHADgCAFQgXBzgVA6QgkBgg9AxQgEAEgFAAQgEAAgDgCg");
	this.shape_23.setTransform(48.6,-81.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6AA5A7").s().p("AukANQAhiCDsiAQClhZDBg5QEChLDEgVQDugaDZAqQCOARA1AhQBGAsAjB+QAaBkADCHQABBTgKCXQgththJiMIiEj6IA9B0QAtBcgGAgQgYA0hQAEIhCACQgnABgVAKQgsASguAjQgyAngYASQgfAWggAMQg1gMhGAcQBAAHA7gXQATAFASALQgVBngZBDQgmBkg1Aog");
	this.shape_24.setTransform(48.5,-81.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1B75BB").s().p("AhQB4QgggggEg2QgEg1AYguQAUgnAggSQAEgcAYACQA6AFAlAqQAkAoADA7QACA1gbAqQgdAugzAIQgMACgJAAQgsAAgcgdgAgLg7QgYAJgOAYQgNAXABAYQACAaARAPQATAQAfgFQAbgEAPgWQAOgVgDgbQgDgfgXgUQgOgMgSgFQgFAHgJADg");
	this.shape_25.setTransform(-21.8,16);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#25A9E0").s().p("AhGBVQgVgZACgpQACglAUgiQAWgiAdgJIAAgPQAwACAeAjQAaAeACArQACArgWAfQgYAigrADIgHAAQgrAAgXgag");
	this.shape_26.setTransform(-21.8,16);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1B75BB").s().p("AhQB0QgggfgEg1QgEgzAYgtQATglAhgSQAEgbAYACQA5AGAlAnQAlAnACA6QADA0gcApQgdAtgyAHQgLACgKAAQgsAAgcgdgAgLg3QgWAHgOAXQgOAVgBAXQgBAcAWAOQAUAMAcgEQAbgEAPgUQAPgVgDgZQgEgegXgSQgOgKgRgGQgEAHgKADg");
	this.shape_27.setTransform(-72.7,17.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#25A9E0").s().p("AhGBSQgVgYACgoQACgkAUggQAWgiAdgIIAAgOQAwACAeAhQAaAeACApQACApgWAeQgYAhgrADIgHAAQgsAAgWgZg");
	this.shape_28.setTransform(-72.8,17.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2D3A2").s().p("AgkEUQg5gJgkhDQgagvgOhIQgQhPADhGQADhTAchAQAEgIAGAAIABAHQABAJAGgCIgBACQgbA9gCBRQgCBFARBLQAkCkBXAKQA+AGA5hBQAyg5AOhCQANhBgQhGQgRhIgngyQgqg2g4gKQg+gLhEAyIgEACQADgKgHgDIgEgBQABgGAGgEQBJg1BIAMQBKAMAwBMQAoBBAJBRQAJBQgZBHQgXBCg2AyQg3Ayg0AAIgSgBgAiNjfIAAAAg");
	this.shape_29.setTransform(-17.6,23.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgtEHQg6gSgkhcQgghUgBhqQgChrAfhCIALgLQBXhBBNAdQBEAZApBYQAnBVgIBeQgIBlg7A7QhEBIg4AAQgNAAgNgEg");
	this.shape_30.setTransform(-17.6,23.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2D3A2").s().p("AgoEdQg9gKgohEQgcgxgRhMQgRhRADhJQAEhWAfhAQAEgJAHABIAAAGQACAIAFgBIgBACQgeA/gCBWQgCBJATBOQAQBFAbArQAnA9A3AEQBEAFA+hCQA4g7APhHQAOhGgRhJQgRhMgug1Qgyg6hGgDQhBgDhCAuIgFACQADgJgHgDIgDgBQAAgHAGgEQBQg3BPAMQBTANA0BQQAqBBAKBTQALBRgaBJQgZBGg+A2Qg7A0g4AAQgLAAgKgCg");
	this.shape_31.setTransform(-63,25.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgyEQQhAgSgnhgQgjhWgBhtQgChvAihEIALgMQBghEBVAeQBLAbAtBbQAqBXgIBhQgJBphBA9QhKBKg+AAQgPAAgOgEg");
	this.shape_32.setTransform(-63,25.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D4BC93").s().p("AgiBEQgGgCAAgEQgOhfBQgiQAJgFAGAJQAHAIgLAFQgiAOgMAeQgIAQAAAUQAIgCAMgHQAQgJAKgBQAGgBAFAEQAFAEgCAGIgGAYQgFAPgJAEQgDABgMAAQgUgBgNADIgCAAIgHgCgAAJAyIAEAAIgEAAIACgFIABgHIgDACQgPAJgJABIgCAAIAAAAIAJAAIARAAg");
	this.shape_33.setTransform(34.7,41.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D4BC93").s().p("AhgCeQACgMAJgCQA2gIAqg3QAigtAUg+QAJgdADgTQAEgdgIgTQgRgpg6AoQgKAGgDgKQgEgJAJgGQAagSATgFQAdgIASASQAZAbgPBKQgQBMgrA+QgzBJhFALIgDAAQgHAAABgKg");
	this.shape_34.setTransform(37.5,41.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D4BC93").s().p("AguBYQgbgWgCguQgBgoARgiQATgnAggGQAkgHAtApQAHAGgGALQgGAKgIgHQgxgsggAUQgbARgGAtQgHAtAVAYQAYAcAygbQAJgFACAMQACAMgIAEQgcAPgWAAQgUAAgPgNg");
	this.shape_35.setTransform(-44.8,55.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D4BC93").s().p("AgwCQQgBgLAIgFQBEgmAEhQQABgbgWh2QgCgKAKgFQAJgFACAMQAXB7gEAqQgHBWhPArIgEACQgFAAgBgJg");
	this.shape_36.setTransform(-43.1,33.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2D3A2").s().p("Ak4L7QgEgFADgFQAhg/AOguIAFgRQAEgLgCgHQgCgLgBAAQgFACgIABQgIABgPAHQgQAIgHABQgUAEgVgCQgugFgvgkQgggYgrgvQg7hBg6hjIhni3QgSgggDgPQgEgZAVgSQAWgPAIgHQAOgNAFgUQAEgQADgVIAFgnIAcjGQAVibAFgbQAThpAdhJQADgIAMAAQAMAAgEAKQgjBXgVCCQgLBKgSCUIgYCqIgGAgQgGASgKAMQgFAHgMAHQgNAIgFAEQgSAQAKAaIAYArQAYApATAlIA2BhQAgA3AcAmQA0BGApAmQBDA7A6AAQAPAAAcgNQAbgMAOAAQAPABAGAJQAKAPgJAhIgSAuQgOAigOAcQBwgaCZhBQBbgnA3gcQBPgqA3guQApgiAjhCIA9huQAdgsAygOQAegIBFgIQBcgPAwhpQAqhcgPhhQgLhLgPgxQgehdgpAIQgRAEgaAbQgbAcgPAGQgUAIgUgIQgUgJgLgQQgIAFgIgIQgDgDADgGQADgEAEgCQgFgPgGghQgGgogCg7IgDhkQgBhJgCgmQgEhBgNgrQgDgJAMgFQAMgEACAJQAJAcADAoQADAXACAuQAEBAAFCBQACAyACAYIAIAiQAFAVgCANIgCAGIACAAQAOAFAQAOQAOAIARgKQAJgFAfgeQAYgXAVgEQAZgEATASQAOAOAOAcQAeBBANBIQAOBOgMBAQgLA+ggA0QgjA4gyAeQgaAPhZAMQhIAKgeAqQgRAYgjBIQgfA9gcAfQggAkgzAiQgjAXg7AfQjpB8jLApIgDABQgEAAgDgDg");
	this.shape_37.setTransform(-21.1,41.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F8F0D6").s().p("AkDKQQAhheg4AfQhDAmhJgsQg2gghRhgQgigng+hvQhBh3gWgkQgjg6AdgTQAUgKAKgIQARgPAFgYIAulAQAijtAihQIQHiKQAMAjAICvQAIC+AEAUQAQA6gLACIACAAQAMAFAZASQAVAPAggbIA4gvQAhgSAZAjQAfAsAcCHQAaB9hBBsQhBBqhgAAQhoAAgrBFQgFAJghBCQgbA1gdAmQg+BSjfBkQjEBYiGAbQAcg1AQgvg");
	this.shape_38.setTransform(-21.1,41.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#356732").s().p("AgEAQQgRgCgOgNQgGgEAFgGQAFgGAHAAQAeADAYAFIABABIAFACQAFAEgDAFIgBAAIgBACQgCADgFABIgEABQgPAEgKAAIgEAAg");
	this.shape_39.setTransform(40,111.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0D9948").s().p("AAAAHQgNgBgNgMQAcACAZAGQgTAFgIAAIAAAAg");
	this.shape_40.setTransform(40,111.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#356732").s().p("AgRBvQgFgDABgGQAJhLgOgpQgUg5hAgTQgIgCADgJQADgIAHgCQARgEAfAPIArAXIABABQA6AWAYASQAoAdAIAtQABAIgKAEQg4Ahg7AcIgFABQgDAAgCgBgAgGgcQAOAqgGBHQAtgWAugZQgJgjgigXQgUgOgwgTQAHALAFAOg");
	this.shape_41.setTransform(53.2,122);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0D9948").s().p("AgIBXQAIhCgMglQgPg1g0gWIgZgJIAGgBIBPAjQBDAaAbAYQAaAVAEAlQg0Aeg/Aeg");
	this.shape_42.setTransform(53.2,121.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#356732").s().p("AjcDeQjdgkjKhkQgFgCABgGQABgFADgEQAbgZAxgYQANgGAdgRQAbgQAPgHQALgFAbgGILDjKQAHgCADADQBGBEBfAkQAmAPAjAHIAXADIALABIAEAAIABgBQAGgGAHADIAJADIABAAIABABIADADQAhAfATA+QAPArACAQQAIAngQASQgLAMgjAMIgzARQg1AUg2AQQhlAehtAPQhnAPhoAAQh1AAh3gTgAEAjZIgHADQgQABgZAJIgpANIo3CiIgkAKQgVAFgOAFQgIAEgLAGIgTALIg+AgQgbAOgSAOQCtBTC8AlQDEAmDEgQQDHgQC5hDIAugPQAdgKANgLQARgOgGgiQgCgPgNglQgRg3gegcIgBgBIgBAAIgGACQgOACgTgDQhegNheg7QgagRgQgOIgOgOQgLgOACAAIgBAAIgHACg");
	this.shape_43.setTransform(-11.3,122.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#65C08A","#00A551","#00914D"],[0,0.498,1],-63.6,0,63.7,0).s().p("Ap7BMQAUgWAxgYQA7gcAZgSILqjVQBLBNB3AmQArAOAfACQAdADgFgIIAJAEQAWATARAkQAXAwAJBLIgBAPQkmCIlDAAQlZAAk0iag");
	this.shape_44.setTransform(-11.3,122.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#356732").s().p("AgRANQgDgDAAgEQgBgLAJgDIABAAIAKgFQAGgDAJABQAIABAAAKQAAAIgGAEQgEACgKACIgMAEIgCAAQgDAAgCgDg");
	this.shape_45.setTransform(-60.8,121.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#65C08A","#00A551","#00914D"],[0,0.498,1],-1.2,0,1.2,0).s().p("AAAgBQAFgDAHABIAAABIgXAGIALgFg");
	this.shape_46.setTransform(-60.8,121.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#356732").s().p("AABAOIgHgEIgCAAIgEgCIgCgCQgFgEADgHQAEgIAIgBQAFgBANAJQAIAGgHAIQgEAHgGAAIgEgBg");
	this.shape_47.setTransform(44,111.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#65C08A","#00A551","#00914D"],[0,0.498,1],-0.7,0,0.8,0).s().p("AgGgBQAAgBAAAAQgBAAABgBQAAAAABABQAAAAABAAQAEACAHAEg");
	this.shape_48.setTransform(44,111.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#92DDDD").s().p("Ao6VIQkHhvjLjLQjLjMhwkHQhzkRAAkqQAAkpBzkRQBwkIDLjLQDLjLEHhvQEQhzEqAAQEqAAERBzQEHBvDLDLQDLDLBvEIQB0ERAAEpQAAEqh0ERQhvEHjLDMQjLDLkHBvQkRBzkqAAQkqAAkQhzg");
	this.shape_49.setTransform(-9.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_4},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_3},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gamelogo, new cjs.Rectangle(-156.1,-146.7,312.3,293.5), null);


(lib.timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.timer__text = new cjs.Text("", "16px 'Heebo'", "#333333");
	this.timer__text.name = "timer__text";
	this.timer__text.textAlign = "center";
	this.timer__text.lineHeight = 26;
	this.timer__text.lineWidth = 93;
	this.timer__text.parent = this;
	this.timer__text.setTransform(49.6,62.5,0.608,0.608);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(0.3).p("AgXgHIAvAP");
	this.shape.setTransform(18.5,66.9,0.771,0.771);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231F20").ss(0.3).p("AATgKIglAV");
	this.shape_1.setTransform(84.2,67.5,0.771,0.771);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(0.3).p("AgSARIAlgh");
	this.shape_2.setTransform(17.3,106,0.771,0.771);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").ss(0.3).p("AATAMIglgX");
	this.shape_3.setTransform(85.7,102.7,0.771,0.771);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").ss(0.3).p("AAJAXIgRgt");
	this.shape_4.setTransform(68.3,119.1,0.771,0.771);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#231F20").ss(0.3).p("AgMAYIAZgv");
	this.shape_5.setTransform(34,120.3,0.771,0.771);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").ss(0.3).p("AAEgGIgHAN");
	this.shape_6.setTransform(68.6,53.1,0.771,0.771);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#231F20").ss(0.3).p("AgOgKIAdAV");
	this.shape_7.setTransform(30.3,54.8,0.771,0.771);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#231F20").ss(0.3).p("AA6AAIhzAA");
	this.shape_8.setTransform(86.5,87.3,0.771,0.771);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#231F20").ss(0.3).p("AgxAAIBjAA");
	this.shape_9.setTransform(14.1,85.6,0.771,0.771);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#231F20").ss(0.3).p("AAAAwIAAhf");
	this.shape_10.setTransform(50.3,122.2,0.771,0.771);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#231F20").ss(0.3).p("AAAg3IAABv");
	this.shape_11.setTransform(50,52.6,0.771,0.771);

	this.instance = new lib.Path_12_2();
	this.instance.parent = this;
	this.instance.setTransform(50.2,88,0.771,0.771,0,0,0,60.4,57.4);
	this.instance.alpha = 0.32;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D1A731").ss(2).p("AAAgjIAABH");
	this.shape_12.setTransform(47.8,33.5,0.771,0.771);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#D1A731").ss(2).p("AAAgjIAABH");
	this.shape_13.setTransform(50,33.5,0.771,0.771);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#D1A731").ss(2).p("AAAgjIAABH");
	this.shape_14.setTransform(52.9,33.5,0.771,0.771);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#D1A731").ss(2).p("AAAgjIAABH");
	this.shape_15.setTransform(45.7,33.5,0.771,0.771);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D1A731").ss(2).p("AhSAAQAAAPALAKQALALAOAAIBdAAQAPAAAKgLQALgKAAgPQAAgOgLgKQgKgLgPAAIhdAAQgOAAgLALQgLAKAAAOg");
	this.shape_16.setTransform(49.3,33.5,0.771,0.771);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFDB39").s().p("AguAkQgOAAgLgLQgLgKAAgPQAAgOALgKQALgLAOAAIBdAAQAOAAALALQALAKAAAOQAAAPgLAKQgLALgOAAg");
	this.shape_17.setTransform(49.3,33.5,0.771,0.771);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#D1A731").ss(2).p("AAhAdQAAAOgKAKQgJAJgOAAQgNAAgJgJQgKgKAAgOIAAg5QAAgOAKgJQAJgKANAAQAOAAAJAKQAKAJAAAOg");
	this.shape_18.setTransform(49.4,38.5,0.771,0.771);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFDB39").s().p("AgWA0QgKgKAAgNIAAg5QAAgNAKgKQAJgKANAAQAOAAAJAKQAKAKAAANIAAA5QAAANgKAKQgJAKgOAAQgNAAgJgKg");
	this.shape_19.setTransform(49.4,38.5,0.771,0.771);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#D1A731").ss(3).p("ACFAAQAAAxgnAiQgnAhg3AAQg2AAgnghQgngiAAgxQAAgvAngiQAngiA2AAQA3AAAnAiQAnAiAAAvg");
	this.shape_20.setTransform(49.4,33.7,0.771,0.771);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhdBTQgngiAAgxQAAgvAngiQAngjA2ABQA3gBAnAjQAnAiAAAvQAAAxgnAiQgnAhg3AAQg2AAgnghg");
	this.shape_21.setTransform(49.4,33.7,0.771,0.771);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#E9B933").ss(7).p("AIvAAQAADeikCeQijCdjoAAQjnAAijidQikieAAjeQAAjeCkidQCjidDnAAQDoAACjCdQCkCdAADeg");
	this.shape_22.setTransform(50.3,87,0.771,0.771);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AmKF8QikieAAjeQAAjeCkidQCkidDmAAQDoAACjCdQCjCdAADeQAADeijCeQijCdjoAAQjmAAikidg");
	this.shape_23.setTransform(50.3,87,0.771,0.771);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#E49833").ss(7).p("AJqAAQAADvi1CpQi1CpkAAAQj/AAi1ipQi1ipAAjvQAAjuC1ipQC1ipD/AAQEAAAC1CpQC1CpAADug");
	this.shape_24.setTransform(50,87,0.771,0.771);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Am0GYQi1ipAAjvQAAjuC1ipQC1ipD/AAQEAAAC1CpQC1CpAADuQAADvi1CpQi1CpkAAAQj/AAi1ipg");
	this.shape_25.setTransform(50,87,0.771,0.771);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#B57131").ss(7).p("AKJAAQAAD0i+CsQi+CskNAAQkMAAi+isQi+itAAjzQAAjzC+isQC+isEMAAQENAAC+CsQC+CsAADzg");
	this.shape_26.setTransform(50,87.3,0.771,0.771);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AnKGgQi+itAAjzQAAjzC+isQC+isEMAAQENAAC+CsQC+CsAADzQAAD0i+CsQi+CskNAAQkMAAi+isg");
	this.shape_27.setTransform(50,87.3,0.771,0.771);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#E49833").ss(2.5).p("AAVAAQAAAggGAXQgGAXgJAAQgIAAgGgXQgGgWAAghQAAgfAGgXQAGgXAIAAQAJAAAGAXQAGAXAAAfg");
	this.shape_28.setTransform(49.4,6,0.771,0.771);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#E49833").ss(2.5).p("AArAAQAAAogNAdQgMAdgSAAQgRAAgMgdQgNgdAAgoQAAgnANgdQAMgdARAAQASAAAMAdQANAdAAAng");
	this.shape_29.setTransform(49.4,17.2,0.771,0.771);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.timer__text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.timer, new cjs.Rectangle(-13.6,-1.2,127.2,137.4), null);


(lib.topbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goToInstructions();
	this.instance.parent = this;
	this.instance.setTransform(-322.8,31);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.goToAbout();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-420.9,31);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.gameName = new cjs.Text("", "16px 'Heebo Medium'", "#333333");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "center";
	this.gameName.lineHeight = 26;
	this.gameName.lineWidth = 349;
	this.gameName.parent = this;
	this.gameName.setTransform(0,14.1);

	this.instance_2 = new lib.gamelogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(429,29.5,0.16,0.16);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").p("EhK/gErMCV/AAAIAAJXMiV/AAAg");
	this.shape.setTransform(0,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhK/AEsIAApXMCV/AAAIAAJXg");
	this.shape_1.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.gameName},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.topbar, new cjs.Rectangle(-481,-1,962,62), null);


// stage content:
(lib.goldy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// adding game start screen;
		addGameStartScreen();
		
		// adding event for select topic dropdown
		$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
		// choosing topic from select topic dropdown
		function mycb_change(event) {
			mychoice = event.currentTarget.value;
			
			switch(mychoice) {
				case 'civil':
					chosenTopic = civilRightsQuestions;
					chosenTopicQuestions = civilRightsQuestions.questions.slice();
					break;
				case 'science':
					chosenTopic = scienceQuestions;
					chosenTopicQuestions = scienceQuestions.questions.slice();
					break;
				default:
					chosenTopic = testQuestions;
					chosenTopicQuestions = testQuestions.questions.slice();
			}
			numberOfQuestions = chosenTopic.questions.length;
			selectThemeDropdown.startbtn.alpha = 1;
			selectThemeDropdown.startbtn.addEventListener("click", callStartModal);
		}
		
		function callStartModal() {
			$("#mycb").hide();
			stage.removeChild(selectThemeDropdown);
			addStartModal();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/goldy_atlas_.png?1518254352684", id:"goldy_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1518254353041", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1518254353041", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1518254353041", id:"an.ComboBox"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;