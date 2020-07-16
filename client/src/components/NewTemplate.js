import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NewTemplate extends Component {
  constructor() {
    super();
    this.state = {
      namaTemplate: ''
    };
    this._inputNamaTemplate = this._inputNamaTemplate.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };
  _inputNamaTemplate(e) {
    this.setState( {namaTemplate: e.target.value} );
  };
  _onSubmit(e) {
    e.preventDefault();

    const template = {
      namaTemplate: this.state.namaTemplate
    };

    this.props.storeTemplate(template);

    this.setState({
      namaTemplate: ''
    });
  }
  render() {
    return (
      <div className="new-template">
        <div className="new-template-title">
          <h2>
            New Template
          </h2>
        </div>
        <div className="new-template-input">
          {this.props.template.error && <h3>Error bro</h3>}
          <div className="row">
            <form className="col s12" onSubmit={this._onSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input onChange={this._inputNamaTemplate} value={this.state.namaTemplate} type="text" className="validate"></input>
                  <label htmlFor="nama_template">Nama Template</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Emaily</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default connect(({ template }) => ({ template }), actions)(NewTemplate);