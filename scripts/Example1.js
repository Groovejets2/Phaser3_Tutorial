class Example1 extends Phaser.Scene {
    constructor() {
        super({key:"Example1"});
    }

    preload(){
        this.load.image('FREE','assets/FREE.png');
    }

    create(){
        this.image = this.add.image(400,300,'FREE')
    }
}