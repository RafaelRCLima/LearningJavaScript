const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)
console.log(valores[2])
console.log(valores[4]) //índice convencional que começa em 0
//É possível adicionar valores posteriormente

valores[4] = 10
console.log(valores)
console.log(valores.length)

//é heterogêneo
valores.push({id: 3}, false, null, 'texto')//Aceita tipos diferentes em um mesmo array, mas isso não é boa prática
console.log(valores)

console.log(valores.pop())//pega o último valor, tira do array e retorna-o
console.log(valores)
delete valores[0]
console.log(valores)

console.log(typeof valores)
