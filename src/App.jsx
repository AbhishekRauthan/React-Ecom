import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './page/Homepage/HomePage'
import Shop from './page/Shop/Shop'
import SignInAndSignUp from './page/SignInAndSignUp/SignInAndSignUp'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;