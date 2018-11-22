import colors from './colors.js'

const stories = require('dsv-loader!./stories.csv').map(s => {
  s.ownerType = parseInt(s.ownerType)
  s.x = parseInt(s.x)
  s.y = parseInt(s.y)
  return s
})
const types = {}
require('dsv-loader!./types.csv').map(t => {
  t.id = parseInt(t.id)
  types[t.id] = t
})

const mixin = {
  init: function(opts) { // eslint-disable-line no-unused-vars
    this.STATE = riot.S
    this.SHARED = { colors, stories, types }
  }
}

export default mixin
