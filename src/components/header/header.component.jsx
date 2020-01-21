import React  from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import auth from '../../firebase/firebase.utils';
//import Logo  from '../../images/shop-img/jackets.png';

const Header = (currentUser) =>(
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
            <link>
            {
                currentUser ?
                <div className ='option' onClick = {() => auth.signOut()}>
                    Sign Out
                </div>
                :
                <link className ='option' to='./signin'>
                    Sign In
                </link>
            }

            </link>
        </div>
    </div>   

);
export default Header;  