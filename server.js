var dgram = require('dgram')

var socket = dgram.createSocket({
  type: 'udp6'
})
socket.on('message', (msg, rinfo) => {
  console.log(msg.toString())
})
socket.bind(3042)

