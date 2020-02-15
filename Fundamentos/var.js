{
    {
        {
            { 
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

//Cuidado com o escopo ao trabalhar com var, esse teste imprime o número 2 duas vezes.