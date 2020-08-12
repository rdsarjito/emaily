import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import * as actions from '../actions'

class Header extends Component {
  componentDidMount () {
    this.props.fetchUser();
  };

  _buttonSignOut = () => {
    this.props.signOut()
  };

  _renderContent() {
    switch (this.props.auth || this.props.authJWT){
      case null:
        return;
      case false:
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
      default:
        return [
          <li key="1">
            <a href="/template">Add Template</a>
          </li>,
          <li key="2"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="4" className="avatar-box">
            <img src={this.props.auth.avatar} alt="avatar" className="avatar"></img>
          </li>,
          <li key="5"><a href='/api/logout' onClick={this._buttonSignOut}>Logout</a></li>,
        ];
    };
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

function mapStateToProps(state) {
  return { 
    auth: state.auth,
    authJWT: state.authJWT
  }
}

const mapDispatchToProps = {
  fetchUser: actions.fetchUser,
  signOut: actions.signOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);