import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from "./Home"
import Profile from './Profile'
import Work from './Work'
import Contact from './Contact'

export default function App() {
  return (
    <div>

      <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route path='/Profile'>
          <Profile/>
        </Route>
        <Route path='/Work'>
          <Work/>
        </Route>
        <Route path='/Contact'>
          <Contact/>
        </Route>
      </Switch>

      {/* <Work/> */}
      {/* <Profile/>
      <Contact/> */}
    </div>
  )
}
