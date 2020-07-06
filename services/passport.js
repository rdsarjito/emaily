const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys');

const credentials = {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
};

const callbackStrategy = async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id })
  if (existingUser){
    done(null, existingUser);
    return;
  }
  const user = await new User({ googleId: profile.id, avatar: profile.photos[0].value, name: profile.name.givenName }).save()
  done(null, user);
};

const User = mongoose.model('users')
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    });
});

passport.use(new GoogleStrategy(credentials, callbackStrategy));