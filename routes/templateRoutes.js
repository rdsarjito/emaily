const mongoose = require('mongoose');
const router = require('express').Router();
const Template = mongoose.model('templates');



module.exports = app => {
  app.post('/api/newTemplate', async (req, res) => {
    
    const namaTemplate = req.body.namaTemplate;

    const newTemplate = new Template({namaTemplate});

    newTemplate.save()
      .then(() => res.json(console.log(res)))
      .catch(err => res.status(400).json('Error: ' + err))
  })
}