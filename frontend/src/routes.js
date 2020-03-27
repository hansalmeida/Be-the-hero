import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Logon from "./pages/Logon"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Logon} />
      </Switch>
    </Router>
  )
}

export default Routes
