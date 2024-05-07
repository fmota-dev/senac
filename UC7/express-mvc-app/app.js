const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const produtoRoutes = require ('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const fornecedorRoutes = require('./routes/fornecedorRoutes');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/produto', produtoRoutes);
app.use('/cliente', clienteRoutes);
app.use('/fornecedor', fornecedorRoutes);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/html', 'index.html'));
});

app.listen(port, () =>{
    console.log(`Aplicação rodando em: http://localhost:${port}`);
});