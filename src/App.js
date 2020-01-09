import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/Homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component.jsx';


const Hatpage=() => (
 <div>
   <h1>Hats Page</h1>
 </div>

);

function App() {
  return (
    <div>
      <Switch>
     <Route exact path='/' component = {HomePage}/>
     <Route path='/Shop' component = {ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
