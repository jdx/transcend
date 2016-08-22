'use strict'

const koa = require('koa')
const app = koa()

let routes = require('./routes')
app.use(routes.routes())
app.use(routes.allowedMethods())

app.listen(process.env.PORT || 3000)
