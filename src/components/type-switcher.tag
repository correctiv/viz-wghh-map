import './type-detail.tag'

<type-switcher class="wghh-typeswitcher">
  <p>
    Wähle einen Eigentümer-Typ, um mehr Informationen zu erhalten und
    die Daten*, die wir zu diesem Typen haben, auf der Karte anzuzeigen.
  </p>

  <span each={ types }
    onclick={ () => parent.selectType(id) }
    class="wghh-typeswitcher__button { wghh-typeswitcher__button--active : parent.activeType.id === id }">
    { name }
  </span>

  <type-detail
    name={ activeType.name }
    text={ activeType.text }
    typeid={ activeType.id } />

  this.activeType = {}
  this.types = Object.keys(this.SHARED.types).map(k => this.SHARED.types[k])
  this.selectType = id => riot.C.trigger(riot.E.selectType, id)
  riot.C.on(riot.E.selectType, id => this.update({ activeType: this.SHARED.types[id] }))
</type-switcher>
