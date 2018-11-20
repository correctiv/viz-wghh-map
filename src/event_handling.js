// event names
const E = {
  selectType: 't',
  showStory: 's',
  showStoryDot: 'd',
  resetStorySlider: 'r',
  resize: 'e'
}

// trigger bus
const C = riot.observable()

// store
const S = {
  width: 580,
  origWidth: 580,
  ratio: 1,
  height: 566,
  origHeight: 566
}

// responsive
S.updateDimensions = (width, dispatch = true) => {
  S.ratio = width / S.origWidth
  S.width = width
  S.height = parseInt(S.origHeight * S.ratio)
  dispatch && C.trigger(E.resize)
}

// make global available
riot.E = E
riot.C = C
riot.S = S
