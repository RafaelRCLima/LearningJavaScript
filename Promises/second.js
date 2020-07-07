function myPromise(response) {
  const myDear = new Promise((resolve, reject) => {
    resolve(response / 2)
    if (response === 3) {
      reject('Três eu não quero')
    }
  }).then((res) => {
    res = 2
    response += res
    console.log(response)
    return response
  }).catch(err => {
    return 'past'
  })
  return myDear
}

async function responde(funcao) {
  console.log(funcao)
  result = await funcao
  console.log(result)
}

let value = responde(myPromise(8))

console.log(value)
