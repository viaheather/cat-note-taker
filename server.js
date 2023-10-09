const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);