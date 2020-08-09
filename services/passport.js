const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const bcrypt = require('bcrypt');

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
};

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

const authenticateUser = async (username, password, done) => {
  const existingUser = await User.findOne({ username: username });
  console.log(existingUser)
  if (existingUser == null) {
    return done(null, false, { massage: 'No user with that email' });
  }

  try {
    if (await bcrypt.compare(password, User.password)) {
      return done(null, user)
    } else {
      return done(null, false, { massage: 'Password incorrect' });
    }
  } catch (error){
    return done(error);
  }
}

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
passport.use(new LocalStrategy({ usernameField: 'username' }), authenticateUser);