import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import AuthFields from './AuthFields';
import SignupFormFields from './signupFormFields';
import { Link } from 'react-router-dom';

class SignupForm extends Component{

    renderField(){

        return _.map(SignupFormFields, ({label, name, type}) => {
          return(
            <Field key={name} component={AuthFields} type={type} label={label} name={name}
          />
          );
        })    
    }

    render(){
        return(
            <div>
              <form>
              <h3>Sign Up</h3>
              <div className="input-field">
                {this.renderField()}
              </div>
              <button className="btn waves-effect waves-light" type="submit">Register
               <i class="material-icons right">send</i>
              </button>
              </form>
              <p>Already have an account?
                  <Link onClick={ this.props.checkHasAccount }> login</Link>
              </p>
            </div>
        );
    }
}

export default reduxForm({
  form: 'SignupForm'
})(SignupForm); 