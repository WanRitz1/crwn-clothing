import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/Homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

 

function App() {
  return (
    <div>
     <Header/>
      <Switch>
     <Route exact path='/' component = {HomePage}/>
     <Route path='/Shop' component = {ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
