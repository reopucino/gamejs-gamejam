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
        //load using ogmo editor and failed.. will check later
        /*
        //let map = this.make.tilemap({key:'tm_ogmo_json'});
        let dmap = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,4]];
        let mapjson = this.cache.json.get('mapjson');
        let layermap0 = mapjson.layers;
        let getdata0Only = mapjson.layers[0].data;
        console.log(getdata0Only);
        let map =  this.make.tilemap({width:mapjson.width, height:mapjson.height, data:dmap})
        console.log(mapjson);
        //let map = this.make.til
        let tiles = map.addTilesetImage('tilemap');
        let layer1= map.createDynamicLayer(0, tiles,0,0);
        */
        let map = this.make.tilemap({key:'tm_untilted_json'});
        let tiles = map.addTilesetImage('mappack_tilesheet', 'tm');
        //this.add.image(0,0, 'tm');
        let layer1= map.createStaticLayer('bg', tiles,0,0);
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
