const Sentry = require('@sentry/node')
const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

Sentry.init({ dsn: 'https://605340cce1f84c93996961a81f73d97a@sentry.io/1513614' })

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value })
    }
  })
})

BillingCycle.route('sumary', (req, res, next) => {
  BillingCycle.aggregate([{
    $project: { credit: { $sum: '$credits.value' },
      debt: { $sum: '$debts.value' } }
  }, {
    $group: { _id: null,
      credit: { $sum: '$credit' },
      debt: { $sum: '$debt' } }
  }, {
    $project: { _id: 0, credit: 1, debt: 1 }
  }], (error, result) => {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json(result[0] || { credit: 0, debt: 0 })
    }
  })
})

module.exports = BillingCycle
