//Exercicio 5

//pegar os inputs
let prova1 = document.getElementsByName("prova1")[0];
let prova2 = document.getElementsByName("prova2")[0];
let peso_prova1 = document.getElementsByName("peso_prova1")[0];
let peso_prova2 = document.getElementsByName("peso_prova2")[0];
//Calcula media
function calcula_media() {
  var media =
    parseFloat(prova1.value) * (parseInt(peso_prova1.value) / 100) +
    parseFloat(prova2.value) * (parseInt(peso_prova2.value) / 100);

  if (!isNaN(media)) {
    document.getElementById("resultadoMedia").innerHTML = media;
  }
}
//adiciona escuta de evento para saber se o input mudou
prova1.addEventListener("change", (event) => {
  calcula_media();
});
prova2.addEventListener("change", (event) => {
  calcula_media();
});
peso_prova1.addEventListener("change", (event) => {
  calcula_media();
});
peso_prova2.addEventListener("change", (event) => {
  calcula_media();
});
