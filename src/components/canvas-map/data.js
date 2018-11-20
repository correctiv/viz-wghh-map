const data = require('raw-loader!./data.csv')
  .split('\n')
  .map(d => {
    const [type, x, y] = d.split(',').map(i => parseInt(i))
    return { type, x, y }
  })

export default data
