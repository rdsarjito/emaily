import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListTemplate from './ListTemplate';

class Template extends Component {

  render() {
    return (
      <div className="template">
        <div className="template-title">
          <h2>List Template</h2>
          <div>
            <Link 
              className="btn-floating btn-large waves-effect waves-light red"
              to="/template/new"
            >
              add<i className="material-icons"></i>
            </Link>
          </div>
        </div>
        <ListTemplate />
      </div>
    );
  };
};



export default connect(null)(Template);