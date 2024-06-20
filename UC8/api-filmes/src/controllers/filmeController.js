const filme = require('../models/Filme');

class FilmeController{

    async listarFilmes(req, res){
        const filmes = await filme.listarFilmes();
        res.json(filmes);

    }

}
module.exports = new FilmeController();

