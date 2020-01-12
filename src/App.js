import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/Homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
 

function App() {
  return (
    <div>
     <Header/>
      <Switch>
     <Route exact path='/' component = {HomePage}/>
     <Route path='/Shop' component = {ShopPage}/>
     <Route path='/SignIn' component = {SignInAndSignUp}/>
     </Switch>
    </div>
  );
}

export default App;
