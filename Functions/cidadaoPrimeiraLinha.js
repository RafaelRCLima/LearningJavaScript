//Criando funcao de forma literal
function fun1() { }

//Armazenando em variavel
const fun2 = function () { }

//Armazenando em array
const array = [function (a, b) { return a + b }, fun1, fun2]

//Armazenando em atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar função como parâmetro
function run(fun) {
    fun()
}
run(function () { console.log('Executando...') })

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(1)
const somaMais = soma(7, 15)
somaMais(4)
