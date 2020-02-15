function mainha(nome, idade, vontade, cabelo, unha) {
    this.nome = nome
    this.idade = idade
    this.vontade = vontade
    this.cabelo = cabelo
    this.unha = unha
}

const mariaMamae = new mainha('Maria Cida', 18, 'Sossegar', 'Tem', true)

const { nome, idade, vontade } = mariaMamae

function aumentar(valor) {
    while (valor < 38) {
        valor++
    }
    return valor
}

aumentar(idade)

console.log("Nome da mamãe: " + nome, "\nIdade da mainha: " + aumentar(idade), "\nVontade de mainha: " + vontade)
