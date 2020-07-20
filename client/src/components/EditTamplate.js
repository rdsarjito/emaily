import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EditTamplate extends Component {
  render() {
    return (
      <div>
        Ini Edit
      </div>
    )
  }
}

export default connect(({ template }) => ({ template }), actions)(EditTamplate);