const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

let prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}

console.log(prod2)

//objeto em json - formato textual para interoperabilidade entre sistemas
'{"nome": "Camisa Polo", "preco": 79.90}' //json é diferente, apesar de parecido

console.log(typeof prod2)
console.log(typeof Object)
