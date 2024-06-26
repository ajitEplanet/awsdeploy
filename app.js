
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
console.log('hihello hi fff')
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
