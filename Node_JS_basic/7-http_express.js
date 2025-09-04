const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((output) => {
      res.end(output);
    })
    .catch(() => {
      res.end('Cannot load the database');
    });
});

app.listen(1245);
module.exports = app;
