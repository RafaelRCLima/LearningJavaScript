const fabricantes = ["Mercedes"]



function funcao(){
  return new Promise((resolve, reject) => {
    console.log("Imagine aqui uma consulta ao banco de dados.");
    
    // se oq esta executando aqui der certo chama resolve()

    if(true){

      console.log("A consulta ao banco deu certo, e você será redirecionado a pagina principal");
      resolve("Rodou");
     }
    
     reject("Deu um erro!");
  });
}

funcao()
  .then(valorRetornadoPorResolve => console.log(valorRetornadoPorResolve))
  .catch(erro => console.log(erro));

  console.log("Log rodando aqui.")