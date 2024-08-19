const createModel = require('./createModel')

module.exports = {
  transactions: createModel({ name: 'transactions' })
}
