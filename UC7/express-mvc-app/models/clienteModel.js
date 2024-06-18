class Cliente{

    constructor(id,  nome, email){
        this.id = id;
        this.nome = nome;
        this.email = email;
       
    }

    getCliente(email){
        if(email == this.email){
            return true
        }
    }
}
module.exports = Cliente;