// routes/note_routes.js

// Required for the MongoDB ID param
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  // Update a note
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      }
    });
  });

  // List all notes
  app.get('/notes', (req, res) => {

    db.collection('notes').find().toArray(function(err, docs) {

      res.contentType('application/json');
      res.send(JSON.stringify(docs));

      console.log(JSON.stringify(docs));
    });

  });

  // Delete a note by ID
  app.delete('/notes/:id', (req, res) => {

    // Get the ID of the note to Delete
    const id = req.params.id;

    // Create an ObjectID for MongoDB
    const details = { '_id' : new ObjectID(id) }

    db.collection('notes').deleteOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      }
      else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });

  // Get a note by ID
  app.get('/notes/:id', (req, res) => {

    // Get the ID from the request param
    const id = req.params.id;

    // Details to search with
    const details = { '_id': new ObjectID(id) };

    // Find the item with the _id specified
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  // Create a note
  app.post('/notes', (req, res) => {

    const note = { text: req.body.body, title: req.body.title };

    db.collection('notes').insert(note, (err, result) => {

      if (err) {
        res.send({ 'error': 'An error has occurred' });
      }
      else {
        res.send(result.ops[0]);
      }
    });

    // Log out the body
    console.log(req.body)
  });
};
