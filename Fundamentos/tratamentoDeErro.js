function tratarErro(erro){
    throw 'Erro'
}

function imprimir(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('Final')
    }
}




const obj = { nome: 'Roberto'}
imprimir(obj)
    