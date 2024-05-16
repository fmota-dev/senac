# API de Vinhos

## Introdução

Bem-vindo à documentação da API de Vinhos, uma ferramenta completa para gerenciar informações sobre vinhos de forma eficiente e organizada. Este guia detalhado irá auxiliá-lo a explorar todas as funcionalidades da API, desde a obtenção de dados até a adição e edição de vinhos em seu acervo.

## Funcionalidades

A API de Vinhos oferece um conjunto abrangente de recursos para gerenciar seus vinhos:

- **Consulta:** Acesse informações completas sobre cada vinho, incluindo nome, safra, país de origem, tipo, preço e imagem.
- **Cadastro:** Adicione novos vinhos à sua coleção com facilidade, fornecendo os detalhes relevantes.
- **Atualização:** Modifique as informações dos vinhos existentes para manter seu acervo sempre atualizado.
- **Exclusão:** Remova vinhos da sua lista quando necessário.

## Rotas e Métodos

A API utiliza um sistema de rotas intuitivo para acessar seus recursos:

| Rota           | Método | Descrição                        |
|----------------|--------|----------------------------------|
| /api/vinhos    | GET    | Obter todos os vinhos.           |
| /api/vinhos/:id| GET    | Obter um vinho específico por ID.|
| /api/vinhos    | POST   | Adicionar um novo vinho.         |
| /api/vinhos/:id| PATCH  | Atualizar um vinho existente.    |
| /api/vinhos/:id| DELETE | Remover um vinho.                |


## Corpo da Requisição (POST e PATCH)

Ao adicionar ou atualizar um vinho, utilize o seguinte formato no corpo da requisição:

```json
{
  "nome": "Nome do Vinho",
  "safra": "Ano da Safra",
  "pais": "País de Origem",
  "tipo": "Tipo do Vinho",
  "preco": "Preço do Vinho",
  "imagem": "URL da Imagem do Vinho"
}

Executando o Projeto
Para utilizar a API de Vinhos, siga estas etapas:

1- Clone o repositório:

git clone https://github.com/topics/api?o=desc&s=updated

2- Instale as dependências:

npm install

3- Inicie o servidor: 

npm start

A API estará disponível em http://localhost:3000.

Contribuições
A API de Vinhos é um projeto em constante evolução, e suas sugestões são bem-vindas! Contribua para o aprimoramento da ferramenta abrindo issues no repositório GitHub ou enviando pull requests com suas melhorias.

Observações
Este guia presume que você tenha conhecimento básico de APIs REST e JSON.
Certifique-se de ter o Node.js instalado em sua máquina para executar o servidor.
Para mais informações sobre as funcionalidades da API, consulte o código-fonte do projeto.

Conclusão
A API de Vinhos oferece uma maneira prática e eficiente de gerenciar sua coleção de vinhos. Com seus recursos intuitivos e documentação completa, você pode facilmente organizar seus dados e desfrutar de uma experiência aprimorada no mundo dos vinhos.