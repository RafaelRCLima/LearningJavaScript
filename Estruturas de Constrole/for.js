for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

/* For/in
    Estrutura diferente */

const notas = [1, 5, 7, 9, 7, 5, 2, 9]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Lima',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

