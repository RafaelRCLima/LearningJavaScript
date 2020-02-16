function Produto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.2,
    }
}

const cortadorDeUnha = new Produto('Cortador de Unha', 3.5)

console.log(cortadorDeUnha)
console.log(Produto('Notebook', 3000.00))
