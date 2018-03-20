'user strict'
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
		if(this.x < 0) {
			this.x = 0;
		} else if(this.x + this.width > 400) {
			this.x = 400 - this.width;
		} else {
			if(ctrl.left[1]) {
				this.x -= this.speedX;
			} else if(ctrl.right[1]) {
				this.x += this.speedX;
			}
		}
	}
}