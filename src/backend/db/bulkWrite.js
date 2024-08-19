const models = require('./models')

const bulkWrite = props => {
  return new Promise((resolve, reject) => {
    const { model, operation, data } = props

    const Model = models[model]

    try {
      if (operation !== 'updateOne') {
        throw new Error('Wrong operation')
      }

      if (operation === 'updateOne') {
        Model.bulkWrite(
          data.map(item => ({
            updateOne: {
              filter: item.filter,
              update: { $set: item.update }
            }
          }))
        )

        resolve(data)
      }
    } catch (err) {
      const error = {
        code: 2,
        message: 'DB error',
        detail: err
      }
      reject(error)
    }
  })
}

module.exports = bulkWrite
