import React  from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
//import Logo  from '../../images/shop-img/jackets.png';

const Header = () =>(
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
        </div>
    </div>   

);
export default Header;  