import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Template from './Templates';
import NewTemplate from './NewTemplate';
import EditTemplate from './EditTamplate';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { JWT_TOKEN } from '../actions/types';

class App extends Component {
  componentDidMount () {
    this.props.fetchUser();
    if(localStorage.getItem(JWT_TOKEN)) {
      this.props.fetchData();
      console.log('tampil')
    };

  };

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/template" component={Template} />
            <Route path="/template/new" component={NewTemplate} />
            <Route path="/template/edit/:id" component={EditTemplate} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

const mapDispatchToProps = {
  fetchUser: actions.fetchUser,
  fetchData: actions.fetchData
}
export default connect(null, mapDispatchToProps)(App);