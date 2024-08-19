const { updateDocument } = require.main.require('./db/db')

const updateTransaction = async (req, res) => {
  const result = { success: false }

  try {
    const { transactionId, type, category, price } = req.body
    const _updateDocument = await updateDocument({
      model: 'transactions',
      query: { _id: transactionId },
      data: {
        type,
        category,
        price
      }
    })

    result.data = _updateDocument
    result.success = true

    res.json(result)
  } catch (err) {
    result.error = err.message

    res.json(result)
  }
}

module.exports = updateTransaction
