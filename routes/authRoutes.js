const passport = require('passport');
// const mid = require('../middleware');

// const handlerSelanjutnya = (req, res, next) => {
//   if (true) {
//     next();
//   } else {
//     res.send('error di selanjutnya');
//   }
// }

// const handleLogin = (req, res, next) => {
//   console.log(req);
//   res.send('success');
// };

module.exports = app => {
  app.get(
    '/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/facebook', passport.authenticate('facebook', {
      scope: ['profile', 'email']
    })
  );

  // app.get('/login', mid, handlerSelanjutnya, handleLogin);

  // app.get('/gagal', (req, res) => {
  //   res.send('gagal auth');
  // });

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    });

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/surveys');
    });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

};