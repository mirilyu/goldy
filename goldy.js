(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"goldy_atlas_", frames: [[157,319,32,32],[0,0,245,317],[0,319,155,161]]}
];


// symbols:



(lib.ComboBox = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pickaxeaiAssets = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.stoneaiAssets = function() {
	this.spriteSheet = ss["goldy_atlas_"];
	this.gotoAndStop(2);
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


(lib.stoneOption = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stone.ai
	this.optionText = new cjs.Text("", "12px 'Heebo'", "#009933");
	this.optionText.name = "optionText";
	this.optionText.textAlign = "center";
	this.optionText.lineHeight = 20;
	this.optionText.lineWidth = 85;
	this.optionText.parent = this;
	this.optionText.setTransform(95.1,74.6,1.718,1.561);

	this.instance = new lib.stoneaiAssets();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.393,1.393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.optionText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stoneOption, new cjs.Rectangle(0,0,216,224.3), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AhUNAQgBgIADgbQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQgDgyAAgZQAAgVADgRQgIgOAWgZQAEgEAEAAQgNgUgEgbQgFgdADg5QAIhWACgsQACgxgEgnIgGABQgFgBAAgFIgBgXQABgLAHgKIAEgFQgFgIgDgLQgGgVACgiQAFhnAAg0QAAgVAEhaQADhEgEgsIgIhTQgGgKABgRIADgGQgBgeABgaIgDgVQAAgGAFgEIABgJQABgHAJgEQAGgCACADQABg0gIgvIgFgPIgBgPQAAgJAJgFIADgBQgIgZABgfQgFgBAAgGIgBg+QAAgSACgPIgBgCQgBgFADgDIACgOQgBgJACgMQACgGAEgEIABAAQgJgSgNgcQgDgIAJgHQAJgHAEAIQARAoAKAPQARAbAZANQAIADgEAIQgEAHgGACQgQADgNAAIgFABIgJAAIgBgEIgBAAIAAAEIACAAIAHAmQACAHgJAGIgEACIgBAVQgEBEAeAmQAEAFgEAHQgDAGgGABIgNACQAMBTgNBeQAFAHAIACIAXABIAxACQAeABATADQAJABgDAJQgDAJgIABQgPADgoAAIgmAAQgXADAPAQQAFAGgFAHQgFAGgGAAIgMAAIgBAaIAAADQAAAHgKAEIgBAAIADAZQADAogBAtQgBAfgEA2QgCAZABA3QABA0gDAdQgFA1ACARQAEApAbASQADACgBAFQgBAEgDADQgIALgJAIQADAggCAoIgHBuIgDBmQADA7AjAeQAEAEgDAHQgDAFgEACIgDACQASACANABQAHAAgCAJQgCAJgFACQgjALgagJIgBACQgBAOABAZIAFgBQAKgCgCAJIgDAQQABALAOAGQAOAFAXgBQAIgBgBAJQAAAJgHACIgDABIAAAAIAAAAQgRAFgRABQgLABgNgBIgCANQABAmAzgMQAKgDgCALQgCAKgIACQgQAEgMAAQgkAAgEgggAg4KOIABADIAHgDIgFgGIgDAGg");
	this.shape.setTransform(9,86.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,18,172.9), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AAMNbQgJgCAEgKQAEgKAIACQAwALAAglIgDgOQgkAEgcgJQgIgDAGgJQAEgJAHABIACAAIABABQAfAGALgjIAAgDQgCgHAJgFIAFgDQABgTgBgLIgBgJQggALghgMQgHgCAEgJQADgJAGAAIAYgCIgEgCQgFgCABgGQAAgFADgDQAjgfADg9IgEhoIgHhqQgCgnAEgfQgLgJgJgLQgDgEACgFQABgFAEgDQAcgSABgwIgHhMQgCgXACg5QABgygEgdQgIg+ALh6IAAAAIgCAAQgKADAAgLIAAgEIABgdIgCABQgJABgKgBQgGAAAAgGQAAgGADgEQAPgQgcgFQgJgBgcAAQgpAAgRgDQgJgBAEgJQADgJAHgBQAUgDA3gCQAggBAXgDQgNhgANhXIgTgDQgGgBAAgGQAAgFAEgEQAdgmgEhDIgCgbIgEABQgJACACgKIAAgDIAAAAIABgBIAHgoIgSAAIgEgBQgNAAgPgDQgHgCACgIQACgHAGgDQAZgMAQgaQAJgNAQgmQAEgIAKAAQAKAAgFAKQgNAfgLATIADAAQAFABABAFQACAMgBAJIACAQIABABQABAEgBADIACAhQABAVgCApQAAAFgFAEQAAAkgKAcQACgCAEgBQAKgDgBALQAAANgBACIgFAQIAAABQgJA0ACA4QADgDAFgDQAJgEABAJIABALQAFABAAAHIgDAVQABAbgBAeQACABABAEQABARgGAMIgIBaQgEAqADBDQAEBWAAAXQAAAZADA5QADA2AAAdQgBAegHAVIgGANQADAAADAEQAGAJABALIgBAVQAAAFgFAFQgEACgDABQgDAlADAuQACAtAHBYQAEA2gHAfQgHAkgXAaIAGADIAAgBQgDgGAIgHQAHgIAGAGQAVAZgJAOQADAQAAAUQAAAZgDAxQAAADgCADQAEAbgCAKQgGAiglAAQgNAAgQgEgAAqlPIADACIADgCIgGAAgAA1oxIADABIABgIIgEAHg");
	this.shape.setTransform(9,86.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,18.1,172.7), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AglB0QgKhBgEghQgGg4AJgpIgbAAIgBAFQgCAHgBAKIAAAGIABACIAAAKQAAAIgMABQgLAAAAgJIAAgCIAAgGIAAAAQgHgCABgHIAAgWQgHADgGgCIANgDQgCgGgDgDIgVABIAAAAQAFAJAIACIgCABQgLAAgDgMIg4gEIhXgDQgDAEgGgBIgDAAIAAAAIglAAIACgBIgEABIACAAQgRAFgMAPQgEAEgFABQgGAAgDgDQgbgWgwgFQgcgDg2AEQgLABACgJQABgIAKgBQA5gEAhADQAdAEAXAJQAVgHAcgBIAFAAIACgBQATgFAVAEIA6AAIBWACIAVABIgBAAIgCABIAEgBIgBAAIALgCIAhgDQAGgBADAFQAQgKAcACQAJAAABAGIABADIAVAAQAYgJAXAAQA0gHBDADQAtACBKAJIAXgBQBOgCCRAAQALAAgCAJQgCAIgKAAIi1ABIg0ACQgDABgDAAIgeACIgBACQgCAIgKABQg/ABhmgCIgDAAIgBAAQg4AIgWAYQAIAigYA1IgBACQADA/gCAKQgBAHgKACIgDAAQgIAAAAgHgAgYhPIgBgBIAAABIABAAIAAAAgAh4hNIAAAAg");
	this.shape.setTransform(54.3,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,108.6,24.6), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AkyA7QgHgBgBgIQgDgXAFgOIADgGIAAgJQgNgKgTgGIgDAAQhEAGgkABQgeACgZgDQgHAEgHAFIAAAAQgGAKgKAJQgCADgDAAQgEAAgCgCQgWgZgzgGQgVgDg9ACIhFADQgtADgYAAQgJABAAgMQAAgLAJAAIBagFQA3gDAiABQAxABAeAJIANAHIgBgJQgBgMAHgBIAEgBIADABIACgBQDhghDlAqQAEAAACADQANgGAQgEQASgEAygEQBHgFCPAHIBAACQArgIA3ACQArABBUAHQC6AHCNACIADAAQAHAAABALQABALgHAAIgDAAQhHAChmgDIiwgGQgegBhPAAQg6AAgmgBIgXAFQgHADgDgKIhZgDQg/gDguABQhHACgNACQgVACgPAFQABAJgFAEQgTAOgMADQgPAFgSgMQgXgOgNgEQgRgGgaACIg+AHIABACQADAJgHAFIgOAjIgDALQgBAIgGAAIgCgBgAoPgYIgBABIACgBIgBAAQAIgGALgFQgXgDgTgGIABAEIABADIAIANIADAAIAKAAgAm2ggIARgBIAHgBIgYACg");
	this.shape.setTransform(84.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,169.3,11.9), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AThA4QgGgBgBgIQgCgQAEgRQAAgHgDgDQgCgCgHgCQioAaiWgaQgGAAgCgIQgGgBABgKIABgGQg/gGgpgBQh1gBg1A+QgEADgEgBQgEgBgBgEQgHgYAJgPQh7AUh6ABQh2ABhrgRQhGAFhoAAIhIABIgTAAIgKACIgPABQhOAMg3gBQgHAAgBgHQg0gCgvgHQgHgBgBgKQAAgFABgDIk4ACQniACkcgNQgJgBABgLQABgMAJABQEcANHigDQGFgCDZACQBFgDApABQAFAAACADIAqABQAHAAABALIgBAFIAKAAIAAgFQAAgLAJAAIBlgBQA7ABAqAEQAJABgBALQAAAKgHABQAmACAoAAQCMgBCMgcQAJgCABAKQACAHgCADQAzgdBPgBQBEAACCAQQAFAAACAFIAFAAIAiAAQBDgMApgDQBPgDAoAaQADACACADIAEgDQADgEAEgDQAOgKAYATIAPgFQAXgKANgEQAjgJBCgBQAIAAAAALQgBAMgIAAQgxAAguANQgaAHguARIgBADQgBAGgFABIgCABQgEABgDgDIgCgCQgDAAgCgCQgDgCgBgDIgCgFQgFADgDADQgCADgCAFQAAARgCANQgBAIgHAAIgBAAgAP9gIQgEAAgCgDIgBAAIgMAAQgWABgVACIA+AAIAAAAg");
	this.shape.setTransform(147.7,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,295.4,11.2), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AHKAYQgHgBABgEIhYgDIABgBIgDABIgBAAQgKABAAgJIABgDQhsgEhfAAQjVgBi9AMQgDAEgGAAIgWAAIgaAAIgFAAIAAAAIgEAAIikgEQiTgEhKAAQgKAAADgJQAEgKAIAAQBMAACRAEICsAEIgEAAIASAAIgOAAQDVgQD3ABQB5ABCSAFQCBgRCbAGQAIAAgBAIQAAAHgHADQgeANgsAFIgLABIgFABIgBABIgLAAIgTADIgTACQglAFghAAQgTAAgSgCg");
	this.shape.setTransform(71.2,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,142.5,5.1), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AT0BhQgagBhzgKQhGgHhxACIiJABIgaAAIg1gBQhSAMhigEQhYgCh6gRQg3AHgjACQhQAGg8gOQg/AChZgCIgKAAQg9AZhcgCQgYgBh7gLQhaAAhDgMIhwgFIg3AEQiCAMhMgIQgJgBADgIIABgBQjeAGjfAAQgJAAABgGIgoAGQhIAMgcACQg6AFghgHIgfgJQgRgGgMABQgMABgZAGQgZAGgMABQgpAFg9gBQhcgBhPgLIgFgBIgMADQgaAFg6ACQhaAEh2gNQgIAAADgHQgwAHgagEQgIgBADgIIADgFIgpAKQgKACAAgKQAAgJAJgCQAjgIAQgFQAagJATgMIACgCQAJgFADAHQADAFgDAFIApgBQAIAAAAAGQABAGgFAEIgFAFIABAAQBAgMAjAHQAIACgDAIQgDAHgGACIgSAFQAkACAkAAQBMgBAPgBQA8gHAUgcQAEgFAIAAQAIABgCAIQgCAPAvABQAYABAjgCQAKAAgDAKQgCAJgIABIAfAAQAxAAAogEQANgBAcgJQAbgIANgBQAKgBASAJQAWAKAHABQAkAIBAgHQAVgCBIgNQA6gJAkgBQAKAAgCAJIgBADQDegBDGgHIAEAAIASAAIADAAIAIAAIACAAIACgBQA3gHBFACICTAEQAwgDAaABQAGAAACADIC+gCQCBAABgALIAEACQBIACA2gBQADgFAEgBQAhgNA+gEQBEgDAdgJQAIgCACAHQABAGgFAFQgVATgnAIIAkgCIAegCIAAgBQAFgJAHgBQBpgIBqgEQA4gDArAAIAyACIBGABQAJAAAAAGIAQADIBPABIAigIQBEgLAvAJQAJACgFAJIAAAAICNACIAXgBQAEAAACACIBAABIA9gDIDNgJQBNgLBmAHIAGABIABAAIB+AMIAcADIAegIIAAgBQAFgJAHgBIAIgBIACgCQAOgFAKgJQAHgFAGADIACgIIACgOQABgGAIgEQAIgEADAHQAKAWgJAQQACAIAEAGIAwgBIAYgBQASgIARgMQgCgLABgNQABggAQgrQACgGAJgCQAIgCABAJQABAdAIAsIAIAtIAMAAQAEAAACABQAGgJgDgNIgBgCQgBgHAJgEQAJgFAEAIQAOAZgPARIAqgCQAwgBAhAEQAIABgDAJIgBACQAkABAdADQAJABgEAKIgBACIA/gBQAKAAgDAKQgDAKgIABIhfAAQg2AAgogFQgHAAABgGIhPgGQgJAAAEgKIABgBIAAgBIgCAAIgBABQgIAEgMADQgIACgCgGQgVAEgcACQgoADhEgBIgHAAIgEAAIAAAAIg7AAQgFAAgCgCIgigCIgEAAIgJgBIgKgBIhJgFQgEAHgIAAIhrAAIgcADIgCAFQgGAJgIgBQhHgHgxADQgKABADgJIgeAAQgEAAgCgBIgCABQg4AYhPAAIgEAAgASdBGIBFAGQA0ADAqgIIh1gDIguACgAdlAbIAEAAIABgBIgFgBgEAgngACIgBgIIgDgTIgBAMIAAAPIAEAAIABAAIAAAAg");
	this.shape.setTransform(242.2,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,484.4,19.4), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AgyAIQgDgKAIgCQAqgMAtgBQAJAAABAMQABAKgJAAQgsABgmALIgDABQgGAAgDgKg");
	this.shape.setTransform(5.1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,10.4,3.6), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AAiASQgVgTguAEQgIABgDgKQgDgLAIgBQA3gGAaAYQAGAFgDAKQgCAGgEAAQgCAAgDgDg");
	this.shape.setTransform(4.6,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0.1,9.2,4.1), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("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");
	this.shape.setTransform(244.2,54.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,488.4,109.8), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("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");
	this.shape.setTransform(242.9,36.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0.1,485.8,72.5), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87C4F").s().p("AjGB6QhYgMhNgbQgGgCACgIQACgHAFgDQA/gxAggVQA3gnAygPQAngMBjgTQBYgSAwgSQAJgEAAALQgBAMgIACQgwAThPAQQhnAVgbAHQg2APg6AmQgcATg1AnQB5AmCXADQAnAABJgNIgoABQhfAAgTgBQhHgGgkgaQgfgXAKgcQAKgYAigOQAZgKAigGIA9gJQAegEAogLIBGgTQAagHAVgCQACgJAJAAQAIAAgBAHIAMAAQApAAAhASQAZAOAbAbQAPAPAeAgQAGAHAZATQAVATgCANQgBANgSAGQgFACgXAEQgiAHhDgCQhEgCgiAGIhJARQgsAKgdABIglAAQhDAAhCgIgABGg/QhhAZhdAQIgyAJQghAIgKANQgLAQARAOQALAKAVAHQBEAYBugDIC2gGIAhABQAXAAAFgCQAHgEALgSQAKgTAAgEQAAgGgMgOQgLgMgOgGQgggNhIACIgTAAIgGAQQAfgFARABQAjADAUAUQAFAFgDAHQgCAIgGABQiDAYipgYQgHgBABgJQABgIAGgDQA9goBbgOQAXgEAWgBIAHgXQgSADgWAGgAEmAUQANAlgXATIAIgBQA0gKAFAEQgDgFgUgSIgdgZIgGgHIADAGgAg7AMQCBAQBogOQgLgFgPAAQgRgBgmAGQgGABgCgFQgCgFACgFIAKgXQhcAHg+AcgADvgmQgUgQgUgJQgdgNgjACIgGAAIgHAYQA0gCAvAJQAKACAIADIAAAAg");
	this.shape.setTransform(36.9,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,73.7,26.1), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("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");
	this.shape.setTransform(244.4,89.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,488.9,178.5), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EglhANbIAA61MBLDAAAIAAa1g");
	this.shape.setTransform(240.2,85.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,480.4,171.7), null);


(lib.pickaxe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pickaxeaiAssets();
	this.instance.parent = this;
	this.instance.setTransform(-30,-24,0.306,0.306);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pickaxe, new cjs.Rectangle(-30,-24,75,97.1), null);


(lib.goToInstructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("AgkAuIAAhbIBJAAIAABbgAgVAjIArAAIAAhFIgrAAg");
	this.shape.setTransform(37.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003399").s().p("AABAaIAAgnIgQAAIAAgMIAfAAIAAAzg");
	this.shape_1.setTransform(29.2,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003399").s().p("AghA+IAAhCIABgLIADgIIAMAAIgBAIIgBAKIAABDgAgEASQAHAAAGgDQAGgDADgGQADgGAAgHIAAgrIg4AAIAAgLIBHAAIAAA2QAAAKgFAJQgFAIgJAFQgKAFgLAAg");
	this.shape_2.setTransform(22.2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003399").s().p("AAVAuIAAg4QAAgMgFgGQgFgFgLgBIgUAAIAABQIgPAAIAAhbIAjAAQASAAAIAJQAJAIAAASIAAA4g");
	this.shape_3.setTransform(12.5,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003399").s().p("AgZAsQgNgCgLgGIAAhSIAPAAIAABKQAHAEAJACQAIABAHAAQAKAAAKgCQAIgEAFgGQAGgHAAgKIAAg0IANAAIAAA2QAAANgGAIQgIAJgMAFQgLAEgOAAQgLAAgMgDgAgMATQACgCACgGQABgFAAgGIAAguIAOAAIAAArQAAAHgCAGQgCAGgDAEg");
	this.shape_4.setTransform(1.2,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003399").s().p("AABAvIAAgMIAYAAIAAgsQAAgMgGgGQgFgHgLAAQgGAAgFAGQgFAGgCAKIgGA7IgPAAIAIg6QAAgGADgGQADgFAEgEIABgBIAAAAIgJACIgKADIgCgLQAIgDAMgCIATgCQATAAAKAKQAKAKgBATIAAA2g");
	this.shape_5.setTransform(-10.3,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003399").s().p("AAQA+IAAhwIgtAAIAAgLIA7AAIAAB7g");
	this.shape_6.setTransform(-23.6,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003399").s().p("AABAaIAAgnIgQAAIAAgMIAfAAIAAAzg");
	this.shape_7.setTransform(-30,-1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003399").s().p("AAZAuIgog3QgIAEAAANIAAAmIgPAAIAAgiQAAgMAFgGQAEgIAIgDIgTgcIAQAAIAbAnIAWgnIAQAAIgdAzIAdAog");
	this.shape_8.setTransform(-36.9,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#003399").p("Am6AAIN1AA");
	this.shape_9.setTransform(0,8.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003399").s().p("AgnAvIAAhdIBPAAIAABdgAgOAcIAeAAIAAg3IgeAAg");
	this.shape_10.setTransform(39.6,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003399").s().p("AgEAbIAAgiIgPAAIAAgTIAnAAIAAA1g");
	this.shape_11.setTransform(31.2,-1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003399").s().p("AglA/IAAhAQAAgOAFgGIAUAAQgCAGAAALIAABDgAgEAMQAIAAAGgGQAFgGAAgKIAAghIg1AAIAAgTIBOAAIAAA0QgBAMgFAJQgFAJgKAFQgKAFgNABg");
	this.shape_12.setTransform(23.6,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003399").s().p("AAPAvIAAg7QAAgPgNAAIgPAAIAABKIgZAAIAAhdIAoAAQASAAAKAJQAJAJAAASIAAA5g");
	this.shape_13.setTransform(13.4,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003399").s().p("AgdAtQgOgDgNgGIAAhTIAYAAIAABGQAHADAIABQAHACAHAAQAQAAAKgHQAKgHAAgPIAAgvIAYAAIAAAyQAAAOgIALQgIAKgOAFQgNAFgQAAQgNAAgOgDgAgOAPQABgCABgGIABgLIAAgrIAWAAIAAAmQAAAIgBAGQgCAHgDADg");
	this.shape_14.setTransform(1.3,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003399").s().p("AADAwIAAgTIAQAAIAAgkQAAgKgDgFQgEgFgHAAQgFAAgEAFQgEAFgBAKIgGA3IgYAAIAGg0QABgGADgGQACgFADgDIABgBIAAgBIgHACIgHACIgGgSQAJgDANgCQALgCAKAAQAVAAAMALQALALAAAVIAAA0g");
	this.shape_15.setTransform(-11.1,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003399").s().p("AAIA/IAAhqIgnAAIAAgTIA/AAIAAB9g");
	this.shape_16.setTransform(-24.8,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003399").s().p("AgEAbIAAgiIgPAAIAAgTIAmAAIAAA1g");
	this.shape_17.setTransform(-31.8,-1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003399").s().p("AATAvIgigyQgDADAAAFIAAAqIgYAAIAAgfQAAgNAEgHQAEgIAJgEIgUgeIAbAAIAVAhIAQghIAcAAIgcA1IAbAog");
	this.shape_18.setTransform(-39.4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-13.7,90.6,27.5);


(lib.goToAbout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("AgrAuIAAgMIAGAAQAHAAADgDQADgEAAgHIAAgdQAAgHACgGQACgIADgEIgRAAIAAgMIApAAQATAAAJAJQAJAJAAARIAAA5IgPAAIAAg5QAAgMgFgGQgFgFgLAAIgMAAQgDAEgBAHQgCAHAAAGIAAAfQAAAMgGAHQgGAGgMABIgJgBg");
	this.shape.setTransform(13.4,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003399").s().p("AgBAuIAAhQIgKAAIAAgLIAXAAIAABbg");
	this.shape_1.setTransform(6.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003399").s().p("AAHAuIAAhQIgrAAIAAgLIBJAAIAAALIgPAAIAABQg");
	this.shape_2.setTransform(0.1,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003399").s().p("AgBAuIAAhQIgKAAIAAgLIAXAAIAABbg");
	this.shape_3.setTransform(-6.7,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003399").s().p("AAZAuIgog3QgJAEAAANIAAAmIgNAAIAAgiQAAgMADgGQAFgIAIgDIgUgcIAQAAIAcAnIAXgnIAPAAIgdAzIAdAog");
	this.shape_4.setTransform(-13.6,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#003399").p("Ai5AAIFzAA");
	this.shape_5.setTransform(0.4,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003399").s().p("AgtAuIAAgTIAFAAQAMABAAgMIAAgWIAAgLQACgHACgDIgOAAIAAgTIAuAAQATAAAJAJQAKAIAAASIAAA5IgYAAIAAg7QAAgIgEgDQgDgEgHABIgKAAIgCAJIgBAKIAAAaQAAAJgEAHQgDAGgGAEQgHAEgJgBIgLgBg");
	this.shape_6.setTransform(14.6,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003399").s().p("AgHAvIAAhKIgIAAIAAgTIAfAAIAABdg");
	this.shape_7.setTransform(6.9,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003399").s().p("AAAAvIAAhKIgnAAIAAgTIBQAAIAAATIgRAAIAABKg");
	this.shape_8.setTransform(0.2,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003399").s().p("AgHAvIAAhKIgIAAIAAgTIAfAAIAABdg");
	this.shape_9.setTransform(-7.3,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003399").s().p("AATAvIgigyQgDADAAAFIAAAqIgXAAIAAgfQAAgNADgHQAEgIAJgEIgVgeIAcAAIAVAhIAQghIAcAAIgcA1IAbAog");
	this.shape_10.setTransform(-14.7,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-13.7,42.2,27.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("בחר", "bold 17px 'Verdana'", "#660000");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(50.1,5.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AoWCgIAAk/IQtAAIAAE/g");
	this.shape.setTransform(52.5,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,1.1,107,32), null);


(lib.modal_btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("לחזור לבחירת נושא", "16px 'Heebo'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 213;
	this.text.parent = this;
	this.text.setTransform(0,-17.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EgtTADWIAAmrMBanAAAIAAGrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-21.3,580,42.8);


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
	this.shape.graphics.f("#4CAF50").s().p("AopDyIAAnjIRTAAIAAHjg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-24.2,110.8,48.4);


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



(lib.Path_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBlQgQgBgMgKQgOgJgEgPQgIgOAAgRQACgeALgXQAMgZAXgYQAMgMAQgIQAbgNAWgBQAVgBARAMIAOAPQAQAVgHArQgEASgLAQQgIARgQAOIgGAFQgUAbgjAMQgKAEgKAAIgMgBg");
	this.shape_1.setTransform(9.5,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14_1, new cjs.Rectangle(0,0,18.9,20.4), null);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2D3A2").s().p("AglCDQgogDgdgbQgZgYgLghQgLgjAIggQAKgmAigUQAVgMAagEQgCgCgBgEQgDgMAJgDQA5gTA2ALQBCANASA2QARAxgoA0QghArg0AdQggARggAAIgJAAgAgdhjQAKAAABANQABAMgKAAQgrABgcATQghAXABAoQACAiAYAcQAXAcAiAGQAxAJA5gpQA3goANgwQARg/hJgTQgbgHgbAAQgXAAgXAFg");
	this.shape_1.setTransform(14.9,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2836E").s().p("Ag5BzQgxgOgWgzQgXgyAYgoQAbguBJAAIgUgUQAygTAxAJQAvAIAYAdQAZAfgMAoQgOAtg8AuQgvAkgrAAQgOAAgPgEg");
	this.shape_2.setTransform(14.9,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,29.9,26.2), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEARQgEgEgCgHQgCgGgCgCQgHgIALgGQAKgHAFAHQAEAFACAGIAEAIQAHAIgLAGQgFAEgEAAQgDAAgDgEg");
	this.shape_1.setTransform(1.7,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,3.6,4.1), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAQIAAgdQAAgJALgBQAMgBAAAJIAAAdQAAAJgMABIgCAAQgJAAAAgIg");
	this.shape_1.setTransform(1.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,2.5,4.9), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2D3A2").s().p("AAUCDQglgEgkgZQgzgigZgrQgig2AbgvQAZgrA8gJQAygIAzASQAJADgBAMQgBAFgBACQAdAFAWAPQAlAYAFAtQAEAhgPAgQgPAhgbAUQgdAUgjAAIgMAAgAg/hkQhHAQAGA7QACAfAgAiQAYAaAjAVQApAYAmgFQAigFAYgbQAZgbADgiQAEgpgggYQgcgUgsgBQgKgBAAgMQgBgNAJABIAEAAQgZgGgZAAQgXAAgWAEg");
	this.shape.setTransform(14.9,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2836E").s().p("Ag9BTQg8gugOgtQgNgoAagfQAYgdAvgIQAxgJAyATIgUAUQBJAAAbAuQAXAogWAyQgWAzgyAOQgOAEgOAAQgrAAgvgkg");
	this.shape_1.setTransform(15,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,29.9,26.3), null);


(lib.board_no_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6D6E70").ss(1.4).p("AgPAAQAAAWAFAQQAEAQAGAAQAHAAAFgQQAEgQAAgWQAAgVgEgQQgFgQgHAAQgGAAgEAQQgFAQAAAVg");
	this.shape.setTransform(118.3,-121.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6D6E70").ss(1.4).p("AAPAAQAAAWgEAQQgFAQgGAAQgFAAgEgQQgEgQAAgWQAAgVAEgQQAEgQAFAAQAGAAAFAQQAEAQAAAVg");
	this.shape_1.setTransform(118.4,-112.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6D6E70").ss(1.4).p("AgPAAQAAAWAFAQQAEAQAGAAQAHAAAFgQQAEgQAAgWQAAgVgEgQQgFgPgHAAQgGAAgEAPQgFAQAAAVg");
	this.shape_2.setTransform(118.3,-102.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6D6E70").ss(1.4).p("AgPAAQAAAWAFAQQAEAQAGAAQAHAAAFgQQAEgQAAgWQAAgVgEgQQgFgPgHAAQgGAAgEAPQgFAQAAAVg");
	this.shape_3.setTransform(118.3,-92.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6D6E70").ss(1.4).p("AAPAAQAAAWgEAQQgFAQgGAAQgFAAgEgQQgEgQAAgWQAAgVAEgQQAEgQAFAAQAGAAAFAQQAEAQAAAVg");
	this.shape_4.setTransform(118.4,-83.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#6D6E70").ss(1.4).p("AgPAAQAAAWAFAQQAEAQAGAAQAHAAAFgQQAEgQAAgWQAAgVgEgQQgFgPgHAAQgGAAgEAPQgFAQAAAVg");
	this.shape_5.setTransform(118.3,-73.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#6D6E70").ss(1.4).p("AAPAAQAAAWgEAQQgFAQgGAAQgFAAgEgQQgEgQAAgWQAAgVAEgQQAEgQAFAAQAGAAAFAQQAEAQAAAVg");
	this.shape_6.setTransform(118.4,-64.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#6D6E70").ss(1.4).p("AAdAAQAAAcgIATQgJAUgMAAQgLAAgIgUQgJgUAAgbQAAgbAJgTQAIgUALAAQAMAAAJAUQAIATAAAbg");
	this.shape_7.setTransform(118.3,-54.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#6D6E70").ss(1.4).p("AgQAAQAAAWAFAQQAFAQAGAAQAHAAAFgQQAFgQAAgWQAAgVgFgQQgFgQgHAAQgGAAgFAQQgFAQAAAVg");
	this.shape_8.setTransform(-119,-120.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#6D6E70").ss(1.4).p("AAPAAQAAAWgFAQQgEAQgGAAQgFAAgEgQQgFgQAAgWQAAgVAFgQQAEgQAFAAQAGAAAEAQQAFAQAAAVg");
	this.shape_9.setTransform(-119,-111.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#6D6E70").ss(1.4).p("AgQAAQAAAWAFAQQAFAQAGAAQAHAAAFgQQAFgQAAgWQAAgVgFgQQgFgQgHAAQgGAAgFAQQgFAQAAAVg");
	this.shape_10.setTransform(-119,-101.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#6D6E70").ss(1.4).p("AgQAAQAAAWAFAQQAFAQAGAAQAHAAAFgQQAFgQAAgWQAAgVgFgQQgFgQgHAAQgGAAgFAQQgFAQAAAVg");
	this.shape_11.setTransform(-119,-91.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#6D6E70").ss(1.4).p("AAPAAQAAAWgFAQQgEAQgGAAQgFAAgEgQQgFgQAAgWQAAgVAFgQQAEgQAFAAQAGAAAEAQQAFAQAAAVg");
	this.shape_12.setTransform(-119,-82.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#6D6E70").ss(1.4).p("AgQAAQAAAWAFAQQAFAQAGAAQAHAAAFgQQAFgQAAgWQAAgVgFgQQgFgQgHAAQgGAAgFAQQgFAQAAAVg");
	this.shape_13.setTransform(-119,-72.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#6D6E70").ss(1.4).p("AAPAAQAAAWgFAQQgEAQgGAAQgFAAgEgQQgFgQAAgWQAAgVAFgQQAEgQAFAAQAGAAAEAQQAFAQAAAVg");
	this.shape_14.setTransform(-119,-63.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#6D6E70").ss(1.4).p("AAdAAQAAAcgJATQgIAUgMAAQgLAAgJgUQgIgTAAgcQAAgaAIgUQAJgUALAAQAMAAAIAUQAJAUAAAag");
	this.shape_15.setTransform(-119,-53.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#896340").s().p("AgSOEIAD8HIAiAAIgDcHg");
	this.shape_16.setTransform(242.9,36.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8C6542").s().p("Egl4gAGMBLxgARIgCAvMhLvAAAg");
	this.shape_17.setTransform(0.3,-50.7);

	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(1.1,37.7,1,1,0,0,0,240.2,85.9);
	this.instance.alpha = 0.398;

	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.3,38,1,1,0,0,0,244.5,89.2);
	this.instance_1.alpha = 0.039;

	this.instance_2 = new lib.Path_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-89.4,-0.5,1,1,0,0,0,36.9,13);
	this.instance_2.alpha = 0.109;

	this.instance_3 = new lib.Path_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.3,-11.7,1,1,0,0,0,242.9,36.3);
	this.instance_3.alpha = 0.109;

	this.instance_4 = new lib.Path_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,70.6,1,1,0,0,0,244.2,54.9);
	this.instance_4.alpha = 0.109;

	this.instance_5 = new lib.Path_7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-159.5,-45.7,1,1,0,0,0,4.5,2.1);
	this.instance_5.alpha = 0.328;

	this.instance_6 = new lib.Path_8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-219,-47.1,1,1,0,0,0,5.1,1.8);
	this.instance_6.alpha = 0.648;

	this.instance_7 = new lib.Path_10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80.5,-46.7,1,1,0,0,0,71.2,2.5);
	this.instance_7.alpha = 0.648;

	this.instance_8 = new lib.Path_11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(94.4,-44.1,1,1,0,0,0,147.7,5.6);
	this.instance_8.alpha = 0.648;

	this.instance_9 = new lib.Path_12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-51.6,-44.8,1,1,0,0,0,84.7,5.9);
	this.instance_9.alpha = 0.648;

	this.instance_10 = new lib.Path_13();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-185.9,-36.4,1,1,0,0,0,54.3,12.3);
	this.instance_10.alpha = 0.648;

	this.instance_11 = new lib.Path_14();
	this.instance_11.parent = this;
	this.instance_11.setTransform(233.3,38.1,1,1,0,0,0,9.1,86.3);
	this.instance_11.alpha = 0.648;

	this.instance_12 = new lib.Path_15();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-232.2,38,1,1,0,0,0,9,86.4);
	this.instance_12.alpha = 0.648;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A87C4F").ss(2.8).p("EAlpANmMhLRAAAIAA7LMBLRAAAg");
	this.shape_18.setTransform(0.3,38.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CDB388").s().p("EgloANmIAA7LMBLRAAAIAAbLg");
	this.shape_19.setTransform(0.3,38.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.board_no_txt, new cjs.Rectangle(-244.8,-128.1,489.6,255.4), null);


(lib.questionBoard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// board.ai
	this.questionText = new cjs.Text("", "12px 'Heebo'", "#FFFFFF");
	this.questionText.name = "questionText";
	this.questionText.textAlign = "center";
	this.questionText.lineHeight = 20;
	this.questionText.lineWidth = 420;
	this.questionText.parent = this;
	this.questionText.setTransform(1,100);

	this.instance = new lib.board_no_txt();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,126.9,1,1,0,0,0,-0.1,-0.3);

	this.instance_1 = new lib.Path_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.4,245.4,1,1,0,0,0,242.2,9.7);
	this.instance_1.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.questionText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.questionBoard, new cjs.Rectangle(-244.8,-0.6,489.6,255.8), null);


(lib.modalWindow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.modal_btn2();
	this.instance.parent = this;
	this.instance.setTransform(30,167.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.modal_btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,36.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.modalText = new cjs.Text("", "20px 'Heebo'", "#CCCCCC");
	this.modalText.name = "modalText";
	this.modalText.textAlign = "center";
	this.modalText.lineHeight = 31;
	this.modalText.lineWidth = 453;
	this.modalText.parent = this;
	this.modalText.setTransform(30,-146.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgtTAbKMAAAg2TMBanAAAMAAAA2Tg");
	this.shape.setTransform(30,-27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.modalText},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.modalWindow, new cjs.Rectangle(-260,-201.6,580,390.4), null);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startbtn = new lib.Symbol1();
	this.startbtn.parent = this;
	this.startbtn.setTransform(-45.2,11.3,0.737,0.605,0,0,0,52.5,17.1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, בחר נושא, , חשבון, 1, היסטוריה, 2, אנגלית, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(50,11,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-84.6,-0.5,185.2,23), null);


(lib.gamelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEC198").s().p("AgWAaQgMgHgIgPQgFgHAIgJQAJgJAEAKQANAVAPgDQARgDAGgWQAEgNAIABQAEAAADAEQACAEgBAEQgMAogcAIQgFABgEAAQgKAAgIgFg");
	this.shape.setTransform(-28.4,97.8);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(-82,57.1,1,1,0,0,0,15,13.1);
	this.instance.alpha = 0.32;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CEC198").s().p("AgvAbQgRgTADgcQABgLAKgBQAJgCgBAMQgCAWANAKQAMAKASgCQASgCAMgNQAOgNAAgUQgBgLAKgCQAKgBAAAMQABAdgSAVQgSAWgcADIgJABQgXAAgOgRg");
	this.shape_1.setTransform(-35.1,77.6);

	this.instance_1 = new lib.Path_3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61.4,9.4,1,1,0,0,0,1.2,2.4);
	this.instance_1.alpha = 0.609;

	this.instance_2 = new lib.Path_4_1();
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

	this.instance_3 = new lib.Path_11_1();
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

	this.instance_4 = new lib.Path_14_1();
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


(lib.navigation = function(mode,startPosition,loop) {
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

	this.gameName = new cjs.Text("", "bold 16px 'Heebo'", "#333333");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "center";
	this.gameName.lineHeight = 26;
	this.gameName.lineWidth = 349;
	this.gameName.parent = this;
	this.gameName.setTransform(0,11.1);

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

}).prototype = getMCSymbolPrototype(lib.navigation, new cjs.Rectangle(-481,-1,962,62), null);


// stage content:
(lib.goldy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//שימו לב, מערך זה משמש רק להצגת הנושאים בתוך תיבת הטקסט
		//את הערכים שמוצגים בקומבו עצמו, יש להגדיר בתוך הקומפוננטה - לחיצה כפולה עליה בלייבררי, המקרה שלנו:
		//forcomb -> click on the combobox componenet -> component parameters
		//var subjects = ["לא בחרת נושא", "חשבון", "היסטוריה", "אנגלית"];
		//משתנה שיעזור לברר איזה ערך מסומן בכל פעם בקומבו בוקס. עם הפתיחה מופיע הערך הראשון ולכן הערך ההתחלתי הוא 0
		
		var mychoice = 0;
		
		var startModalWindow = new lib['modalWindow']();
		startModalWindow.x = 480;
		startModalWindow.y= 250;
		startModalWindow.modalText.color = "#333333";
		startModalWindow.modalText.font = "32px Arial";
		startModalWindow.visible = false;
		stage.addChild(startModalWindow);
		
		var fl_TF = new createjs.Text();
		fl_TF.x = 200;
		fl_TF.y = 100;
		fl_TF.color = "#ff7700";
		fl_TF.font = "20px Arial";
		stage.addChild(fl_TF);
		
		//הוספת הקומבו לבמה
		var forcombo = new lib.forcomb();
		forcombo.x = 480;
		forcombo.y = 150;
		stage.addChild(forcombo);
		//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
		forcombo.startbtn.alpha = 0.3;
		
		//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
		$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
		startModalWindow.instance.on("click", function() {
			toggleElementVisibility(startModalWindow);
			$("#mycb").show();
			toggleElementVisibility(forcombo);
		});
		
		startModalWindow.instance_1.on("click", function(){
			toggleElementVisibility(startModalWindow);
			startGame();
		});
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			fl_TF.text = ""; //ניקוי הבחירה הקודמת
			//שימרת הערך שנבחר בקומבו
			//console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", callStartModal);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", callStartModal);
			}
		}
		
		//לחיצה על בחר
		function fl_ClickToPosition() {
			fl_TF.text = subjects[mychoice];
		}
		function callStartModal() {
			$("#mycb").hide();
			toggleElementVisibility(forcombo);
			toggleElementVisibility(startModalWindow);
			startModalWindow.modalText.text = "You have chosen: "+subjects[mychoice];
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// navigation
	this.instance = new lib.navigation();
	this.instance.parent = this;
	this.instance.setTransform(480,30,1,1,0,0,0,0,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(479.5,294.5,961,61);
// library properties:
lib.properties = {
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/goldy_atlas_.png?1517939504412", id:"goldy_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1517939504585", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1517939504585", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1517939504585", id:"an.ComboBox"}
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