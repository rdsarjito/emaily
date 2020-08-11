import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import * as actions from '../actions/';

class Header extends Component {
  _onDelete = () => {
    this.props.logout()
  }

  _renderContent() {
    console.log(this.props.auth.token)
    if (this.props.auth.token !== '') {
      return [
        <li key="1">
          <a href="/template" className="btn">Add Template</a>
        </li>,
        <li key="2"><Payments /></li>,
        <li key="3" style={{ margin: '0 10px' }}>
          Credits: {this.props.auth.credits}
        </li>,
        <li key="4" className="avatar-box">
          <img src={this.props.auth.avatar} alt="avatar" className="avatar"></img>
        </li>,
        <li key="5" onClick={this._onDelete}>Logout</li>,
      ]
    }
    return [
        <li key="1">
          <a href='/auth/google'>Login with Google</a>
        </li>,
        <li key="2">
          <a href='/auth/facebook'>Login with Facebook</a>
        </li>,
        <li key="3">
          <a href='/signup'>Sign Up</a>
        </li>,
        <li key="4">
        <a href='/signin'>Sign In</a>
      </li>,
    ];
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link 
            to={this.props.auth ? '/surveys' : '/'} 
            className="left brand-logo"> 
            Emaily
          
          </Link>
          <ul className="right">
            {this._renderContent()}
          </ul>
        </div>
      </nav>
    );
  };

};

function mapStateToProps({ auth }) {
  return { auth: auth }
}


export default connect(mapStateToProps, actions)(Header);