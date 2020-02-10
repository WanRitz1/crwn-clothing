import React  from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
//import Logo  from '../../images/shop-img/jackets.png';
import CartIcon from '../cart-icon/cart-icon.component';


const Header = ({currentUser}) =>(
    <div className='header'>
        <Link className ='logo-container' to='/'>
            
        </Link>
        <div className='options'>
            <Link className = 'option' to='/shop'>
                Shop
            </Link>
            <Link className = 'option' to='/shop'>
                Contact
            </Link>
           
            {
                currentUser ?(
                <div className ='option' onClick = {() => auth.signOut()}>
                    Sign Out
                </div>
                 ) : (
                <Link className ='option' to='./signin'>
                    Sign In
                </Link>
                 )
            }
            <CartIcon/>
            
        </div>
    </div>   

);
const mapStateToProps = state => ({
    currentUser : state.user.currentUser
})
export default connect(mapStateToProps)(Header);  