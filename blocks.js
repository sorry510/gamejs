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
		log('move');
	}
}
class Ball extends Block {
	
}
class brick extends Block {
	
}

