//Obter horarios do sistema
const horas = new Date();
console.log( horas.getHours() );

const hoje = new Date();
console.log( hoje.getUTCHours() );


//Alterar cores de fundo
const conteudo = document.querySelector(".cordefundo");
conteudo.style.background = "#fed02e";

//Alterar  css

const now = new Date;
const tempo = now.getHours();

if( tempo < 16 ) {

    const conteudo = document.querySelector(".container");

    conteudo.style.background = "#fed02e";

 } else {

    const conteudo = document.querySelector(".container");

    conteudo.style.background = "#1000ff";
}