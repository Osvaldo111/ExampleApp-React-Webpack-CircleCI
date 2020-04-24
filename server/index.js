const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

// Dist file directory
const DIST_DIR = path.join(__dirname, '../dist');

// Bundle File
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const mockResponse = {
  foo: 'bar',
  bar: 'foo',
};

app.use(express.static(DIST_DIR));

app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});
app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
