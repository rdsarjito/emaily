const mongoose = require('mongoose');
const Template = mongoose.model('templates');

module.exports = app => {
  app.post('/api/template', async (req, res) => {
    console.log(req.body)
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
      .then(template => res.json(template))
  });

  app.post('/api/template/update/:id', (req, res) => {
    Template.findById(req.params.id)
      .then(template => {
        template.namaTemplate = req.body.namaTemplate;

        template.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  })

  app.delete('/api/template/:id', (req, res) => {
    Template.findByIdAndDelete(req.params.id)
      .then(() => res.json())
  })
};