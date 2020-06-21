import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import SearchPage from '../components/SearchPage';
import Signup from '../actions/SignUp';
import SignIn from '../actions/SignIn';
import { auth } from '../actions/firebase';
import { PublicRoute, PrivateRoute } from '../actions/Router';
import LandingPage from 'LandingPage';


class App extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
            loading: true,
        };
    }

    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    loading: false
                })
            }
        })
    }

    render() {
        return this.state.loading === true ? <h2>Loading...</h2> : (
            <Router>
                <Switch>
                    <Route exact path="/" component={LandinPage}/>
                    <PrivateRoute path="/foodtrucks" authenticated={this.state.authenticated} component={SearchPage}/>
                    <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}/>
                    <PublicRoute path="/signin" authenticated={this.state.authenticated} component={SignIn}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
