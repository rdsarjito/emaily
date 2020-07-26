const fs = require('fs').promises;
const UUID = require('uuid').v4;

module.exports = app => {
  app.post(
    '/api/upload', async (req, res) => {
      const file = req.body.base64;
      const fileType = req.body.base64.substring("data:image/".length, req.body.base64.indexOf(";base64"));
      if (!/^data:image\/(png|jpeg|jpg)/.test(file)) {
        res.status(403).json({ error: 'format is not suppported yet' });
        return;
      };
      const sanitize = file.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
      const fullpath = `./public/${UUID()}.${fileType}`;
      await fs.writeFile(fullpath, sanitize, 'base64');
      res.status(201).json({ path: `http://localhost:5000${fullpath.replace('.', '')}` });
      console.log(res)
    }
  );
};