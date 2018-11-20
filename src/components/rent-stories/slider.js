export default (stories, i = 0) => {
  riot.C.trigger(riot.E.showStory, i)
  return window.setInterval(() => {
    i = (i + 1) % stories.length
    riot.C.trigger(riot.E.showStory, i)
  }, 7000)
}
