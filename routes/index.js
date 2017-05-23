const express = require('express')
const router = express.Router()
const DistributionCenter = require('../lib/index')

// find user
router.get('/', (req, res) => {
  new DistributionCenter().start()
  res.render('index', {title: 'folie.js'})
})

module.exports = router
