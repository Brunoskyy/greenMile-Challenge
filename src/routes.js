import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

import Home from './pages/DevForm'
import Profile from './pages/profile'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/profile" component={Profile}/>
            </Switch>
        </BrowserRouter>
    )
}