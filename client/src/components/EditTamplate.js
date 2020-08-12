import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import { JWT_TOKEN } from '../actions/types';

class EditTamplate extends Component {
  constructor() {
    super();
    this.state = {
      namaTemplate: '',
      accesToken: localStorage.getItem(JWT_TOKEN)
    };
    this._inputNamaTemplate = this._inputNamaTemplate.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };

  _inputNamaTemplate(e) {
    this.setState( {namaTemplate: e.target.value} );
  };
  _onSubmit(e) {
    e.preventDefault();

    const dataTemplate = {
      namaTemplate: this.state.namaTemplate
    };

    this.props.updateTemplate(this.props.match.params.id, dataTemplate, this.state.accesToken);

    this.setState({
      namaTemplate: ''
    });
  }
  render() {
    return (
      <div className="edit-template">
        <div className="template-title">
          <h2>
            Edit Template
          </h2>
          <Link
            className="btn-floating btn-large waves-effect waves-light red"
            to="/template"
          >
            back<i className="material-icons"></i>
          </Link>
        </div>
        <div className="edit-template-input">
          <div className="row">
            <form className="col s12" onSubmit={this._onSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input onChange={this._inputNamaTemplate} placeholder="Nama Template" value={this.state.namaTemplate} type="text" className="validate"></input>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(({ templates }) => ({ templates }), actions)(EditTamplate);