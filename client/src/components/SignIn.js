import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
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

    const data = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.findData(data);
    
    this.setState({
      username: '',
      password: '',
    })

  };
  render() {
    return (
      <div className="row">
        <form className="row s12" onSubmit={this._onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input onChange={this._inputUsernameChange} id="username" type="text" className="validate" placeholder="Username"></input>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input onChange={this._inputPasswordChange} id="password" type="password" className="validate" placeholder="Password" ></input>
            </div>
          </div>
          <button onSubmit={this._onSubmit}>Daftar</button>
        </form>
      </div>
    );
  };
}

export default connect(null, actions)(SignIn);