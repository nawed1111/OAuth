import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import AuthFields from './AuthFields';
import loginFormFields from './loginFormFields';
import { Link } from 'react-router-dom';

class SigninForm extends Component{

    renderField(){

        return _.map(loginFormFields, ({label, name, type}) => {
          return(
            <Field key={name} component={AuthFields} type={type} label={label} name={name}
          />
          );
        });    
    }

    render(){
        return(
            <div>
              <form>
              <h3>Login</h3>
              <div className="input-field">
                {this.renderField()}
              </div>

              <button className="btn waves-effect waves-light" type="submit">Submit
               <i class="material-icons right">send</i>
              </button>
              </form>
              <p>Doesn't have an account?
                <Link onClick={ this.props.checkHasAccount }> create one
                </Link>
              </p>
            </div>
        );
    }
}

export default reduxForm({
  form: 'SigninForm'
})(SigninForm); 