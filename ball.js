'user strict'
class Ball extends Block {
	constructor(config) {
		super(config);
		this.speedX = config.speedX || 5;
		this.speedY = config.speedY || -5;
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