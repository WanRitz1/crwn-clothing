import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import HomePage from './pages/Homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import {checkUserSession} from './redux/user/user.actions';
//import {auth,createUserProfileDocument}from './firebase/firebase.utils';
//import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';
//import {selectCollectionsForPreview} from './redux/shop/shop.selectors';
//import Homepage from './pages/Homepage/homepage.component';
 
class App extends React.Component{
  
  
unsubscribeFromAuth = null

  componentDidMount(){  
    const {checkUserSession} = this.props;
    checkUserSession();
    //const {setCurrentUser} = this.props;
    /*this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
   
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
         setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
       
      }
      setCurrentUser(userAuth);
    
    });*/
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
return (
    <div>
     <Header/>
      <Switch>
     <Route exact path='/' component = {HomePage}/>
     <Route path='/Shop' component = {ShopPage}/>
     <Route exact path='/checkout' component = {CheckoutPage}/>
     <Route exact path='/SignIn' render = {() => this.props.currentUser ? ( <Redirect to='/' />) : ( <SignInAndSignUp/> )}/>
     </Switch>
    </div>
    );
  }
} 
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
  //collectionsArray : selectCollectionsForPreview
});
const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
