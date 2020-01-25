import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/Sign-In/Sign-In.component';
import SignUp from '../../components/Sign-Up/Sign-Up.component';

const SignInAndSignUp = () => (
    <div className='Sign-In-And-Sign-Up'>
        <SignIn/>
        <SignUp/>
    </div>

);

export default SignInAndSignUp;