import colors from './colors.js'
import { stories, types } from './data.js'

const mixin = {
  init: function(opts) { // eslint-disable-line no-unused-vars
    this.STATE = riot.S
    this.SHARED = { colors, stories, types }
  }
}

export default mixin
