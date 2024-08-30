// Create web server
// Create the server
const express = require('express');
const app = express();
const port = 3000;

// Importing the comments module
const comments = require('./comments');

// Create the route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Create the route to get a comment by ID
app.get('/comments/:id', (req, res) => {
  res.json(comments.getComment(req.params.id));
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});