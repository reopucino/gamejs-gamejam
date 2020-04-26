import {Player} from "../gameObject/player";
import { Enemy } from "../gameObject/enemy";

export class GameScene extends Phaser.Scene {
    private player : Player;
    private enemies : Array<Enemy>
    constructor(){
        super({
            key:"GameScene"
        });
        this.enemies = new Array();
    }
    preload():void{
        
    }
    create():void{
        //this.physics.world.setBounds(0,0, 640, 480);
        //let img =this.add.sprite(20, 20, "tempobj", 0);
        //this.physics.world.enable(this);
        //console.log(this.physics);
        //this.physics.world.enable(this.bodyPlayer);
        //this.bodyPlayer = this.physics.add.existing(bodyPlayer);
        this.player = new Player({scene:this, x:80, y:80, key:"all", frame:"survivor1_gun"});
        this.addNewEnemy(1);
    }

    addNewEnemy(howmany:number):void{
        for(let i=0; i<howmany; i++){
            let randPos = {x:Math.random()*800, y:Math.random()*600};
            let enemy = new Enemy({scene:this, x:randPos.x, y:randPos.y, key:"all", frame:"zoimbie1_hold", player:this.player});
            this.enemies.push(enemy);
        }
        
    }

    update():void{
       this.player.update();
       this.enemies.forEach(enemy => {
           enemy.update();
       });
    }
}
