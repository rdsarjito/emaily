const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

  // auth
  app.post('/auth/signUp', async (req, res) => {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({ username, email, password: hashedPassword });

    try {
      const data = await newUser.save();
      res.status(201).send(data);
    } catch (error) {
      res.status(500).json({ data: null, error: true })
    }
  });

  app.post('/auth/signIn', async (req, res) => {
    const users = await User.findOne({ username: req.body.username });
    if (users == null) {
      return res.status(400).send('Cannot find user');
    }

    try {
      if(await bcrypt.compare(req.body.password, users.password)) {
        const accesToken = jwt.sign({users}, process.env.ACCES_TOKEN_SECRET)
        res.json({ accesToken: accesToken })
      } else {
        res.send('Nol Allowed')
      }
    } catch (error) {
      res.status(500).send()
    }
  });

  app.post('/api/post', authenticateToken, async (req, res) => {
    const users = await User.findOne({ username: req.user.users.username });
    res.json(users)
  })

  function authenticateToken(req, res, next) {
    const getToken = req.body.token.split(':')[1];
    const getTokenLagi = getToken.split('}')[0];
    const getTokenLagiLagi = getTokenLagi.split('"')
    console.log(getTokenLagiLagi[1])
    const token = getTokenLagiLagi[1]
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err, user) => {
      if(err) return res.sendStatus(403);
      req.user = user;
      next();
    })
  }

};