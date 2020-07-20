const text = 'legislacao'

const answer = 66655520688663666

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

const splitFeito = text.split('')
let result = ''
splitFeito.forEach(function (letraTexto) {
  letras.forEach(function (letra, indice) {
    if (letra.indexOf(letraTexto.toLowerCase()) != -1) {
      let cont = letra.indexOf(letraTexto.toLowerCase()) + 1
      if ((indice + 2) === parseInt(result[result.length - 1])) result += '_'
      for (let i = 0; i < cont; i++) {
        result += indice + 2
      }
    }
  })
  if (letraTexto === ' ') {
    result += 0
  }
})

console.log(result)
