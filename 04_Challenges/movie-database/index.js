const express = require('express');
const app = express();
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

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
  
  app.post('/movies/create', (req, res) => {
    res.send('Movie added')
  })
  
  app.get('/movies/read', (req, res) => {
    res.send('Movies retrieved')
  })
  
  app.put('/movies/update', (req, res) => {
    res.send('Movie updated')
  })
  
  app.delete('/movies/delete', (req, res) => {
    res.send('Movie deleted')
  })
  
  app.get('/movies/read', (req, res) => {
    res.send({ status: 200, data: movies })
  })


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});