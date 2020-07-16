const mongoose = require('mongoose');
const { Schema } = mongoose;

const templateSchema = new Schema({
  templateId: String, default:0,
  namaTemplate: String,
  subject: String
});

mongoose.model('templates', templateSchema);