const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo -->> Aqui criamos os passos internos a serem executados
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

/* Declarativo -->> Aqui utilizamos as funções existentes sem a
preocupação do que está sendo feito internamente*/

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) / alunos.length
console.log(total2)

/* Exemplo: SQL é uma linguagem mais declarativa,
já que não nos importamos em como é feito,
mas sim em o que é feito.*/
