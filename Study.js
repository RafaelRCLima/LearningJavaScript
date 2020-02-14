//Dica de forma de criar objeto

function teste (valor1, valor2){
    const a = valor1 + valor2
    const b = (!!valor1 !== valor2)
    const c = (valor1 * valor2 + (valor1 + valor2))

    return { a, b, c}
}

console.log(teste(3, 4))