console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

// Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(7,12)

// Função com retorno

function soma(a, b = 15){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))