import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Logon from "./pages/Logon"
import Register from "./pages/Register"
import Profile from "./pages/Profile"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  )
}

export default Routes
