# Eventos API

Bem-vindo à documentação da API de Eventos. Esta API permite a criação, listagem, atualização e exclusão de eventos. Abaixo você encontrará as informações necessárias para começar a utilizar a API.

## Índice

- [Introdução](#introdução)
- [Instalar dependências](#instalar-dependências)
- [Executar a aplicação](#executar-a-aplicação)
- [Endpoints](#endpoints)
  - [Criar Evento](#criar-evento)
  - [Listar Eventos](#listar-eventos)
  - [Obter Evento por ID](#obter-evento-por-id)
  - [Atualizar Evento](#atualizar-evento)
  - [Excluir Evento](#excluir-evento)
- [Definições](#definições)

## Introdução

Esta API permite a manipulação de eventos, com funcionalidades para criação, listagem, obtenção, atualização e exclusão de eventos. A API segue o padrão RESTful e utiliza JSON para a troca de informações.

## Instalar dependências

Para instalar as dependências do projeto, execute o comando abaixo:

```bash
npm install
```

## Executar a aplicação

Para executar a aplicação, execute o comando abaixo:

```bash
npm start
```

## Endpoints

### Criar evento

Cria um novo evento.

**URL** : `/eventos`

**Método** : `POST`

**Parâmetros de requisição**

```json
{
  "titulo": "string",
  "data": "string",
  "local": "string",
  "descricao": "string"
}
```

**Resposta de sucesso**

**Código de status** : `201 CREATED`

```json
{
  "id": 1,
  "titulo": "string",
  "data": "string",
  "local": "string",
  "descricao": "string"
}
```

**Resposta de erro**

**Código de status** : `400 BAD REQUEST`

```json
{
  "mensagem": "string"
}
```

### Listar eventos

Lista todos os eventos.

**URL** : `/eventos`

**Método** : `GET`

**Resposta de sucesso**

**Código de status** : `200 OK`

```json
[
  {
    "id": 1,
    "titulo": "string",
    "data": "string",
    "local": "string",
    "descricao": "string"
  }
]
```

**Resposta de erro**

**Código de status** : `400 BAD REQUEST`

```json
{
  "mensagem": "string"
}
```

### Obter evento por ID

Obtém um evento por ID.

**URL** : `/eventos/{id}`

**Método** : `GET`

**Parâmetros de requisição**

`id` : `integer`

**Resposta de sucesso**

**Código de status** : `200 OK`

```json
{
  "id": 1,
  "titulo": "string",
  "data": "string",
  "local": "string",
  "descricao": "string"
}
```

**Resposta de erro**

**Código de status** : `400 BAD REQUEST`

```json
{
  "mensagem": "string"
}
```

### Atualizar evento

Atualiza um evento.

**URL** : `/eventos/{id}`

**Método** : `PATCH`

**Parâmetros de requisição**

`id` : `integer`

```json
{
  "titulo": "string",
  "data": "string",
  "local": "string",
  "descricao": "string"
}
```

**Resposta de sucesso**

**Código de status** : `200 OK`

```json
{
  "id": 1,
  "titulo": "string",
  "data": "string",
  "local": "string",
  "descricao": "string"
}
```

**Resposta de erro**

**Código de status** : `400 BAD REQUEST`

```json
{
  "mensagem": "string"
}
```

### Excluir evento

Exclui um evento.

**URL** : `/eventos/{id}`

**Método** : `DELETE`

**Parâmetros de requisição**

`id` : `integer`

**Resposta de sucesso**

**Código de status** : `204 NO CONTENT`

**Resposta de erro**

**Código de status** : `400 BAD REQUEST`

```json
{
  "mensagem": "string"
}
```

## Definições

- `id` : Identificador único do evento.
- `titulo` : Título do evento.
- `data` : Data do evento.
- `local` : Local do evento.
- `descricao` : Descrição do evento.

```

```
