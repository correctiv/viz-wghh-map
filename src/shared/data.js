const parse = (data, columns) => {
  const _data = data.split('\n').map((d, i) => {
    const row = {}
    const rowData = d.split(',')
    columns.map((c, i) => {
      row[c] = parseInt(rowData[i]) || rowData[i]
    })
    return row
  })
  _data.shift() // remove header row
  return _data
}

const stories = parse(require('raw-loader!./stories.csv'), [
  'ownerType',
  'district',
  'text',
  'x',
  'y'
])

const types = {}
parse(require('raw-loader!./types.csv'), ['id', 'name', 'text']).map(t => {
  types[t.id] = t
})

module.exports = { stories, types }
