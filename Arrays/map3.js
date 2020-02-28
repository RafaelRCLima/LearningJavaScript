Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//retornar array somente com preços

console.log(carrinho)

const paraObject = e => JSON.parse(e)
const pegaPreco = e => e.preco
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', '.')}`

resultado = carrinho.map2(paraObject).map2(pegaPreco).map2(paraDinheiro)
console.log(resultado)