import {IngameSettings} from '../game/settings/ingame-settings';

export class SizeHandler{
    public fnSize: object;
    public game : Phaser.Game;
    private orientationDiv:any;
    constructor(game){
        this.game = game;
        //this.fnSize = fnSize;
        this.setResize();
        this.setOrientation();
    }
    setOrientation():void{
        let deviceMobile = !this.game.device.os.desktop;
        if(deviceMobile){
            this.orientationDiv = document.getElementById('orientation');
            if(IngameSettings.orientation.forcePortrait || IngameSettings.orientation.forceLandscape){
                if(IngameSettings.orientation.forcePortrait)
                    this.orientationDiv.style.backgroundImage = 'url("assets/graphics/orientation/portrait.png")';
                if(IngameSettings.orientation.forceLandscape)
                    this.orientationDiv.style.backgroundImage = 'url("assets/graphics/orientation/landscape.png")';
                this.game.scale.on('orientationchange', this.checkOrientation, this);
            }
         }
    }
    setResize():void{

    }

    checkOrientation(orientation:string):void{
        if(orientation === Phaser.Scale.PORTRAIT){
            if(IngameSettings.orientation.forcePortrait){
                this.correctOrientation();
            }
            else{
                this.incorrectOrientation();
            }
        }
        else if(orientation === Phaser.Scale.LANDSCAPE){
            if(IngameSettings.orientation.forceLandscape){
                this.correctOrientation();
            }
            else{
                this.incorrectOrientation();
            }
        }
    }

    incorrectOrientation(){
        console.log("incorrect orientation");
        let zIndex = parseInt(this.game.canvas.style.zIndex) || 0;
        //this.game.paused = true;
        this.orientationDiv.style.display = 'block';
        this.orientationDiv.style.zIndex = String(zIndex+1);
        //this.game.canvas.style.visibility  = "hidden";
        //*/
    }

    correctOrientation(){
        console.log("correct orientation");
        this.orientationDiv.style.display = 'none';
        /*
        this.game.paused = false;
        */
    }
}