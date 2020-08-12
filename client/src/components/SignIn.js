import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    };
    this._inputUsernameChange = this._inputUsernameChange.bind(this);
    this._inputPasswordChange = this._inputPasswordChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };

  _inputUsernameChange(e) {
    this.setState({ username: e.target.value });
  };

  _inputPasswordChange(e) {
    this.setState({ password: e.target.value })
  };

  _onSubmit(e) {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.signIn(userData);
    
    this.setState({
      username: '',
      password: '',
    });

  };
  render() {
    return (
      <div className="container-sign-in">
        <form onSubmit={this._onSubmit}>
          <h2>Sign In</h2>
          <div>
            <h5>Username</h5>
            <input onChange={this._inputUsernameChange} id="username" placeholder="Masukan Username" value={this.state.username} type="text"></input>
          </div>
          <div>
            <div>
              <h5>Password</h5>
              <input onChange={this._inputPasswordChange} id="password" placeholder="Masukan Password" value={this.state.password} type="password"></input>
            </div>
          </div>
          <button className="btn waves-effect" onSubmit={this._onSubmit}>Sign In</button>
        </form>
      </div>
    );
  };
};

export default connect(null, actions)(SignIn);