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

let result = ''
letras.forEach(function (valor, index) {
  console.log(`${index + 2}: ${valor}`)
  if (valor.indexOf('o') != -1) {
    let cont = valor.indexOf('o') + 1
    for (let i = 0; i < cont; i++) result += parseInt(index + 2)
  }
})

console.log(result)
