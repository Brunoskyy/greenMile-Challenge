import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/DevForm'
import Profile from '../pages/profile'

import PrivateRoute from './PrivateRoute'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute path="/profile" component={Profile}/>
      </Switch>
    </BrowserRouter>
  )
}
