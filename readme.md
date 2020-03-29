# Game Documentation

Phaser3 Base Game framework (it's different with phaser 2, because phaser3 drop Pixi.JS for rendering)

## Flow Scene
PreloaderScene > LoaderScene > MainScene

## Scene
* PreloaderScene (only for loading assets only)
* LoaderScene (put your assets load here instead of PreloaderScene)

## Prerequisite (only once)
* Install node.js
* Install web server

## Installation (each fresh clone)
* Install node dependencies locally by running `$npm install`

## Build
* The script resides inside `"src"` folder.
* The game need to be build, each time modification is made. At least build into *development mode*:
    * For `vscode` user, you just need to run command `CTRL+SHIFT+B`. Select `npm:build` -> `Continue without scanning the task output`
    * For non `vscode` users you need to run command `$npm run-script build`