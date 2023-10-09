const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const fs = require('fs');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => {
	fs.readFile(path.join(__dirname, '/db/db.json'), 'utf8', (err, data) => {
		if (err) {
			console.error(err);
		}
		const notes = JSON.parse(data);
		res.json(notes);
	});
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
