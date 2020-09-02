import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Login = () => <h2> <a href="/auth/google">Login with Google</a> </h2>
const Home = () => <h2> Home Page</h2>

class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                    </div>
                </BrowserRouter>
                
            </div>
        );
    }
};

export default App;