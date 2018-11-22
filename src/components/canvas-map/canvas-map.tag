import setupResponsive from './setup_responsive.js'
import initPixi from './init_pixi.js'
import draw from './draw.js'
import drawStoryDot from './draw_storydot.js'
import colorize from './colorize.js'
import DATA from './data.js'

<canvas-map class="wghh-canvas-map">
  <div ref="wrapper" class="wghh-canvas-map__wrapper" />

  this.on('mount', () => {
    this.element = this.refs.wrapper
    setupResponsive(this.element)
    this._init()
  })

  riot.C.on(riot.E.selectType, typeId => {
    this._drawType(typeId)
    this.activeType = typeId
  })

  riot.C.on(riot.E.showStoryDot, story => {
    this.storyDot = drawStoryDot(this.app.stage, this.storyDot, story, this.SHARED.colors[1])
  })

  riot.C.on(riot.E.resize, () => {
    this.app.destroy()
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild)
    }
    this._init()
    // FIXME
    // this.app.renderer.resize(riot.S.width, riot.S.height)
    // this.app.stage.width = riot.S.width
    // this.app.stage.height = riot.S.height

    // this.app.renderer.view.style.width = `${riot.S.width}px`
    // this.app.renderer.view.style.height = `${riot.S.height}px`
    // this.app.stage.width = riot.S.width
    // this.app.stage.height = riot.S.height
  })

  this._drawType = typeId => {
    this._drawedType && this._drawedType.destroy()
    this._drawedType = draw(
      this.app.stage,
      DATA.filter(({ type }) => parseInt(type) === typeId),
      this.SHARED.colors[typeId]
    )
  }

  this._init = () => {
    this.app = initPixi(this.element, riot.S)
    draw(this.app.stage, DATA, this.SHARED.colors[0], .2, 1, false)
    // initial colorize
    riot.C.trigger(riot.E.selectType, 2)
  }
</canvas-map>
