import React  from 'react';
//import './header.styles.scss';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
//import {auth} from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';
import CartIcon from '../cart-icon/cart-icon.component';
import {signOutStart} from '../../redux/user/user.actions';
import {ReactComponent as Logo}  from '../../assets/crown.svg';
import {HeaderContainer,LogoContainer, OptionsContainer,OptionLink} from './header.styles';



const Header = ({currentUser, hidden, signOutStart}) =>(
    <HeaderContainer>
        <LogoContainer to='/'>
          <Logo className='Logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                Shop
            </OptionLink>
            <OptionLink to='/shop'>
                Contact
            </OptionLink>
           
            {
                currentUser ?(
                <OptionLink as='div' onClick = {signOutStart}>
                    Sign Out
                </OptionLink>
                 ) : (
                <OptionLink to='./signin'>
                    Sign In
                </OptionLink>
                 )
            }
            <CartIcon/>
            
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>
        }
        
    </HeaderContainer>   

);
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart:()=>dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);  