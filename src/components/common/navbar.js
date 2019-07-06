import React, { Component } from 'react';
import { HashRouter as Router, NavLink as Link, Switch, Route} from 'react-router-dom';

import Home from '../home/home';
// import 'navbar.sass';

class Navbar extends Component {
    render() {
        return (
            <Router>
                <Link to="/" exact activeClassName='active'>Home</Link>
                <Link to="/bio">Bio</Link>
                <Switch>
                    <Route path="/" exact component={ Home } />
                </Switch>
            </Router>
        )
    }
}

export default Navbar;
