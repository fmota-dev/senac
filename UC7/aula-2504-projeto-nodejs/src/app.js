const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hoje é quinta-feira 25/04/2024');
})

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/cadastro.html'));
});

app.post('/cadastro', (req, res) => {
    const {nome, telefone, idade} = req.body;
    res.send(`Os dados recebidos foram: ${nome}, ${telefone}, ${idade}`);
})
