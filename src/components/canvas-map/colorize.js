const _animate = (dots, alpha) => {
  dots.map(d => {
    const delta = Math.random()
    if (d.alpha + delta < alpha) {
      d.alpha += delta
    } else {
      d.alpha = alpha
    }
  })
}

const _colorize = (dots, color, alpha) => {
  const _dots = dots.map(({ dot }) => {
    dot.clear()
    dot.beginFill(color)
    dot.fillAlpha = alpha
    dot.drawCircle(0, 0, 2)
    dot.endFill()
    // dot.alpha = 0
    return dot
  })

  // animate alpha transition
  // requestAnimationFrame(() => _animate(_dots, alpha))
  // requestAnimationFrame(() => _animate(_dots, alpha))
  // requestAnimationFrame(() => _animate(_dots, alpha))
  // requestAnimationFrame(() => _animate(_dots, alpha))
}

export default (dots, typeId, oldTypeId = null) => null
// export default (dots, typeId, oldTypeId = null) => {
//   const newDots = dots.filter(({ type }) => type === typeId)
//   const oldDots = oldTypeId ? dots.filter(({ type }) => type === oldTypeId) : []
//   _colorize(newDots, colors[typeId] || colors[1], 1)
//   _colorize(oldDots, colors[0], 0.1)
// }
