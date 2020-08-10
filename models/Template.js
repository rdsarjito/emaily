const mongoose = require('mongoose');
const { Schema } = mongoose;

const templateSchema = new Schema({
  namaTemplate: String,
  subject: { type: String, default: ''},
  file: String,
});

mongoose.model('templates', templateSchema);