//Exercicio 5

//pegar os inputs
let numero1 = document.getElementsByName("numero1")[0];
let numero2 = document.getElementsByName("numero2")[0];

//Calcula nota
function calcula_produto() {
  let produto = parseInt(numero1.value) * parseInt(numero2.value);

  if (!isNaN(produto)) {
    //imprime valor no Html
    document.getElementById("resultadoProduto").innerHTML = produto;
  }
}
//Calcula media
function calcula_media() {
  let media = (parseInt(numero1.value) + parseInt(numero2.value)) / 2;
  if (!isNaN(media)) {
    document.getElementById("resultadoMedia").innerHTML = media;
  }
}
//adiciona escuta de evento para saber se o input mudou
numero1.addEventListener("change", (event) => {
  calcula_media();
  calcula_produto();
});

numero2.addEventListener("change", (event) => {
  calcula_media();
  calcula_produto();
});
