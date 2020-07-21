const texto = '833777783303_33063377772'

const letras = [
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz'
]

let trabalho = texto.split('')

console.log(trabalho)

// Separa os numeros de acordo com a ocorrencia
let aux = []
let num = ''
trabalho.forEach(function (valor, indice) {
  if (valor === ' ') {
    aux.push(valor)
    return
  }
  if (valor !== trabalho[indice - 1]) {
    num = valor
    if (valor !== trabalho[indice + 1]) {
      aux.push(valor)
      return
    }
  }
  if (valor === trabalho[indice + 1]) {
    num += trabalho[indice + 1]
  } else {
    aux.push(num)
  }
})
console.log(aux)
let textoFinal = ''
aux.forEach(function (value) {
  if (value !== '0' && value !== '_') {
    textoFinal += letras[parseInt(value[0]) - 2][value.length - 1]
  }
  if (value === '0') textoFinal += ' '
  // textoFinal += letras[parseInt(value[0]) - 2]
  // console.log(parseInt(value[0]) - 2)
  // console.log(letras[parseInt(value[0]) - 2])
})

console.log(textoFinal)
