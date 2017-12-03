const fetch = require('node-fetch');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const heroku = require('./heroku.js');
const omdb = require('./omdb.js');
const API_KEY = '852159f0';
const PORT = 8000;

const jsonParser = bodyParser.json();

let reviews = {};
let movies = {};
const token = '';

app.use(express.static('build'));

app.get('/movie/search/:prefix', (req, res) => {
    omdb.getMovies(API_KEY, req.params.prefix)
    .then(searchResult => {
        res.write(JSON.stringify(searchResult));
        res.end();
    })
    .catch(e => console.warn(e));
});

app.get('/movie/:title', (req, res) => {
    omdb.getMovieInfo(API_KEY, req.params.title)
    .then(movieInfo => {
        res.send(JSON.stringify(movieInfo));
        //res.end();
    })
    .catch(e => console.warn(e));
});

app.post('/review/:username', jsonParser, (req, res) => {
    const body = req.body;
    console.log(body);
    const username = body.username;
    const reviewList = reviews.username;
    reviewList.append(body.review);
});

app.delete('/review/:username', jsonParser, (req, res) => {
    const body = req.body;
    console.log(body);
    const username = body.username;
    
});

app.listen(PORT, () => {
    console.log(`It's port: ${PORT}`);
});