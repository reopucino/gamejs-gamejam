export class PreloaderScene extends Phaser.Scene {
    constructor(){
        super({
            key :"PreloaderScene"
        });
    }
    preload(){
        this.load.path = 'assets/';
        this.load.atlas('loading', 'graphics/game/loading.png', 'graphics/game/loading.json');
    }
    create(){
        this.scene.start('LoaderScene');
    }
}