const path = require('path');
const express = require('express');
const app = express();
const port = 8000;


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
