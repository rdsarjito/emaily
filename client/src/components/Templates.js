import React, { Component } from 'react';
import { connect } from 'react-redux';

class Template extends Component {
  render() {
    console.log(this.props.template)
    return (
      <div className="template">
        <div className="template-title">
          <h2>
            List Template
          </h2>
          <div>
            <a className="btn-floating btn-large waves-effect waves-light red" href="/template/new">add<i className="material-icons">add</i></a>
          </div>
        </div>
        <div className="template-collection">
          <div className="collection">
            <a href="#!" className="collection-item active">Alvin</a>
            <a href="#!" className="collection-item">Alvin</a>
            <a href="#!" className="collection-item">Alvin</a>
            <a href="#!" className="collection-item">Alvin</a>
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ template }) {
  return { template: template }
}

export default connect(mapStateToProps)(Template);