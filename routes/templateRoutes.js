const mongoose = require('mongoose');
const Template = mongoose.model('templates');

module.exports = app => {
  app.post('/api/new_template', async (req, res) => {
    
    const { namaTemplate } = req.body;
    const newTemplate = new Template({ namaTemplate });

    try {
      const data = await newTemplate.save();
      res.status(201).send(data);
    } catch (error) {
      res.status(500).json({ data: null, error: true })
    }
  });

  app.get('/api/current_template', (req, res) => {
    Template.find()
      .then(template => res.json(template))
  });
};