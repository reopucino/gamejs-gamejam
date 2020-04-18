/**
 * HELO HERE
*/
export class GameScene extends Phaser.Scene {
    private leftKey:Phaser.Input.Keyboard.Key;
    private rightKey:Phaser.Input.Keyboard.Key;
    private upKey:Phaser.Input.Keyboard.Key;
    private downKey:Phaser.Input.Keyboard.Key;
    constructor(){
        super({
            key:"GameScene"
        });
    }
    preload():void{
        
    }
    create():void{
        //let img =this.add.sprite(20, 20, "tempobj", 0);

        let bodyPlayer = this.add.sprite(80,80, 'all', 'pbody');

        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        //next todo 
        /*
        control player
        can shoot
        can replay
        */

        //img.setDisplayOrigin(0,0);
        //this.cameras.main.startFollow(img, true, 0.3, 0.3);
        //this.cameras.main.setViewport(0,0, 360, 360);
        //this.cameras.main.setZoom(2);
    }

    update():void{
        if(this.leftKey.isDown){
            console.log("leftKeyDown");
        }
        if(this.downKey.isDown){
            console.log("downKeyDown")
        }
        if(this.upKey.isDown){
            console.log("upKeyDown")
        }
        if(this.rightKey.isDown){
            console.log("rightKeyDown")
        }
    }
}
