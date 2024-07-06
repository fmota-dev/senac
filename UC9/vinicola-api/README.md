```markdown
# Vinícola Encantos do Vale API

Esta é a API para gerenciamento do catálogo de produtos, 
categorias e fornecedores da Vinícola Encantos do Vale. 
Desenvolvida utilizando Node.js, Express e Sequelize, 
esta API permite realizar operações CRUD (Create, Read, Update, Delete) 
em produtos, categorias e fornecedores.


## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- dotenv
- nodemon


## Estrutura do Projeto


vinicola-api/
├── config/
│   └── config.json
├── controllers/
│   ├── categoriaController.js
│   ├── fornecedorController.js
│   └── produtoController.js
├── models/
│   ├── categoria.js
│   ├── fornecedor.js
│   └── produto.js
│
│── migrations/
│   ├── migrations.js
│ 
│
├── routes/
│   ├── categoriaRoutes.js
│   ├── fornecedorRoutes.js
│   └── produtoRoutes.js
├── seeders/
│   └── seedData.js
├── .env
├── app.js
└── package.json
```

## Dependências

Para instalar as dependências do projeto, execute:

```sh
npm install express sequelize mysql2 dotenv
npm install --save-dev nodemon
```

## Configuração do Banco de Dados

Atualize o arquivo `config/config.json` com as credenciais do seu banco de dados MySQL:

```json
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "vinicola",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## Modelos

### Produto
- **nome**: STRING
- **descricao**: TEXT
- **preco**: DECIMAL
- **id_categoria**: INTEGER
- **id_fornecedor**: INTEGER

### Categoria
- **descricao**: STRING

### Fornecedor
- **nome**: STRING
- **contato**: STRING

## Controladores

### ProdutoController
- **listar(req, res)**: Lista todos os produtos.
- **criar(req, res)**: Cria um novo produto.
- **atualizar(req, res)**: Atualiza um produto existente com base no ID.
- **deletar(req, res)**: Deleta um produto existente com base no ID.

### CategoriaController
- **listar(req, res)**: Lista todas as categorias.
- **criar(req, res)**: Cria uma nova categoria.
- **atualizar(req, res)**: Atualiza uma categoria existente com base no ID.
- **deletar(req, res)**: Deleta uma categoria existente com base no ID.

### FornecedorController
- **listar(req, res)**: Lista todos os fornecedores.
- **criar(req, res)**: Cria um novo fornecedor.
- **atualizar(req, res)**: Atualiza um fornecedor existente com base no ID.
- **deletar(req, res)**: Deleta um fornecedor existente com base no ID.

## Rotas

### ProdutoRoutes
- **GET /produtos**: Chama `produtoController.listar`
- **POST /produtos**: Chama `produtoController.criar`
- **PUT /produtos/:id**: Chama `produtoController.atualizar`
- **DELETE /produtos/:id**: Chama `produtoController.deletar`

### CategoriaRoutes
- **GET /categorias**: Chama `categoriaController.listar`
- **POST /categorias**: Chama `categoriaController.criar`
- **PUT /categorias/:id**: Chama `categoriaController.atualizar`
- **DELETE /categorias/:id**: Chama `categoriaController.deletar`

### FornecedorRoutes
- **GET /fornecedores**: Chama `fornecedorController.listar`
- **POST /fornecedores**: Chama `fornecedorController.criar`
- **PUT /fornecedores/:id**: Chama `fornecedorController.atualizar`
- **DELETE /fornecedores/:id**: Chama `fornecedorController.deletar`

## Executando o Servidor

Para iniciar o servidor em modo de desenvolvimento, utilize o `nodemon`:

```sh
npm run dev
```

### Instruções Finais

- Certifique-se de atualizar as credenciais do banco de dados no arquivo `.env`.
- Certifique-se de que o banco de dados MySQL esteja configurado e em execução.
- Se precisar de ajuda, estou à disposição!
- Teste os endpoints antes de usar.
