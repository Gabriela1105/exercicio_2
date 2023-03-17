//pegar os inputs
let aluno1_prova1 = document.getElementsByName("aluno1_prova1")[0];
let aluno2_prova1 = document.getElementsByName("aluno2_prova1")[0];
let aluno1_prova2 = document.getElementsByName("aluno1_prova2")[0];
let aluno2_prova2 = document.getElementsByName("aluno2_prova2")[0];
let peso_prova1 = document.getElementsByName("peso_prova1")[0];
let peso_prova2 = document.getElementsByName("peso_prova2")[0];
//Calcula media
function calcula_media(prova1, prova2, peso_prova1, peso_prova2) {
  var media =
    calcula_produto(prova1, peso_prova1 / 100) +
    calcula_produto(prova2, peso_prova2 / 100);

  return media;
}

function calcula_produto(numero1, numero2) {
  let produto = numero1 * numero2;

  return produto;
}

function calcule_aluno1() {
  let media_aluno1 = calcula_media(
    parseFloat(aluno1_prova1.value),
    parseFloat(aluno1_prova2.value),
    parseInt(peso_prova1.value),
    parseInt(peso_prova2.value)
  );

  if (!isNaN(media_aluno1)) {
    document.getElementById("resultadoMediaAluno1").innerHTML = media_aluno1;
  }
}

function calcule_aluno2() {
  let media_aluno2 = calcula_media(
    parseFloat(aluno2_prova1.value),
    parseFloat(aluno2_prova2.value),
    parseInt(peso_prova1.value),
    parseInt(peso_prova2.value)
  );

  if (!isNaN(media_aluno2)) {
    document.getElementById("resultadoMediaAluno2").innerHTML = media_aluno2;
  }
}

//adiciona escuta de evento para saber se o input mudou
aluno1_prova1.addEventListener("change", (event) => {
  calcule_aluno1();
});
aluno1_prova2.addEventListener("change", (event) => {
  calcule_aluno1();
});
aluno2_prova1.addEventListener("change", (event) => {
  calcule_aluno2();
});
aluno2_prova2.addEventListener("change", (event) => {
  calcule_aluno2();
});

peso_prova1.addEventListener("change", (event) => {
  calcule_aluno1();
  calcule_aluno2();
});
peso_prova2.addEventListener("change", (event) => {
  calcule_aluno1();
  calcule_aluno2();
});
