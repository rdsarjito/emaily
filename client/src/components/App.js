import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Template from './Templates';
import NewTemplate from './NewTemplate';

class App extends Component {
  componentDidMount () {
    this.props.fetchUser();
    this.props.storeTemplate();
  };

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/template" component={Template} />
            <Route path="/template/new" component={NewTemplate} />
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    listDataBarang: state.barang.listBarang,
    counter: state.increment,
  }
}

const mapDispatchToProps = {
  fetchUser: actions.fetchUser,
  storeTemplate: actions.storeTemplate,
  addIncrement: actions.addIncrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);