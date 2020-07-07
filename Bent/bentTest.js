const bent = require('bent')

const getJson = bent('json')

async function bentTest() {
  let obj = await getJson('https://r4u.herokuapp.com/getFilmes')
  console.log(obj.filmes[2].nome)
}

bentTest()
