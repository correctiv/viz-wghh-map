import { Graphics } from 'pixi.js'
// import { GlowFilter } from 'pixi-filters'

export default (stage, oldDot, { x, y }, color) => {
  oldDot && oldDot.destroy()
  const dot = new Graphics()
  const r = riot.S.ratio
  x = x * r
  y = y * r
  dot.lineStyle(2, color, 1)
  dot.beginFill(color)
  dot.fillAlpha = 0.5
  dot.drawCircle(x, y, 7)
  dot.endFill()
  // dot.filters = [glow]
  stage.addChild(dot)
  return dot
}
