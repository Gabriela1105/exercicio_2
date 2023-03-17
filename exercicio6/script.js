//pegar os inputs
let prova1 = document.getElementsByName("prova1")[0];
let prova2 = document.getElementsByName("prova2")[0];

//Calcula media
function calcula_media() {
  var media = (parseFloat(prova1.value) + parseFloat(prova2.value)) / 2;

  if (!isNaN(media)) {
    document.getElementById("resultadoMedia").innerHTML = media;

    if (media === 10) {
      alert("Aprovado com Distinção");
    } else if (media >= 7) {
      alert("Aprovado");
    } else {
      alert("Reprovado");
    }
  }
}

//adiciona escuta de evento para saber se o input mudou
prova1.addEventListener("change", (event) => {
  calcula_media();
});
prova2.addEventListener("change", (event) => {
  calcula_media();
});
