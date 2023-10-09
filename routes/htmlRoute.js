const htmlRoute = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route
htmlRoute.get('/', (req, res) => {
    console.info(`${req.method} request received`);
    readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route
  htmlRoute.post('/', (req, res) => {
    console.info(`${req.method} request received`);
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newTask = {
        title,
        text,
        task_id: uuid(),
      };
  
      readAndAppend(newTask, 'db/db.json');
      res.json(`Task added successfully`);
    } else {
      res.error('Error in adding task');
    }
  });
  

module.exports = htmlRoute;
