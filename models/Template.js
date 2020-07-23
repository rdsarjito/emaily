const mongoose = require('mongoose');
const { Schema } = mongoose;

const templateSchema = new Schema({
  namaTemplate: String,
  subject: { type: String, default: ''},
  file: { type: String, default: ''},
});

mongoose.model('templates', templateSchema);
