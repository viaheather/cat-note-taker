const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
	fs.readFile('db/db.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
		}
		res.json(JSON.parse(data));
	});
});

app.post('api/notes', (req,res) => {
	const newNote = req.body;
	newNote.id = uuid();
	
	fs.appendfile('db/db.json', 'utf8', (err, data) => {
		json.stringify(data)
		if (err) {
			console.log(err);
		}
	})
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
