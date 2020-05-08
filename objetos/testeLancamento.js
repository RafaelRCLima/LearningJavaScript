function Lancamento(id, tipo, valor) {
    return {
        id,
        tipo,
        valor,
        idUsuario: 0
    }
}

const teste = new Lancamento(1, 'teste', 1500)
teste.idUsuario = 1

console.log(teste)
