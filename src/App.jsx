import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './page/Homepage/HomePage'
import Shop from './page/Shop/Shop'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;