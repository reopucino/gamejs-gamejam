import { Player } from "./player";

const MAXSPEED = 150;
export class Enemy extends Phaser.GameObjects.Image{
    private player:Player;
    private health : number = 3;
    constructor(params){
        super(params.scene, params.x, params.y, params.key, params.frame)

        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.player = params.player;
    }


    update():void{
        //getPLayerPosition
        if(this.health<=0)return;
        let p = {x:this.player.x, y:this.player.y};
        let _angleTPlayer = Phaser.Math.Angle.BetweenPoints(p, {x:this.x, y:this.y})+Math.PI;
        this.setRotation(_angleTPlayer);
        if(Phaser.Math.Distance.Between(this.x, this.y, this.player.x, this.player.y)< 40){
            this.body.setVelocity(0, 0);
            console.log("damage in");
        }
        else{
            this.body.setVelocity(Math.cos(_angleTPlayer)*MAXSPEED,Math.sin(_angleTPlayer)*MAXSPEED );
        }

        this.checkCollideBullet();
    }

    moveTowardPLayer():void{

    }

    checkCollideBullet():void{
        let arr = this.player.bullets;
        arr.forEach(item=>{
            if(Phaser.Math.Distance.Between(item.x, item.y, this.x, this.y)<40){
                let getLive = item.getData('live');
                if(getLive){
                    item.setData('live', false);
                    item.destroy();
                    this.health --;
                    if(this.health<=0)this.destroy();
                }
            }
        })
    }
}
