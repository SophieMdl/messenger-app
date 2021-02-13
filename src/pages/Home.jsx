import React from 'react'
import { TextField, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  const [roomName, setRoomName] = React.useState('')

  const handleRoomName = (event) => {
    setRoomName(event.target.value)
  }

  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <form className="form">
        <TextField
          required
          id="standard-basic"
          label="Room name"
          onChange={handleRoomName}
        />
        <Link to={`/${roomName}`} className="link">
          Join room
        </Link>
      </form>
    </Box>
  )
}

export default Home
