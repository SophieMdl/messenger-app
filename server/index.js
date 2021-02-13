const httpServer = require('http').createServer((req, res) => {
  res.end('server is running')
})

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'

io.on('connection', (socket) => {
  const { roomId } = socket.handshake.query
  socket.join(roomId)

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    console.log({ data })
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data)
  })

  // notify users upon disconnection
  socket.on('disconnect', () => {
    socket.leave(roomId)
  })
})

const PORT = process.env.PORT || 4000

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`),
)
