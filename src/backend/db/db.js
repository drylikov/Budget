const countDocuments = require('./countDocuments')
const deleteDocuments = require('./deleteDocuments')
const distinctDocuments = require('./distinctDocuments')
const findDocuments = require('./findDocuments')
const newDocument = require('./newDocument')
const updateDocument = require('./updateDocument')
const aggregateDocuments = require('./aggregateDocuments')
const bulkWrite = require('./bulkWrite')

module.exports = {
  countDocuments,
  deleteDocuments,
  distinctDocuments,
  findDocuments,
  newDocument,
  updateDocument,
  aggregateDocuments,
  bulkWrite
}
