import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
    }
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

  _onSubmit(e) {
    console.log('kena')
    e.preventDefault();

    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    this.props.storeData(data);

    this.setState({
      username: '',
      email: '',
      password: '',
    })

  };

  render() {
    return (
      <div className="row">
        <form className="row s12" onSubmit={this._onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input onChange={this._inputUsernameChange} id="username" type="text" className="validate" placeholder="Username" value={this.state.username}></input>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input onChange={this._inputEmailChange} id="email" type="email" className="validate" placeholder="Email" value={this.state.email}></input>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input onChange={this._inputPasswordChange} id="password" type="password" className="validate" placeholder="Password" value={this.state.password}></input>
            </div>
          </div>
          <button onSubmit={this._onSubmit}>Daftar</button>
        </form>    
      </div> 
    );
  };
};


export default connect(null, actions)(SignUp);