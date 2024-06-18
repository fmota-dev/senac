const express = require('express');
const eventoRoutes = require('../src/routes/eventoRoutes');
const docsRoutes = require('../src/routes/docsRoutes');

const app = express();
const path = require('path');
const porta = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(eventoRoutes);
app.use(docsRoutes);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/html', 'index.html'));
});

app.get('/admin', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/html/adm', 'dashboard.html'));
});

app.listen(porta, () => {
	console.log(`Servidor funcionando no endereço http://localhost:${porta}`);
});
