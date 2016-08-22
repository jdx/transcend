'use strict'

const r = require('koa-router')()
const Day = require('../models/day')

r.get('/', function * () {
  this.body = 'hello world'
})

r.get('/api/days', function * () {
  this.body = yield Day.find()
})

r.post('/api/days', function * () {
})

module.exports = r
