const fetch = require('node-fetch');
const express = require('express');
const app = express();
const API_KEY = '852159f0';
const PORT = 8000;

app.get('/movie/search/:prefix', (req, res) => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${req.params.prefix}`;
    fetch(url)
    .then(r => r.ok ? r.json() : r.json().then(j => Promise.reject(j)))
    .then(j => {
        res.write(JSON.stringify(j));
        res.end();
    })
    .catch(e => console.warn(e));
});

app.get('/movie/:title', (req, res) => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${req.params.title}`;
    fetch(url)
    .then(r => r.ok ? r.json() : r.json().then(j => Promise.reject(j)))
    .then(j => {
        res.write(JSON.stringify(j));
        res.end();
    })
    .catch(e => console.warn(e));
});

app.listen(PORT, () => {
    console.log(`It's port: ${PORT}`);
});