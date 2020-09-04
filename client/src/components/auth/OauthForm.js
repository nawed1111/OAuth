import React from 'react';
import { Link } from 'react-router-dom';
import googleLoginIcon from '../../static/images/google1.png';
// import facebookLoginIcon from '../../static/images/facebook.png';
export default () => {
    return(
        <div>
          <Link to="/auth/google">
            <img src={googleLoginIcon} alt="Login with Google"/>
          </Link>
          <Link to="/auth/facebook">
            <img src="https://i.stack.imgur.com/ZW4QC.png" alt="Login with Facebook"/>
          </Link>  
        </div>
    );
}