# 📦 Delivery API

API REST para gerenciamento de encomendas e rastreamento de entregas, desenvolvida com Node.js e Express.

O sistema permite o cadastro de usuários com diferentes níveis de acesso (**Cliente** e **Vendedor**), possibilitando o gerenciamento completo do fluxo de entrega de encomendas, desde o cadastro do pedido até o acompanhamento em tempo real do status da entrega.

## 🚀 Funcionalidades

### Autenticação e Usuários

* Cadastro de usuários.
* Login com autenticação JWT.
* Controle de acesso baseado em cargos (Roles).
* Diferenciação entre usuários **Cliente** e **Vendedor**.

### Vendedor

* Criar novos pedidos de entrega.
* Cadastrar informações da encomenda.
* Atualizar o status da entrega.
* Registrar logs de acompanhamento da entrega.
* Consultar encomendas cadastradas.

### Cliente

* Visualizar suas encomendas.
* Consultar o status atual das entregas.
* Acompanhar o histórico completo de logs da entrega.

### Segurança

* Middleware de autenticação utilizando JWT.
* Middleware de autorização por cargos.
* Middleware global para tratamento de erros.
* Validação de dados de entrada utilizando Zod.

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* Docker
* JWT (jsonwebtoken)
* Zod
* Jest
* Supertest
* TypeScript

---

## 🏗️ Arquitetura e Boas Práticas

O projeto foi desenvolvido seguindo princípios de organização e separação de responsabilidades, contendo:

* Controllers
* Services
* Middlewares
* Repositories
* Validação de dados
* Tratamento centralizado de erros
* Controle de autenticação e autorização
* Testes automatizados End-to-End

---

## 🔒 Autenticação

A autenticação é realizada através de **JSON Web Tokens (JWT)** utilizando o pacote `jsonwebtoken`.

Após o login, o usuário recebe um token que deve ser enviado no cabeçalho das requisições protegidas:

```http
Authorization: Bearer seu_token_jwt
```

Os tokens são gerados utilizando:

```ts
sign()
```

e validados através de:

```ts
verify()
```

---

## ✅ Validação de Dados

Todas as entradas da API são validadas utilizando **Zod**, incluindo:

* Corpo das requisições (Body)
* Parâmetros de rota (Params)
* Query Parameters

Isso garante maior segurança e consistência dos dados recebidos.

---

## 🧪 Testes

O projeto possui testes automatizados End-to-End utilizando:

* Jest
* Supertest

Os testes cobrem os principais fluxos da aplicação, garantindo o correto funcionamento das regras de negócio, autenticação e autorização.

Para executar os testes:

```bash
npm test
```

Ou:

```bash
npx jest
```

---

## 🐳 Banco de Dados

O banco de dados PostgreSQL é executado em um container Docker e gerenciado através do Prisma ORM.

Executar os containers:

```bash
docker-compose up -d
```

Executar as migrations:

```bash
npx prisma migrate dev
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/delivery-api.git
```

Entre na pasta:

```bash
cd delivery-api
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente:

```env
DATABASE_URL=
JWT_SECRET=
```

Inicie a aplicação:

```bash
npm run dev
```

---

## 📋 Fluxo da Aplicação

1. O usuário realiza cadastro como Cliente ou Vendedor.
2. O usuário realiza login.
3. O sistema gera um JWT.
4. O Vendedor cria uma encomenda.
5. O Vendedor registra atualizações e logs da entrega.
6. O Cliente acompanha o andamento da entrega através dos logs cadastrados.
7. O sistema controla o acesso às rotas de acordo com o cargo do usuário.

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e aprimoramento de conhecimentos em desenvolvimento backend com Node.js.
