const mongoose = require('mongoose');
const Template = mongoose.model('templates');
const requireAccesToken = require('../middlewares/requireAccesToken');

module.exports = app => {
  app.post('/api/template', requireAccesToken, async (req, res) => {
    const { namaTemplate, file } = req.body;
    const newTemplate = new Template({ namaTemplate, file });

    try {
      const data = await newTemplate.save();
      res.status(201).send(data);
    } catch (error) {
      res.status(500).json({ data: null, error: true })
    }
  });

  app.get('/api/template', requireAccesToken, (req, res) => {
    Template.find()
      .then(template => res.json(template))
  });

  app.post('/api/template/update/:id', requireAccesToken, (req, res) => {
    Template.findById(req.params.id)
      .then(template => {
        template.namaTemplate = req.body.namaTemplate;

        template.save()
          .then(() => res.json('Template Updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  })

  app.delete('/api/template/:id', requireAccesToken, (req, res) => {
    Template.findByIdAndDelete(req.params.id)
      .then(() => res.json())
  })
};