'user strict'
class Block {
	constructor(config) {
		this.width = config.width || 0;
		this.height = config.height || 0;
		this.x = config.x || 0;
		this.y = config.y || 0;
		this.color = config.color || '#000000';
	}
	test() {
		log('test');
	}
}

class Paddle extends Block {
	constructor(config) {
		super(config);
		this.speedX = config.speedX || 5;
	}
	setSpeedX(speedX) {
		this.speedX = speedX;
	}
	getSpeedX() {
		return this.speedX;
	}
	move(ctrl) {
		//ctrl 来自game的控制{left:['a',false], right:['b',false]}
		if(ctrl.left[1]) {
			if(this.x > 0) {
				this.x -= this.speedX;
			}
		} else if(ctrl.right[1]) {
			if(this.x < 400 - this.width) {
				this.x += this.speedX;
			}
		}
	}
}

class Ball extends Block {
	constructor(config) {
		super(config);
		this.speedX = config.speedX || 1;
		this.speedY = config.speedY || -1;
	}
	move(fired) {
		if(fired){
			this.x += this.speedX;
			this.y += this.speedY;
		}
		return this;
	}
	turnSpeedX(){
		this.speedX *= -1;
	}
	turnSpeedY(){
		this.speedY *= -1;
	}
}

class Brick extends Block {
	constructor(config) {
		super(config);
		this.alives = config.alives || 1;
	}
	life(){
		this.alives --;
		return this.alives;
	}
}

