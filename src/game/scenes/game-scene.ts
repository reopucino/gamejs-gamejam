import {Player} from "../gameObject/player";
import { Enemy } from "../gameObject/enemy";

export class GameScene extends Phaser.Scene {
    private player : Player;
    private enemies : Array<Enemy>;
    constructor(){
        super({
            key:"GameScene"
        });
        this.enemies = new Array();
    }
    preload():void{
        
    }
    create():void{
        //preparetilemap
        //let map = this.make.tilemap({key:'tilemapjson'});
        let datajson = this.cache.json.get('data');
        console.log(datajson);
        //let tiles = map.addTilesetImage('mytiles', 'tilemap');
        //let layer1= map.createDynamicLayer('bg', tiles, 0, 0);

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
