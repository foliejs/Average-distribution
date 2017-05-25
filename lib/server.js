'use strict'
const http = require('http')
const DistributionCenter = require('./index')

const server = http.createServer((req, res) => {
  DistributionCenter.handleFactory()
  res.end()
})
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

global.GLOBALCOUNT = 0

process.on('SIGINT', function () {
  console.log(`Got SIGINT.  Press Control-D/Control-C to exit.Now global count ${GLOBALCOUNT}`)
})

server.listen(8000)