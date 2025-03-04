// Create web server
// 1. Import the express module
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World');
});
// 4. Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// 5. Export the app object
module.exports = app;