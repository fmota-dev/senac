const express = require('express');
const app = express();

const hostname = '127.0.0.1'
const port = 3000

app.listen(port, () => {
    console.log(`Servidor rodando em  http://${hostname}:${port}/`);
    })

app.get('/', (request, response) => {
  response.send('Hello, World!');
});

app.get('/contato', (request, response) => {
  response.send('Página de contato');
});