const express = require('express');
const apiRoute = require('routes/apiRoute.js');
const htmlRoute = require('routes/htmlRoute.js');

const app = express();

app.use('/api/notes', apiRoute);
app.use('/', htmlRoute);

module.exports=router;