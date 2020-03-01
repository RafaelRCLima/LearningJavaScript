const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
    return !p.fragil
}))

console.log(produtos.filter(function (p) {
    return p.fragil
}))

console.log(produtos.filter(function (p) {
    return p.preco > 1500 && p.fragil
}))

const eCaro = e => e.preco > 500
const eFragil = e => e.fragil

console.log(produtos.filter(eCaro).filter(eFragil))
