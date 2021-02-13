import React from 'react'
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent,
  Box,
} from '@material-ui/core'
import { Lock } from '@material-ui/icons'

const MessageContent = ({ msg }) => {
  return (
    <Card className="message" key={msg.id} variant="outlined">
      <Box p={1} className="private-message">
        {msg.author}
      </Box>
      <CardHeader avatar={<Avatar />} title={msg.author} subheader={msg.date} />
      <CardContent>
        <Typography>{msg.content}</Typography>
      </CardContent>
    </Card>
  )
}

export default React.memo(MessageContent)
