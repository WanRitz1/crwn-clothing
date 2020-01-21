import React from 'react';
import './Sign-In.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
//firebase importing
import {signInWithGoogle} from '../../firebase/firebase.utils';
//use class becuase we want to store information
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'', password :''
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className='Sign-In'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' 
                    type='email' 
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label='Email'required/>
                  
                    <FormInput name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    label = 'Password'required/>
                   
                    <div className ='buttons'>
                    <CustomButton type ='submit'>Sign In</CustomButton>
                    <CustomButton onClick = {signInWithGoogle} isGoogleSignIn > 
                    Sign In With Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;