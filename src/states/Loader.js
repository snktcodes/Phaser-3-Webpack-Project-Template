import { Global } from '../util/global'

export default class Loader extends Phaser.Scene {
  constructor() {
    super({ key: 'Loader' })
  }

  init() {}
  onProgress(v) {}
  preload() {
    for (var t = 1; t < 7; t++) {
      this.load.image('hexa'+t, './src/assets/hexa' + t + '.png')
    }
  }
  create() {
    this.scene.start("Title");
  }
}
