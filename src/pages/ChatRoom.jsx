import React, { useState } from 'react'
import MessageContent from '../components/MessageContent.jsx'
import { Container, Button, TextField } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import useChat from '../useChat.js'
import './chatRoom.css'

const myName = 'my name'

const initialNewMessage = {
  content: '',
  author: myName,
}

const ChatRoom = (props) => {
  const { roomId } = props.match.params
  const { messages, sendMessage } = useChat(roomId)
  const [newMessage, setNewMessage] = useState(initialNewMessage)

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(newMessage)
    setNewMessage({
      content: '',
      ...newMessage,
    })
  }

  return (
    <Container maxWidth="sm">
      <h1>Room: {roomId}</h1>
      {messages.map((msg, i) => (
        <MessageContent key={i} msg={msg} />
      ))}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className="new-message"
          multiline
          id="new-message"
          label="Mon message"
          value={newMessage.content}
          onChange={(e) =>
            setNewMessage({ ...newMessage, content: e.target.value })
          }
          rows={4}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<Send />}
          disabled={newMessage.content === ''}
        >
          Envoyer
        </Button>
      </form>
    </Container>
  )
}

export default ChatRoom
