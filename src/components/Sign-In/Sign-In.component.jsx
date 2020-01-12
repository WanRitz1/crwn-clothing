import React from 'react';
import './Sign-In.styles.scss';

//use class becuase we want to store information
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email='',
            password = ''
        }
    }
    
    render(){
        return(
            <div className='Sign-In'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <input name='email' type='email' value={this.state.email} required/>
                    <label>Email</label>
                    <input name='password' type='password' value={this.state.password} required/>
                    <label>Password</label>

                    <input ='submit' value='Select Form'/>
                </form>
            </div>
        )
    }

}

export default SignIn;