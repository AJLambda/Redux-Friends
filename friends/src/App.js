import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

import { connect } from "react-redux";

//Add a route for a login page and build out a simple login form with username and password inputs and a submit button (design this however you would like).
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friendslist">Friends List</Link>
            </li>
          </ul>

          <Route path="/login" component={Login} />
          <PrivateRoute
            exact
            path="/friendslist"
            component={() => <FriendsList friends={this.props.friends} />}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
