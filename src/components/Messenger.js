import React, { useState } from "react";
import { initialMessages } from "../messages.js";
import { Card, Container, Button, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import "./Messenger.css";

const myName = "Loki";

const Messenger = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newMessageWithData = {
      id: messages.length + 2,
      content: newMessage,
      author: myName,
      date: new Date(),
      private: true
    };
    setMessages([...messages, newMessageWithData]);
    setNewMessage("");
  };

  return (
    <Container maxWidth="sm">
      <h2>Messages</h2>
      {messages.map(msg => (
        <Card className="message" key={msg.id} variant="outlined">
          {msg.content}
        </Card>
      ))}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className="new-message"
          multiline
          id="new-message"
          label="Mon message"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          rows={4}
          margin="dense"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
        >
          Envoyer
        </Button>
      </form>
    </Container>
  );
};

export default Messenger;
