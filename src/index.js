import Phaser from 'phaser';
import { Global } from './util/global';
import { isMobile, isMobileOnly } from 'mobile-device-detect';
import PreLoader from './states/Preloader';
import Loader from './states/Loader';
import Title from './states/Title';

Global.displaypixelratio = 1;
let DEFAULT_WIDTH = 1242;
let DEFAULT_HEIGHT = 2208;
Global.isMobile = isMobile;

const config = {
    fullscreenTarget: document.getElementById("game-sec"),
    type: (isMobile) ? Phaser.CANVAS : Phaser.CANVAS,
    transparent: false,
    scale: {
        parent: 'game-sec',
        mode: (Global.isMobile) ? Phaser.Scale.ENVELOP : Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        transparent: true
    },
    dom: {
        createContainer: true
    },
    scene: [PreLoader, Loader,Title],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        }
        /* default: "matter",
        matter: {
            gravity: {
                y: 0,
                x: 0
            },
            debug: false,
        }, */        
    },
    fps: {
        target: 60,
        forceSetTimeOut: true
    }
}

window.addEventListener('load', () => {
    const game = new Phaser.Game(config);
})
