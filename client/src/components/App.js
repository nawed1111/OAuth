import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';
import HomePage from './HomePage';
import LoginPage from './auth/LoginPage'; 
import './App.css';

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/auth" component={LoginPage} />
                    </div>
                </BrowserRouter>
                
            </div>
        );
    }
};

export default connect(null, actions)(App);