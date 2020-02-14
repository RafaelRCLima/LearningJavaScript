// Armazenando um afuncao em uma variavel

const imprimirSoma = function (a, b){
    console.log(a + b);    
}

imprimirSoma(2, 3)

// Funcao arrow

const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 7))

// retorno implicito

const subtracao = (a, b) => a - b

console.log(subtracao(5, 2))


const imprimir2 = a => console.log(a)

imprimir2("Foi")