import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import { JWT_TOKEN } from '../actions/types';

class ListTemplate extends Component {
  constructor() {
    super();

    this.state = {
      accesToken: localStorage.getItem(JWT_TOKEN),
    }

    this._deleteTemplate = this._deleteTemplate.bind(this);
  };

  componentDidMount() {
    this.props.fetchTemplate(this.state.accesToken);
  };
  
  _deleteTemplate(id) {
    this.props.deleteTemplate(id, this.state.accesToken);
    this.props.fetchTemplate(this.state.accesToken);
  };
  
  _renderList() {
    return this.props.templates.map(template => {
      return (
        <li key={template._id} className="collection-item">
          <div>
            <h5>{template.namaTemplate}</h5>
            <img alt="" width="200" src={template.file} />
          </div>
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
    console.log(this.props.templates)
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