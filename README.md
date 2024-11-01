# Projeto com Prisma

Este projeto utiliza o [Prisma](https://www.prisma.io/) como ORM para interagir com o banco de dados.

## Pré-requisitos

- Node.js instalado
- NPM ou Yarn instalado

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/gabriel-am12/AWS_NODE_SET24_DESAFIO_02_Sons-of-Node
   cd AWS_NODE_SET24_DESAFIO_02_Sons-of-Node
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure o Prisma:

   ```bash
   npx prisma init
   ```

4. Configure o arquivo `.env` com suas credenciais de banco de dados.

## Uso

1. Gere as migrações do banco de dados:

   ```bash
   npx prisma migrate dev --name init
   ```

2. Gere o cliente Prisma:

   ```bash
   npx prisma generate
   ```

3. Execute o projeto:

   ```bash
   npm start
   # ou
   yarn start
   ```
