import { Global } from '../util/global'
import { setScaleFactor } from '../util/scale_factor'

export default class Title extends Phaser.Scene {
  constructor() {
    super({ key: 'Title' })
  }

  init() {}
  onProgress(v) {}
  preload() {}
  create() {
    setScaleFactor.call(this, true)

    for (var d = 1; d < 7; d++) {
      this['hexa'+d] = this.add.sprite(this.c_w * (d/10), this.c_h * (d/10), 'hexa'+d)
      this['hexa'+d].setScale(.4)
    }
  }
}
