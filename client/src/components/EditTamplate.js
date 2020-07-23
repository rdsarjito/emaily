import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditTamplate extends Component {
  constructor() {
    super();
    this.state = {
      namaTemplate: '',
      loading: false,
      file: null,
    };
    this._inputNamaTemplate = this._inputNamaTemplate.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };

  _handleInputFileChange = async (e) => {
    this.setState({ loading: true });
    const base64 = await this._toBase64File(e.target.files[0]);
    const response = await axios.post('/api/upload', { base64 });
    if (response.status === 201) {
      this.setState({ file: response.data.path })
    }
    this.setState({ loading: false })
  }
  _toBase64File = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })
  }
  _inputNamaTemplate(e) {
    this.setState( {namaTemplate: e.target.value} );
  };
  _onSubmit(e) {
    e.preventDefault();

    const template = {
      namaTemplate: this.state.namaTemplate,
      file: this.state.file
    };

    this.props.updateTemplate(this.props.match.params.id, template);

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
            to="/template/"
          >
            back<i className="material-icons"></i>
          </Link>
        </div>
        <div className="edit-template-input">
          <div className="row">
            <form className="col s12" onSubmit={this._onSubmit}>
              <input
                onChange={this._handleInputFileChange}
                type="file"/>
              <img alt="sd" width="200" src={this.state.file} />
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