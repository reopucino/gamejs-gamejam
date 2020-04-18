export class LoaderScene extends Phaser.Scene {
    private loadingFrame : Phaser.GameObjects.Image;
    private loadingBar : Phaser.GameObjects.Image;
    private loadingBarWidth : number;
    private percentText : Phaser.GameObjects.Text;
    constructor(){
        super({
            key :"LoaderScene"
        });
    }
    preload(){
        this.prepareLoadingAssets();
        let width = this.cameras.main.width*.5;
        let height = this.cameras.main.height*.55;
        this.add.text(width, this.cameras.main.height*.45, "Loading..", {font:'30px Arial', fill: '#FFFFFF' }).setOrigin(.5, .5);
        this.percentText = this.add.text(width, height, '%',  { font: '30px Arial', fill: '#FFFFFF' }).setOrigin(.5, .5);
        this.load.on('progress', this.updateBar, this);
        this.load.on('complete', this.completeLoad, this);
        this.registerCahce();
    }
    create(){
        
    }
    registerCahce():void{
        this.load.path = 'assets/';
        for(let i =0; i<30; i++){
            let _string = 'assets'+i;
            this.load.image(_string, 'graphics/game/image-stock-4.png');
        }
        this.load.image("myimg","graphics/phaser.png");
        this.load.atlas("all", "graphics/game/all.png", "graphics/game/all.json");
    }
    prepareLoadingAssets(){
        this.fnPrepareProgressbar();
    }

    updateBar(percentage):void{
        let value = percentage*100;
        let pInt = parseInt(String(value));
        let string = pInt+'%';
        let parseF :number = parseFloat(percentage);
        this.loadingBar.displayWidth = this.loadingBarWidth *parseF;
        //this.loadingBar.displayWidth = this.loadingBarWidth;
        this.percentText.setText(string);
    }

    completeLoad(){
        //console.log("complete");
        this.scene.start('GameScene');
    }

    fnPrepareProgressbar(){
        //this.bg = this.add.image(0,0,'road-bg');
       const pos = {
           x:this.cameras.main.centerX,
           y:this.cameras.main.centerY
       }

       this.loadingFrame = this.add.image(pos.x, pos.y, 'loading', 'frame.png');
       this.loadingBar = this.add.sprite(pos.x, pos.y, 'loading', 'bar.png').setOrigin(0,.5);
       this.loadingBar.x -= this.loadingBar.width*.5;
       this.loadingBarWidth = this.loadingBar.width;
       this.loadingBar.displayWidth = 0;
    }
}