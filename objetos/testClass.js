class Useer {
    constructor(id, nome, saldo) {
        this._id = id
        this.nome = nome
        this.saldo = saldo
    }

    lancamento(lancamento) {
        this.saldo += lancamento
    }
}

const cleber = new Useer(1, 'Cleber', 1200)
console.log(cleber)

cleber.lancamento(200)
console.log(cleber)
