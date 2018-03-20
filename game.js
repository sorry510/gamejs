'user strict'
class Game {
	constructor(config) {
		this.canvas = document.querySelector('#'+config.id);
		this.ctx = this.canvas.getContext('2d');
		this.actions = [];
		this.control = {
			fps: 120,
			left: ['a', false],
			right: ['d', false],
			fire:[' ', false],
			pause:['p', false]
		};
		// this.blocks = [];
	}
	init(blocks) {
		var _this = this;
		blocks.forEach(function(block, index) {
			// _this.blocks.push = block;
			_this.drawRect(block);
		});
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
	update(block, callback) {
		this.drawClear(block);
		callback();
		this.drawRect(block);
		return this;
	}
	border(ball){
		if(ball.x + ball.width > this.canvas.width || ball.x < 0) {
			ball.turnSpeedX();
		} else if (ball.y + ball.height > this.canvas.height || ball.y < 0) {
			ball.turnSpeedY();
		}
		return this;
	}
	// registerAction(actions, callback) {
	// 	var _this = this;
	// 	actions.forEach(function(action, index) {
	// 		_this.actions[action] = callback;
	// 	});
	// }
	// getActions() {
	// 	return this.actions;
	// }
	collision(o1, o2) {
		//没有区别左右还是上下碰撞
		if(o2.x < o1.x + o1.width &&
			 o2.x + o2.width > o1.x &&
			 o2.y < o1.y + o1.height &&
			 o2.y + o2.height > o1.y){
			return true;
		}
		return false;
	}
	gameOver(ball) {
		if(ball.y + ball.height >= this.canvas.height + 1) {
			return true;
		}
		return false;
	}
}