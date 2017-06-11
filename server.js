// server.js

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {

  // Log if error connecting to DB
  if (err) return console.log(err)

  // Get the routes module
  require('./app/routes')(app, database);

  // Start listening
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });

  // all done within a callback, so only happens when DB conn confirmed
})
