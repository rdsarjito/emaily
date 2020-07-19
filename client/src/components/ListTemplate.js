import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LisTemplate extends Component {
  constructor() {
    super();

    this.state = {templates: []};
  }

  componentDidMount() {
    this.props.fetchTemplate();
  }

  _renderList() {
    return this.props.templates.map(template => {
      return (
        <div>
          <li className="collection-item" key={template._id}>
            {template.namaTemplate}
            <button onClick={() => { this.props.deleteTemplate(template._id) }}>delete</button>
          </li>
        </div>
      )
    });
  };

  de

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
  
export default connect(mapStateToProps, mapDispatchToProps)(LisTemplate);