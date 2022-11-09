import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import PrivateRoute from "./context/PrivateRouth"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
