'use strict'

if (module.hot) {
  module.hot.accept()
}

// styles
import './index.scss'

// events
import './event_handling.js'

// mount app
import mixin from './shared/mixin.js'
import './app.tag'
riot.mixin(mixin)
riot.mount('[data-mount="wghh-map"]', 'wghh-map')
