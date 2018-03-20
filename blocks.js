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

