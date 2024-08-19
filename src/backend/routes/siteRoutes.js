const path = require('path')
const express = require('express')
const rateLimit = require('express-rate-limit')

const defaults = require.main.require('./defaults')

const router = express.Router()
router.use(express.json())
router.use(express.static(path.join(__dirname, '..', '..', '..', 'dist')))

const limiter = rateLimit({
  windowMs: defaults.rateLimit.time,
  max: defaults.rateLimit.max,
  message: {
    success: false,
    error: 'Too many requests'
  }
})

router.get('/', [limiter], require('./siteRoutes/app'))
router.post('/create-transaction', [limiter], require('./siteRoutes/transactions/createTransaction'))
router.post('/update-transaction', [limiter], require('./siteRoutes/transactions/updateTransaction'))
router.post('/delete-transaction', [limiter], require('./siteRoutes/transactions/deleteTransaction'))

module.exports = router
