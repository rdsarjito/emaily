import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NewTemplate extends Component {
  constructor() {
    super();
    this.state = {
      namaTemplate: '',
      loading: false,
      file: null
    };
    this._inputNamaTemplate = this._inputNamaTemplate.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  };
  _inputNamaTemplate(e) {
    this.setState({ namaTemplate: e.target.value });
  };
  _inputFileChange = async (e) => {
    this.setState({ loading: true });
    const base64 = await this._toBase64File(e.target.files[0]);
    const response = await axios.post('/api/upload', { base64 });
    if (response.status === 201) {
      this.setState({ file: response.data.path })
    }
    this.setState({ loading: false })
  };
  _toBase64File = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })
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
        <div className="template-title">
          <h2>
            New Template
          </h2>
          <Link 
            className="btn-floating btn-large waves-effect waves-light red"
            to="/template"
          >
            back<i className="material-icons"></i>
          </Link>
        </div>
        <div className="new-template-input">
          <div className="row">
            <form className="col s12" onSubmit={this._onSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input onChange={this._inputNamaTemplate} placeholder="Nama Template" value={this.state.namaTemplate} type="text" className="validate"></input>
                  <img alt="sd" width="200" src={this.state.file} />
                </div>
                <div>
                  <h5>Tambah Gambar</h5>
                  <input onChange={this._inputFileChange} type="file"></input>
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
    );
  };
};

export default connect(({ template }) => ({ template }), actions)(NewTemplate);