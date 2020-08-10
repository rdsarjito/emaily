const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  username: String,
  email: String,
  password: String,
  credits: { type: Number, default: 0 },
  avatar: String,
  name: String
});

mongoose.model('users', userSchema);