import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/Homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {auth,createUserProfileDocument}from './firebase/firebase.utils';
 
class App extends React.Component{
  
  constructor(){
  super();  
  this.state = {
    currentUser: null
    }
  }
unsubscribeFromAuth = null

  componentDidMount(){  
    this.unsubscribeFromAuth = auth.onAuthStateChanged (async user => {
      //this.setState({currentUser: user});
      //console.log(user);
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
return (
    <div>
     <Header currentUser={this.state.currentUser}/>
      <Switch>
     <Route exact path='/' component = {HomePage}/>
     <Route path='/Shop' component = {ShopPage}/>
     <Route path='/SignIn' component = {SignInAndSignUp}/>
     </Switch>
    </div>
    );
  }
}

export default App;
