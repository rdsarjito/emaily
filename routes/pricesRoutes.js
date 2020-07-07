const mid = require('../middleware');
module.exports = (app) => {
  app.get('/price', mid, (req, res) => {
    res.send('all price');
  })
}