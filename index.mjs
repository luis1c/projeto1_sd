import express from 'express';


const app = express()

app.get('/hello', (req, res) => {
  if(req.query.name) {
    res.send(`Hello ${req.query.name}!`)
  }
  else {
    res.send('Hello World!')
  }
});

app.get('/clientes', (req, res) => {
  res.send(['Bruno', 'Caio', 'Lucas'])
});

app.post('/', (req, res) => {
  res.send('Hello Post!')
});

app.listen(process.env.PORT,  "0.0.0.0", () => {
  console.log('App Started...');
})
