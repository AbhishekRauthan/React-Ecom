import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import { auth } from './firebase/firebase.utils'
import HomePage from './page/Homepage/HomePage'
import Shop from './page/Shop/Shop'
import SignInAndSignUp from './page/SignInAndSignUp/SignInAndSignUp'


const App = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    let unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);

      console.log(currentUser);
    })
  }, [currentUser])

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;