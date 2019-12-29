import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/Homepage/homepage.component';


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
     <Route path='/hats' component = {Hatpage}/>
     </Switch>
    </div>
  );
}

export default App;
