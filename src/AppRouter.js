import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux"

import PropTypes from 'prop-types';

import Test from "./Test";

import "./App.scss";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                        <li>
                            <Link to="/test/">Test</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
                <Route path="/test/" component={Test} />
            </div>
        </Router>
    </Provider>
);

AppRouter.propTypes = {
    store: PropTypes.object.isRequired
};

export default AppRouter;
