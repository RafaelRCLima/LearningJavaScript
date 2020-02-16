let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(5))

let ola = function () {
    return 'ola'
}

ola = () => 'Ola'
ola = _ => 'Ola' //Possui um parâmetro

console.log(ola())

//=======================================================
function Pessoa() {
    this.idade = 0

    setInterval(() => { //com uma arrow function o this não varia
        this.idade++
        console.log(this.idade)
    }, 1000)
}

//new Pessoa

//========================================================

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
//Cuidado com o this
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
