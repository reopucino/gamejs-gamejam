export class MainScene extends Phaser.Scene {
    constructor(){
        super({
            key:"MainScene"
        });
    }
    preload():void{
        
    }
    create():void{
        let img =this.add.sprite(0, 0, "myimg");
        img.setDisplayOrigin(0,0);
    }
}
