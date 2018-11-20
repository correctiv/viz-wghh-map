import './type-detail.tag'

<type-switcher class="wghh-typeswitcher">

  <span each={ types }
    onclick={ () => parent.selectType(id) }
    class="wghh-typeswitcher__button { parent.getClass(id) }">
    { name }
  </span>

  <type-detail
    name={ activeType.name }
    text={ activeType.text }
    typeid={ activeType.id } />

  this.activeType = {}
  this.getClass = id => this.activeType.id === id ? `wghh-typeswitcher__button--type-${id}` : ''
  this.types = Object.keys(this.SHARED.types).map(k => this.SHARED.types[k])
  this.selectType = id => riot.C.trigger(riot.E.selectType, id)
  riot.C.on(riot.E.selectType, id => this.update({ activeType: this.SHARED.types[id] }))
</type-switcher>
