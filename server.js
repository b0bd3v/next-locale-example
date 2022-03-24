const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = 3000

const app = next({ dev })
const routes = require('./routes')
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(handler).listen(port)
})