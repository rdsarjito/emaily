import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this._inputUsernameChange = this._inputUsernameChange.bind(this);
    this._inputEmailChange = this._inputEmailChange.bind(this);
    this._inputPasswordChange = this._inputPasswordChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };

  _inputUsernameChange(e) {
    this.setState({ username: e.target.value });
  };

  _inputEmailChange(e) {
    this.setState({ email: e.target.value });
  };

  _inputPasswordChange(e) {
    this.setState({ password: e.target.value })
  };

  _onSubmit = async(e) => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    const response = await axios.post('/auth/signUp', data);
    
    if (response.status === 201) {
      window.alert("Berhasil Sign Up")
    }
    this.setState({
      username: '',
      email: '',
      password: '',
    });

  };

  render() {
    return (
      <div>
        <form onSubmit={this._onSubmit}>
          <div>
            <div>
              <input onChange={this._inputUsernameChange} id="username" type="text" className="validate" placeholder="Username" value={this.state.username}></input>
            </div>
          </div>
          <div>
            <div>
              <input onChange={this._inputEmailChange} id="email" type="email" className="validate" placeholder="Email" value={this.state.email}></input>
            </div>
          </div>
          <div>
            <div>
              <input onChange={this._inputPasswordChange} id="password" type="password" className="validate" placeholder="Password" value={this.state.password}></input>
            </div>
          </div>
          <button className="btn" onSubmit={this._onSubmit}>Daftar</button>
        </form>    
      </div> 
    );
  };
};

export default connect(null, actions)(SignUp);