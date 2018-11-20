import { Application, utils } from 'pixi.js'

const type = 'WebGL'
if (!utils.isWebGLSupported()) {
  type = 'canvas'
}

utils.sayHello(type)

export default (element, { width, height }) => {
  const app = new Application({
    width,
    height,
    antialias: true, // default: false
    transparent: true, // default: false
    autoResize: true,
    resolution: 1 // default: 1
  })

  element.appendChild(app.view)
  app.renderer.autoResize = true
  app.stage.interactive = false
  return app
}
