import React from 'react'
import './App.css'
import ChatRoom from './pages/ChatRoom'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:roomId" component={ChatRoom} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
