const { Sequelize, QueryTypes } = require('sequelize');

const sequelize = new Sequelize('Biblioteca', 'fmota-dev', '', {
  host: 'fmota-dev',
  dialect: 'mssql'
});

try {
sequelize.authenticate();
  console.log('Conexão com o banco de dados efetuada com sucesso.');
} catch (error) {
  console.error('Não foi possivel conectar com o banco de dados:', error);
}

const selectLivros = async () => {
  const livros = await sequelize.query('SELECT * FROM Bib_livros', { type: QueryTypes.SELECT });
  return livros;
}

selectLivros().then((livros) => {
  console.log(livros);
});
