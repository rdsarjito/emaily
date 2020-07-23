const mongoose = require('mongoose');
const Template = mongoose.model('templates');

module.exports = app => {
  app.post('/api/template', async (req, res) => {
    
    const { namaTemplate, file } = req.body;
    const newTemplate = new Template({ namaTemplate, file });

    try {
      const data = await newTemplate.save();
      res.status(201).send(data);
    } catch (error) {
      res.status(500).json({ data: null, error: true })
    }
  });

  app.get('/api/template', (req, res) => {
    Template.find()
      .then(templates => res.json(templates))
  });

  app.patch('/api/template/:id', (req, res) => {
    Template.findById(req.params.id)
      .then(template => {
        template.namaTemplate = req.body.namaTemplate;
        template.file = req.body.file

        template.save()
          .then(() => res.json({ data: req.params.id }))
          .catch(err => res.status(400).json({ error: err }));
      })
      .catch(err => res.status(400).json({ error: err }));
  })

  app.delete('/api/current_template/:id', (req, res) => {
    Template.findByIdAndDelete(req.params.id)
      .then(() => res.json())
  })
};