// Include the library
const express = require('express');
const app = express();

// Public folder served directly to the web browser
app.use(express.static('public'));
app.set('view engine', 'pug');

// Data
const data = require('./data/app-data.js');
data.seedSampleData();
console.log(data.urls);

const mvcController = require(`./controllers/mvc-controller.js`);
mvcController.setup(app, data);

let port = process.argv[2];
if (!port) port = process.env.PORT;
if (!port) port = 8080;

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
})
  .on('error', (err) => {
    console.error(`Cannot start listening on port: ${port}`);
  });