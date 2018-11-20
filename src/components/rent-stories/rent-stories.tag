import './rent-story-switcher.tag'
import slider from './slider.js'

<rent-stories class="wghh-rent-stories">

  <rent-story-switcher stories={ stories } />

  <article each={ stories } class="wghh-rent-story wghh-rent-story--type-{ ownerType } { wghh-rent-story--visible : parent.i === i }">
    <h1 class="wghh-rent-story__owner-name">Mietergeschichte zu { parent.typeName }</h1>
    <p class="wghh-rent-story__text">{ text }</p>
    <span class="wghh-rent-story__source">Mieter{ i % 2 === 0 ? '' : 'in' }* aus { district }</span>
  </article>

  <article class="wghh-rent-stories__explanation">
    <strong>* Mieter{ i % 2 === 0 ? '' : 'in' }</strong>
    <p>
      Wir haben bei unserer <a href="http://wem-gehoert-hamburg.de">Crowd-Recherche</a>
      neben Daten zu den Eigentümern auch viele individuelle
      <em>Mietergeschichten</em> erhalten. Wir veröffentlichen hier einige
      anonymisiert, die besonders für den Eigentümer-Typ
      <em>{ typeName }</em> stehen.
    </p>
  </article>

  riot.C.on(riot.E.selectType, id => {
    const stories = this.SHARED.stories.filter(({ ownerType }) => {
        return ownerType === id
      }).map((s, i) => {
        s.i = i
        return s
      })
    const typeName = this.SHARED.types[id].name
    this.update({ stories, typeName })
    this._resetSlider(0)
  })

  riot.C.on(riot.E.showStory, i => {
    this.update({ i })
    riot.C.trigger(riot.E.showStoryDot, this.stories[i])
  })

  riot.C.on(riot.E.resetStorySlider, i => this._resetSlider(i))

  this._resetSlider = i => {
    this.intervalId && window.clearInterval(this.intervalId)
    this.intervalId = slider(this.stories, i)
  }
</rent-stories>
