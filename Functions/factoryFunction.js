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

function Pessoa(nome, idade) {
    return {
        nome,
        idade,
        envelhecer: function(){
            this.idade++
        }
    }
}

const Joao = new Pessoa('Joao', 28)

for (let i = 1; i < 8; i++){
    Joao.envelhecer()
}

console.log(Joao)