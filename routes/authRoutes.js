const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const bcrypt = require('bcrypt');

module.exports = app => {
  // google oauth
  app.get(
    '/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/facebook', passport.authenticate('facebook', {
      scope: 'email'
    })
  )

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    });

  // facebook oauth
  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/surveys');
    }
  )

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  // oauth
  app.post('/auth/signUp', async (req, res) => {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({ username, email, password: hashedPassword });

    try {
      const data = await newUser.save();
      res.redirect('/surveys');
    } catch (error) {
      res.status(500).json({ data: null, error: true })
    }
  });

  app.post('/auth/signIn', async (req, res, done) => {
    const user = await User.findOne({ username: req.body.username });
    if (user == null) {
      return res.status(400).send('Cannot find user');
    }

    try {
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.json(user)
      } else {
        res.send('Nol Allowed')
      }
    } catch (error) {
      res.status(500).send()
    }
  });

};