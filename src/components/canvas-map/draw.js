import { Graphics, ticker as _ticker } from 'pixi.js'
// import { GlowFilter } from 'pixi-filters'
import { knuthShuffle as shuffle } from './lib/shuffle.js'

export default (stage, data, color, alpha = 1, size = 1, glow = true) => {
  const ticker = new _ticker.Ticker()
  const ratio = riot.S.ratio
  ticker.stop()
  data = shuffle(data)
  const step = parseInt(data.length / 40 + 1)
  const layer = new Graphics()
  layer.alpha = alpha
  let i = 0
  ticker.add(() => {
    const dots = data.slice(i * step, (i + 1) * step)
    if (dots.length) {
      layer.beginFill(color)
      dots.map(({ x, y }) => {
        x = x * ratio
        y = y * ratio
        layer.drawCircle(x, y, size)
      })
      layer.endFill()
      i += 1
    } else {
      // stop ticker if all dots are drawed
      ticker.stop()
      // if (glow) layer.filters = [new GlowFilter(4, 4, 0, color, 0.5)]
    }
  })
  ticker.start()
  stage.addChild(layer)
  return layer
}
