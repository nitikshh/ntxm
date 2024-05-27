const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define the path to the static directory
const staticPath = path.join(__dirname, 'static');

// Serve static files from the static directory
app.use('/static', express.static(staticPath));

// Serve index.html when accessing the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/cources', (req, res) => {
  res.sendFile(path.join(__dirname, 'cources.html'));
});

app.get('/blogs', (req, res) => {
  res.sendFile(path.join(__dirname, 'blogs.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
