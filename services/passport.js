const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const credentialsGoogle = {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
};

const credentialsFacebook = {
  clientID: keys.facebookClientID,
  clientSecret: keys.facebookClientSecret,
  callbackURL: '/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)','email'],
  proxy: true
}

const callbackStrategyGoogle = async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id });
  console.log(existingUser)
  if (existingUser){
    done(null, existingUser);
    return;
  }
  const user = await new User({ googleId: profile.id, avatar: profile.photos[0].value, name: profile.name.givenName }).save()
  done(null, user);
};

const callbackStrategyFacebook = async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ facebookId: profile.id });
  if (existingUser){
    done(null, existingUser);
    return;
  }
  const user = await new User({ facebookId: profile.id, avatar: profile.photos[0].value, name: profile.name.givenName }).save()
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

passport.use(new GoogleStrategy(credentialsGoogle, callbackStrategyGoogle));
passport.use(new FacebookStrategy(credentialsFacebook, callbackStrategyFacebook));