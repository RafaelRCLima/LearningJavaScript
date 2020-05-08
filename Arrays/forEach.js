const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
aprovados.forEach((nome, indice) => console.log(indice + 1, nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

function createPhoneNumber(numbers) {
    let print = ''
    numbers.forEach(function (n, i) {
        console.log(`${i}: ${n}`)
    })

    numbers.forEach(function (n, i) {
        if (i === 0) {
            print = '(' + n
        } else if (i === 3) {
            print += ') ' + n
        } else if (i === 6) {
            print += '-' + n
        } else {
            print += n
        }
    })
    return print
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log('(' + 1)


let obj = {
    name: 'Joao',
    end: 15
}

console.log(obj)

obj.record = []

console.log(obj)
