/* Crie uma tabela em um banco de dados com o OMR Sequelize e insira dados nessa tabela. */

(async () => {
  const database = require("./db");
  const Aluno = require("./aluno");
  await database.sync();

  const novoAluno = await Aluno.create({
    nome: "João",
    idade: "10",
    curso: "Gestão",
  });
})();
