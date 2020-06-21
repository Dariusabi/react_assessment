import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LandingPage extends Component {
    render() {
        return (
            <>
                <h1 id="main">Welcome to your YouTube Chanel!</h1>
                <div id="container">
                    <div>
                        <h3><Link className="link" to="/signup">Sign Up</Link></h3>
                        <div className="line"> </div>
                        <h3><Link className="link" to="/login">Sign In</Link></h3>
                    </div>
                </div>
            </>
        );
    }
}

export default LandingPage;