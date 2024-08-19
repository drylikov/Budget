const { newDocument } = require.main.require('./db/db')

const createTransaction = async (req, res) => {
  const result = { success: false }

  try {
    const { type, category, price } = req.body
    const _newDocument = await newDocument({
      model: 'transactions',
      data: {
        type,
        category,
        price
      }
    })

    result.data = _newDocument
    result.success = true

    res.json(result)
  } catch (err) {
    result.error = err.message

    res.json(result)
  }
}

module.exports = createTransaction
