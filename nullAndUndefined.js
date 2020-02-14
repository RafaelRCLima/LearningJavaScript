const a = {name: 'Teste'}

const b = a

console.log(b)

b.name = 'Teste feito'

console.log(a)

//=======================================

let valor
console.log(valor)

valor = null
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto.preco)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preco
/* Prefira utilizar "0" no lugar de null, a menos 
que seja uma situação específica, mas undefined é
melhor evitar*/

