function produto(nome, preco, id){
    this.nome = nome
    this.preco = preco
    this.id = id
}

const caneta = new produto('bic', 1.9, 781823)

console.log(caneta)

function movel(nome, preco, id, tamanho) {
    this.nome = nome
    this.preco = preco
    this.id = id
    this.tamanho = tamanho
}

const armario = new movel('becan', 800.00, 787530, '1.5x3')
console.log(armario)


function difere(a, b) {
    if (a !== 1 || b !== 1){
        console.log('Insira dois números por favor')
    }else{
        console.log(a + b)
    }
}

difere(3, 'z')

console.log(typeof 9)

let a = 5
if ((a * 1) == a){
    console.log('Ta serto')
}

console.log(typeof(5))
console.log(!!0)