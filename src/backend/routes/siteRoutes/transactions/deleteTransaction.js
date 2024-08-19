const { deleteDocuments } = require.main.require('./db/db')

const deleteTransaction = async (req, res) => {
  const result = { success: false }

  try {
    const { transactionId } = req.body
    const _deleteDocument = await deleteDocuments({
      model: 'transactions',
      select: { _id: transactionId }
    })

    result.data = _deleteDocument
    result.success = true

    res.json(result)
  } catch (err) {
    result.error = err.message

    res.json(result)
  }
}

module.exports = deleteTransaction
