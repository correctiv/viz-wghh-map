const resized = element => riot.S.updateDimensions(element.offsetWidth)

let resizeTimeout
const waitForResizeEnd = element => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => resized(element), 100)
}

export default element => {
  riot.S.updateDimensions(element.offsetWidth, false)
  window.onresize = () => waitForResizeEnd(element)
}
