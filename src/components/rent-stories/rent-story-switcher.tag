<rent-story-switcher class="wghh-rent-story-switcher">
  <span each={ opts.stories }
    onclick={ parent.showStory }
    class="wghh-rent-story-switcher__button wghh-rent-story-switcher__button--type-{ ownerType } { wghh-rent-story-switcher__button--active : parent.parent.i === i }">
    <span class="wghh-rent-story-switcher__button-inner" />
  </span>

  this.showStory = ({ item }) => {
    riot.C.trigger(riot.E.showStory, item.i)
    riot.C.trigger(riot.E.resetStorySlider, item.i)
  }
</rent-story-switcher>
