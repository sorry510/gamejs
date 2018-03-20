class Game {
	constructor(config) {
		this.canvas = document.querySelector('#'+config.id);
		this.ctx = this.canvas.getContext('2d');
		this.actions = [];
		this.control = {
			left: ['a', false],
			right: ['d', false]
		};
		this.blocks = [];
	}
	init(block) {
		this.blocks.push = block;
		this.drawRect(block);
		return this;
	}
	setControl(control) {
		this.control = control;
	}
	getControl() {
		return this.control;
	}
	drawRect(block) {
		this.ctx.fillStyle = block.color;
		this.ctx.fillRect(block.x, block.y, block.width, block.height);
		return this;
	}
	drawClear(block) {
		var x = block.x || 0;
		var y = block.y || 0;
		var width = block.width || this.canvas.width;
		var height = block.height || this.canvas.height;
		this.ctx.clearRect(x, y, width, height);
		return this;
	}
	update() {
		var _this = this;
		blocks.forEach(function(block, index) {
			_this.drawClear(block);
			_this.drawRect(block);
		});
	}
	registerAction(actions, callback) {
		var _this = this;
		actions.forEach(function(action, index) {
			_this.actions[action] = callback;
		});
	}
	getActions() {
		return this.actions;
	}
}