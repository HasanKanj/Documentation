const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('ok');
});

app.get('/test', (req, res) => {
    res.json({ status: 200, message: 'ok' });
  });
  
app.get('/time', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.json({ status: 200, message: currentTime });
  });

  app.get('/hello/:id', (req, res) => {
    const id = req.params.id || 'user';
    res.json({ status: 200, message: `Hello, ${id}` });
  });

  app.get('/search', (req, res) => {
    const search = req.query.s;
    if (search) {
      res.json({ status: 200, message: 'ok', data: search });
    } else {
      res.json({status: 500, error: true, message: 'you have to provide a search' });
    }
  });
  
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});