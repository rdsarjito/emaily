import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

class ListTemplate extends Component {
  constructor() {
    super();

    this._deleteTemplate = this._deleteTemplate.bind(this);
  };

  componentDidMount() {
    this.props.fetchTemplate();
  };
  
  _deleteTemplate(id) {
    this.props.deleteTemplate(id);
    this.props.fetchTemplate();
    console.log(this.props.templates)
  };
  
  _renderList() {
    return this.props.templates.map(template => {
      return (
        <li key={template._id} className="collection-item">
          {template.namaTemplate}
          <div>
            <Link
              className="btn edit-template"
              to={"/template/edit/"+template._id}
            >
              edit
            </Link>
            <button className="btn" onClick={() => { this._deleteTemplate(template._id) }}>delete</button>
          </div>
        </li>
      )
    });
  };

  render() {
    return (
      <ul className="collection">
        {this._renderList()}
      </ul>
    )
  };
};


function mapStateToProps({ templates }) {
  return { templates }
}

const mapDispatchToProps = {
  fetchTemplate: actions.fetchTemplate,
  deleteTemplate: actions.deleteTemplate,
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ListTemplate);