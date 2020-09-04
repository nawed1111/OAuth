import React, { Component } from 'react';

import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import OauthForm from './OauthForm';

class LoginPage extends Component{
    
    state ={ hasAccount: true };

    renderContent(){
        if(this.state.hasAccount){
            return <SigninForm checkHasAccount ={ () => this.setState({ hasAccount: false })}/>
        }
        return <SignupForm checkHasAccount={() => this.setState({ hasAccount: true })}/>
    }

    render(){
        return(
            <div className="row center valign-wrapper"> 
                <div className="col s5 z-depth-5">
                    {this.renderContent()}
                    <p></p>
                </div>
                <div className="col s2">OR</div>
                <div className="col s5">
                    <OauthForm />  
                </div>    
            </div>

        );
    }

}

export default LoginPage;