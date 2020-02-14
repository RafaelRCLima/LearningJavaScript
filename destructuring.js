//novo recurso do EC2015

//objeto simples
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//as chaves representam o operador de destructuring
const { nome, idade } = pessoa
console.log(nome, idade)

//variáveis com nomes personalizados com destructuring
const {nome: n, idade: i} = pessoa
console.log(n, i)

const { endereco } = pessoa
console.log(endereco)

const { endereco : rua } = pessoa
const { logradouro: sei } = rua
console.log(sei)
const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)
