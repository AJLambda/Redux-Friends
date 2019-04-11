import React from "react";

//build out a simple login form with username and password inputs and a submit button (design this however you would like).
class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            placeholder="password"
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
