'use strict'

const mongorito = require('mongorito')
mongorito.connect(process.env.MONGOHQ_URI || 'localhost/transcend')

module.exports = mongorito
