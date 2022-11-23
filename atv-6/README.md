<h1 align="center">PROJETO</h1>

    Nesse projeto foi desenvolvido um CRUD simples de alunos para uma escola usando o prisma como ORM, vitest para testes unitários e o typescript com nodeJS e Express.

## Iniciando:

Inicie o projeto instalando as depêndencias:

```bash
npm i
```

Configure o banco de dados:

```bash
npx prisma migrate dev --name init
```

Por padrão, o banco deverá ser semeado com 45 alunos, a quantia pode ser modificada por meio da variável `students` no arquivo `./prisma/seed.ts`. Caso a seed não ocorra de maneira automática, rode o seguinte comando: `npx prisma db seed`. O arquivo SQLite se localiza em `./prisma/dev.db`.

Para iniciar o projeto, rode o comando:

```bash
npm run dev
```

Por padrão, o projeto escuta na porta 3333, que também pode ser alterada por meio da variável `port` em `./src/main.ts`.

O projeto estará rodando [aqui](http://localhost:3333).

---

## Funcionamento:

    Na classe App, localizada no arquivo `./src/App.ts`, se configura o express, as rotas e os middlewares. Ela então é exportada para o arquivo `./src/main.ts`, é lá que o servidor é aberto. Por fim, no diretório `./src/entities/student` está tudo relacionado ao estudante.

    A interface `IStudentRepository` serve para implementar as funcionalidades relacionadas ao banco de dados e desacoplar código, a mesma coisa ocorre para os tipos em `./src/entities/student/types`, que adaptam os tipos criados pelo prisma.

    Dentro de `./src/entities/student/services` estão todos os casos de uso: Listar todos os estudantes, mostrar um estudante, adicionar um novo estudante, modificar um estudante existente e deletar um estudante.

    `./src/entities/students/utils` possui todas as funções comumente usadas dentro da entidade, bem como os validadores.

    O controller por fim fica responsável apenas pelo envio da resposta e requisição dos dados, o router configura todas as rotas do CRUD e então exporta para o App.

## Regras de negócio:

Todos as requisições enviadas deverão seguir esses padrões.

- Todo aluno deverá possuir nome, sobrenome, idade, turma e número de matrícula;

- O número de matrícula é ÚNICO e serve como identificador. Ele deve estar sempre entre 999.999 e 111.111 e ser uma string;

- O número de matrícula NÃO pode ser editado.

- O aluno deverá ter entre 14 e 19 anos;

- O nome e sobrenome (individualmente) do aluno não poderá conter mais de 20, ou menos de 3 caracteres;

- O nome e sobrenome do aluno não poderá conter números e caracteres especiais com única exceção de espaço;

- A classe a qual o aluno participa deverá estar entre 2 e 14

## Rotas, respostas e requisições:

 

- INDEX | get http://localhost:3333

O index retorna todos os valores da tabela Student:

![index-success](https://user-images.githubusercontent.com/107213601/203664364-43d28e02-2519-412c-a8d4-1f8d82fb250c.png)

- SHOW | get http://localhost:3333/:matriculation

O método show busca um único estudante baseado no número da matrícula enviado  por parâmetro. Caso a consulta seja um sucesso, retorna um código HTTP 200 e o estudante, caso ocorra algo errado, levanta um código 404 e uma mensagem de erro:

![show-success](https://user-images.githubusercontent.com/107213601/203664345-4a52d16f-a5a7-491b-abe9-da844c1da9ce.png)
![show-error](https://user-images.githubusercontent.com/107213601/203664350-8a64ca80-868e-414d-8850-6364c72b4664.png)

- STORE | post http://localhost:3333

O método store salva um novo dado na tabela estudante. Todos os campos são enviados pelo body, como no exemplo:

```json
{
    "first_name": "Heitor",
    "last_name": "Barros",
    "age": 19,
    "classroom": 5,
    "matriculation": "564897"
}
```

Caso a requisição estiver correta e passar por todos os validadores, um código 201 é retornado junto ao novo estudante, caso algo falhe, um erro 400 é levantado juntamente a uma mensagem:

![store-success](https://user-images.githubusercontent.com/107213601/203664327-4aa4cdc8-d575-4196-a4d4-0c81012fbbbb.png)
![store-error](https://user-images.githubusercontent.com/107213601/203664333-97c8c0ef-8627-4b77-b1ff-a72bee541a94.png)

- Update| put http://localhost:3333/:matricula

O método update altera um dado existente da tabela estudante. No parâmetro vai a matricula, todos os campos a serem editados irão pelo body, como no exemplo:

```json
{
    "first_name": "Outro",
    "last_name": "Nome",
    "age": 18,
    "classroom": 9,
}
```

Caso a requisição estiver correta e passar por todos os validadores, um código 202 é retornado junto ao novo estudante, caso algo falhe, um erro 400 é levantado juntamente a uma mensagem:

![update-success](https://user-images.githubusercontent.com/107213601/203664302-ea16d9b3-3f04-40ff-8030-3f08b1b014d2.png)
![update-error](https://user-images.githubusercontent.com/107213601/203664314-a2e2320d-00cd-452f-861c-8317ad67090e.png)

- DELETE| delete http://localhost:3333/:matriculation

O método delete deleta um estudante baseado no número da matrícula enviado por parâmetro. Caso a consulta seja um sucesso, retorna um código HTTP 202 e o estudante, caso ocorra algo errado, levanta um código 400 e uma mensagem de erro:

![delete-success](https://user-images.githubusercontent.com/107213601/203664272-639f3ed4-d464-4bc0-910f-233bca1bc774.png)
![delete-error](https://user-images.githubusercontent.com/107213601/203664280-9e8c760f-6e95-4895-bea9-d0d8e3d8fc29.png)

## TEST COVERAGE

NÃO EXCLUIR AS SEGUINTES MATRÍCULAS:

1. 188245

2. 648500

3. 949811

4. 243248

5. 578465

6. 139504

![error-coverage](https://user-images.githubusercontent.com/107213601/203664250-847e9281-60d1-4b2c-8bd8-9dc4ade4d952.png)
