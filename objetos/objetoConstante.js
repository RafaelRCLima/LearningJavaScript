// pessoa --> 123 --> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)
// o objeto pessoa não pode ser alterado, mas os atributos do objeto pessoa sim.

// pessoa = {nome: 'Ana'} -->> Nesse caso a atribuicao esta sendo refeita diretamente para pessoa.
/* Quando um objeto é criado ele referencia um ponto na memória
    * Tentar executar uma alteração que mude o endereço de memória
    * causa um erro, já que está definido como constante
*/

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.preco = 150

console.log(pessoa)

// O freeze não permite alterações no objeto
/*Poderia ser uma solução para para o problema de atribuições
mas assim ficariamos impossibilitados de trabalhar com o objeto*/

const pessoaConstante = Object.freeze( {nome: 'João'} )
pessoaConstante.nome = 'Maria'

console.log(pessoaConstante)