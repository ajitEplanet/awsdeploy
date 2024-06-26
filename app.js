
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/getUser', (req, res) => {
  res.send({username:'ajit',userid:'11:11',usermobile:'59976131489',userAdrees:'odisha',});
});
app.get('/getUser/id', (req, res) => {
  res.send({username:'ajit',userid:'11:11',usermobile:'59976131489',userAdrees:'odisha',});
});
console.log('hihello hi fff')
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
