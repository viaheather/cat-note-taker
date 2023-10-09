const api = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

//GET Route
api.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received`);

    readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST Route
api.post('/api/notes'), (req, res) => {
    console.info(`${req.method} request received`);

    const { title, text } = req.body;

    if (title && text) {
        const newTask = {
            title,
            text,
            task_id: uuid(),
        };

        readAndAppend(newTask, 'db/db.json');

        const response = {
            status: 'success',
            body: newTask,
        };

        res.json(response);
    } else {
        res.json('Error in posting task');
    }
}

module.exports = api;