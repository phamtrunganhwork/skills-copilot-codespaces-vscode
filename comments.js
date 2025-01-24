//Create web server
const express = require('express');
const app = express();

//Create a route for the comments
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

//Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});