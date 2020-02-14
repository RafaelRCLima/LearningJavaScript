function carta(nome, tipo, ataque, defesa) {
    this.nome = nome
    this.tipo = tipo
    this.ataque = ataque
    this.defesa = defesa
}

const magoNegro = new carta('Mago Negro', 'Mago', 2500, 2100)
console.log(magoNegro)

//destructuring <<====

const { nome, ataque } = magoNegro

console.log('\nNome: ' + nome, '\nAtaque: ' + ataque)
