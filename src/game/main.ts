import "phaser";
import { LoaderScene } from "./scenes/loader-scene";
import { PreloaderScene } from "./scenes/preloader-scene";
import { MainScene } from "./scenes/main-scene";
//import { PublicSettings } from "./settings/public-settings";
import { SizeHandler} from "../plugin/size-handler";

// main game configuration
const config: Phaser.Types.Core.GameConfig = {
  width: 540,
  height: 960,
  type: Phaser.AUTO,
  parent: "game",
  scene: [PreloaderScene, LoaderScene, MainScene],
  scale:{
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode:Phaser.Scale.FIT
  }
};

export class Game extends Phaser.Game {
  //private settingsPublic : any;
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
    this.fnSetData();
  }
  fnSetData():void{
    //this.settings.public = publicsettings;
    //this.settingsPublic = PublicSettings;
    //console.log(PublicSettings.copyrightEnabled);
  }
  boot():void{
    super.boot();
    console.log(this);
    new SizeHandler(this);
  }
  
}

// when the page is loaded, create our game instance
window.addEventListener("load", () => {
  window['game'] = new Game(config);
});
