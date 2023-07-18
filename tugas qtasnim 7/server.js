const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Selamat datang di server Express!');
});

app.get('/about', (req, res) => {
  res.send('Halaman About');
});

app.use(' ', (req, res, next) => {
  console.log('Middleware yang pertama');
  next()
});

app.get('/info', (req, res) => {
  res.send('informasi');
});

app.get(' ', (req, res, next) => {
  console.log('Middleware yang kedua');
  next()
});

app.get('/user/:id', (req, res) => {
  res.send('Anda mengakses pengguna dengan ID: {id}');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}/`);
});