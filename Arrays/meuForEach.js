const lista = ['Megaman X', 'Megaman Zero', 'Megaman ZX']

function meuForEach(lista) {
    let indice = 0
    let nome = ''
    for(indice; indice < lista.length; indice++){
        nome = lista[indice]
        console.log(indice, nome)
    }
}

for(let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

meuForEach(lista)

// Testes com meu conhecimento até este ponto acima!!

// Abaixo está a continuação da aula 5

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

lista.forEach2(function(nome, indice){
    console.log(indice, nome)
})