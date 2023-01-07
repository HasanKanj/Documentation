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

  app.get('/movies/read/id/:id', (req, res) => {
    const id = req.params.id
    const movie = movies.find(movie => movie.id === id)
    if (movie) {
      res.json({ status: 200, data: movie })
    } else {
      res.status(404).json({ status: 404, error: true, message: `The movie ${id} does not exist` })
    }
  })


// Sort movies by Date
const sortedMoviesByDate = movies.sort((a, b) => a.year - b.year)

// Sort movies by rating
const sortedMoviesByRating = movies.sort((a, b) => b.rating - a.rating)

// Sort movies by title
const sortedMoviesByTitle = movies.sort((a, b) => {
  if (a.title < b.title) return -1
  if (a.title > b.title) return 1
  return 0
})


app.get('/movies/add', (req, res) => {
    const title = req.query.title
    const year = req.query.year
    const rating = req.query.rating || 4
    if (!title || !year || year.length !== 4 || isNaN(year)) {
      res.status(403).json({ status: 403, error: true, message: 'You cannot create a movie without providing a title and a year' })
    } else {
      const newMovie = { title, year, rating }
      movies.push(newMovie)
      res.json({ status: 200, data: movies })
    }
  })

app.get('/movies/read/by-date', (req, res) => {
  res.json({ status: 200, data: sortedMoviesByDate })
})


app.get('/movies/read/by-rating', (req, res) => {
  res.json({ status: 200, data: sortedMoviesByRating })
})

/
app.get('/movies/read/by-title', (req, res) => {
  res.json({ status: 200, data: sortedMoviesByTitle })
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});