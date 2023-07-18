const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log("Middleware yang pertama");
  next();
});

app.get('/info', (req, res) => {
  res.send("Informasi");
});

app.use((req, res, next) => {
  console.log("Middleware yang kedua");
  next();
});

app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});