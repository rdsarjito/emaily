import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Template from './Templates';
import NewTemplate from './NewTemplate';
import EditTemplate from './EditTamplate';

class App extends Component {
  componentDidMount () {
    this.props.fetchUser();
    this.props.fetchTemplate();
  };

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/template" component={Template} />
            <Route path="/template/new" component={NewTemplate} />
            <Route  path="/template/edit" component={EditTemplate} />
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

const mapDispatchToProps = {
  fetchUser: actions.fetchUser,
  fetchTemplate: actions.fetchTemplate,
}
export default connect(null, mapDispatchToProps)(App);