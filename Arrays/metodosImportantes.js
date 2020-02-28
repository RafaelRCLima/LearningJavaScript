const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log('Inteiro: ', pilotos)
pilotos.pop() // massa quebrou o carro DE NOVO!
console.log('\nApós pop:',pilotos)

pilotos.push('Verstappen')
console.log('\nApós push: ',pilotos)

pilotos.shift() // remove o primeiro!
console.log('\nApós push: ',pilotos)

pilotos.unshift('Hamilton')
console.log('\nApós unshift: ',pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log('\nSplice para adicionar: ',pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log('\nSplice para retirar: ',pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log('\nSlice1: ',algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log('\nSlice2: ', algunsPilotos2)