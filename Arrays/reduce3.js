Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = valorInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas?
const bolsa = e => e.bolsista
console.log(alunos.map(bolsa))

const bolsista = function (prox, atual) {
    console.log(prox, atual)
    return !!(prox && atual)
}
console.log(alunos.map(bolsa).reduce2(bolsista))


// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (prox, atual) => prox || atual
console.log(alunos.map(bolsa).reduce2(algumBolsista))
