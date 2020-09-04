import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component{
    render(){
        return(
            <div>
                <h2>Home Page</h2>
                <Link to="/auth"> Login
                </Link>
            </div>
        );
    }
}

export default HomePage;