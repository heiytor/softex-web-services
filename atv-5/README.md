<h1 align="center">Projeto</h1>

O servidor está configurado no arquivo `./src/main.ts`, por padrão, ele escuta na porta `3333` e pode ser alterado por meio da variável `port`. O express se configura por meio de uma classe no arquivo `./src/app.ts`, lá, as rotas e os middlewares são definidos para uso.

A ORM usada para a criação e tratamento dos dados, foi a prisma, utilizando o SQLite. O model está no arquivo `./prisma/schema.prisma`, e uma seed se encontra em `./prisma/seed.ts`.

O CRUD está no arquivo `./src/CRUD/BookController.ts`, onde os métodos são configurados, no arquivo `./src/CRUC/bookRouter.ts` é configurada as rotas que utilizam o controller.

<h1 align="center"> USO</h1>

Primeiramente, baixe todas as dependências:
```
npm i
```

Após, inicie o banco de dados:
```
npx prisma migrate dev --name init
```
A seed deve ocorrer automaticamente, mas caso não ocorra, rode o seguinte comando: `npx prisma db seed`.

Um arquivo chamado `dev.db` será criado no diretório `./prisma`, ele é o arquivo do SQLite, juntamente também se cria uma pasta para as migrations.


Com o banco de dados devidamente configurado, inicie o servidor com:
```
npm run dev
```

<h2>Saídas</h2>

<h3>INDEX | get http://localhost:port</h3>

O método index retorna todos os elementos da tabela Book:

![index](https://user-images.githubusercontent.com/107213601/203637641-4225a0c4-62c0-4bca-a2fd-f488c03b63bf.png)


<h3>SHOW  | get http://localhost:port/:id </h3>

O método show retorna um elemento da tabela Book. O elemento é passado como parâmetro na URL, caso o ID não condiga com nenhum dado, um erro é levantado:

![show-success](https://user-images.githubusercontent.com/107213601/203637665-b4dd42b9-377e-4296-b0fb-fe37bce048d8.png)
![show-error](https://user-images.githubusercontent.com/107213601/203637671-8ed4351b-d3aa-4335-a211-7a79edb6f43e.png)

<h3>STORE | post http://localhost:port </h3>

O método store salva um novo elemento na tabela Book. Os campos são passados pelo body, como JSON e todos são obrigatórios, caso algum seja omitido ou algum único seja repetido, um erro é levantado: 

![store-success](https://user-images.githubusercontent.com/107213601/203637720-9a46c9a5-c913-407f-b7fb-0e6040a1b18a.png)
![store-error1](https://user-images.githubusercontent.com/107213601/203637758-c8cb8c54-392a-4929-878a-c8e323e9d418.png)
![store-error2](https://user-images.githubusercontent.com/107213601/203637763-110d81dc-fa65-4de9-a8a4-65d07d586afd.png)


<h3>UPDATE | put http://localhost:port</h3>

O método update atualiza um elemento da tabela Book. Os campos são passados pelo body, como JSON e nenhum é obrigatório, na situação de omitidos, o campo original permanece inalterado, o ID é passado por parâmetro na URL e caso seja inválido, um erro é levantado: 

![update-success](https://user-images.githubusercontent.com/107213601/203637873-d91087ac-82a7-418f-b93e-03b7826adf50.png)
![update-error](https://user-images.githubusercontent.com/107213601/203637879-46785989-7d69-4f78-bde9-0f5cf3b27949.png)

<h3>DELETE | delete http://localhost:port</h3>

O método delete deleta um elemento da tabela Book. O elemento é passado como parâmetro na URL, caso o ID não condiga com nenhum dado, um erro é levantado:

![delete-success](https://user-images.githubusercontent.com/107213601/203637903-c2082940-3537-4c6b-b41b-c77c8d473f57.png)
![delete-error](https://user-images.githubusercontent.com/107213601/203637937-ee1efa91-97cd-4cfd-b671-cd7aff29fbcc.png)

