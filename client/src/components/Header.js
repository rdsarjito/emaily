import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  _renderContent() {
    switch (this.props.auth){
      case null:
        return;
      case false:
        return (
          <ul>
            <li>
              <a href='/auth/facebook'>Login with Facebook</a>
            </li>
            <li>
              <a href='/auth/google'>Login with Google</a>
            </li>
          </ul>
        );
      default:
        return [
            <li key="1"><Payments /></li>,
            <li key="3" style={{ margin: '0 10px' }}>
              Credits: {this.props.auth.credits}
            </li>,
            <li key="2"><a href='/api/logout'>Logout</a></li>
        ];
    }
  }

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

export default connect(mapStateToProps)(Header);