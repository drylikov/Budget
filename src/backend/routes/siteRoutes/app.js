const defaults = require.main.require('./defaults')

const { findDocuments } = require.main.require('./db/db')

const readTransactions = async () => {
  const _findDocuments = await findDocuments({
    model: 'transactions',
    find: {}
  })
  return _findDocuments
}

const app = async (req, res, next) => {
  try {
    const transactions = await readTransactions()
    res.render('app', {
      defaults: {
        transactions,
        siteName: defaults.site.name
      }
    })
  } catch (err) {
    console.log(err)
    res.send('error')
  }
}

module.exports = app
