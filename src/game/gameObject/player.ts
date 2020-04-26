import { ObjectSave } from "../../custom";

const MOVEMENTSPEED  = 120;
const BULLETFRAME = "bulletBlueSilver_outline";
const BULLETFRAMEPOLOS = "bulletBlue";
const BULLETSPEED = 880;
export class Player extends Phaser.GameObjects.Image{
    private leftKey:Phaser.Input.Keyboard.Key;
    private rightKey:Phaser.Input.Keyboard.Key;
    private upKey:Phaser.Input.Keyboard.Key;
    private downKey:Phaser.Input.Keyboard.Key;
    private replayStart:boolean;
    public bullets:Array<any>;
    constructor(params){
        super(params.scene, params.x, params.y, params.key, params.frame);

        this.scene.physics.world.enable(this);
        this.leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.upKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.downKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        
        this.scene.add.existing(this);
        //this.testP = {};
        this.scene.input.on("pointermove", this.changeRotation, this);
        this.scene.input.on('pointerdown', this.clickDown, this);
        this.scene.input.on('pointerdown', this.clickUp, this);
        this.bullets = new Array();
    }

    update() :void{
        if(this.leftKey.isDown || this.rightKey.isDown){
            if(this.leftKey.isDown){
                this.body.velocity.x = -MOVEMENTSPEED;
            }
            if(this.rightKey.isDown){
                this.body.velocity.x = MOVEMENTSPEED;
            }
        }
        else{
            this.body.setVelocityX(0);
        }
        if(this.downKey.isDown || this.upKey.isDown){
            if(this.downKey.isDown){
                this.body.velocity.y = MOVEMENTSPEED;
            }
            if(this.upKey.isDown){
                this.body.velocity.y = -MOVEMENTSPEED;
            }
        }
        else{
            this.body.setVelocityY(0);
        }
    }
    changeRotation(pointer):void{
        if(this.replayStart)return;
        this.setRotation(Phaser.Math.Angle.Between(this
            .x, this.y, pointer.x, pointer.y));
    }
    clickDown(pointer):void{
        //console.log("pointer down");
        let b = this.scene.physics.add.image(this.x, this.y, "all", BULLETFRAME);
        let randAng = Phaser.Math.DegToRad(-this.angle+90);
        let _xspeed = Math.sin(randAng)*BULLETSPEED;
        let _yspeed = Math.cos(randAng)*BULLETSPEED;
        b.setData({live:true})
        b.angle = this.angle+90;//Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y)+90;
        b.setVelocity(_xspeed, _yspeed);
        this.bullets.push(b);
    }
    clickUp(pointer):void{
        //console.log("pointer up");
        
    }
}