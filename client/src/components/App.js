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

class App extends Component {
  componentDidMount () {
    this.props.fetchUser();  
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
}
export default connect(null, mapDispatchToProps)(App);