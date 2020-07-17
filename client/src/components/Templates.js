import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTemplate } from '../actions'

class Template extends Component {
  componentDidMount() {
    this.props.getTemplate();
  }

  _renderTemplate() {
    return this.props.template.map(template => {
      return (
        <h1>{template.namaTemplate}</h1>
      )
    })
  }

  render() {
    return (
      <div className="template">
        <div className="template-title">
          <div>
          <Link 
            className="btn-floating btn-large waves-effect waves-light red"
            to="/template/new"
          >
            add<i className="material-icons">add</i>
          </Link>
          </div>
        </div>
        <div className="template-collection">
          <div className="collection">
          {this._renderTemplate()}
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ template }) {
  return { template }
}


export default connect(mapStateToProps, { getTemplate })(Template);