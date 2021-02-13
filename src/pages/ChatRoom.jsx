import React, { useState } from 'react'
import MessageContent from '../components/MessageContent.jsx'
import {
  Container,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core'
import { Send } from '@material-ui/icons'

import './chatRoom.css'

const myName = 'my name'

const initialNewMessage = {
  content: '',
  private: false,
  author: myName,
}

const ChatRoom = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState(initialNewMessage)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessageWithData = {
      ...newMessage,
      id: messages.length + 2,
      date: new Date().toDateString(),
    }
    setMessages([...messages, newMessageWithData])
    setNewMessage(initialNewMessage)
  }

  return (
    <Container maxWidth="sm">
      <h2>Messages</h2>
      {messages.map((msg) => (
        <MessageContent key={msg.id} msg={msg} />
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
        <FormControlLabel
          control={<Checkbox value="private" color="primary" />}
          label="Message privé"
          checked={newMessage.private}
          onChange={(e) =>
            setNewMessage({ ...newMessage, private: e.target.checked })
          }
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