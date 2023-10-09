const express = require('express');
const apiRoute = require('./apiRoute.js');
const htmlRoute = require('./htmlRoute.js');

const app = express();

app.use('/api/notes', apiRoute);
app.use('/', htmlRoute);

module.exports=app;