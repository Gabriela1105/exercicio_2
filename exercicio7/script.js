//pegar os inputs
let salario = document.getElementsByName("salario")[0];

//Calcula media
function calcula_aumento() {
  let salarioCalculo = parseFloat(salario.value); // salario do input
  let salario_com_aumento = 0; // o resultado do calculo
  if (!isNaN(salarioCalculo)) {     // valida ser o valor calculado é um numero
    document.getElementById("salario_reajuste_antes").innerHTML =
      salarioCalculo; //para imprimi na tela
    if (salarioCalculo <= 280) {
      salario_com_aumento = salarioCalculo * 1.2; // calcula o valor do aumento
      document.getElementById("percentual_aumento_aplicado").innerHTML = "20%"; // imprimi o porcentual na tela
    } else if (salarioCalculo > 280 && salarioCalculo <= 700) {
      salario_com_aumento = salarioCalculo * 1.15; 
      document.getElementById("percentual_aumento_aplicado").innerHTML = "15%";
    } else if (salarioCalculo > 700 && salarioCalculo <= 1500) {
      salario_com_aumento = salarioCalculo * 1.1;
      document.getElementById("percentual_aumento_aplicado").innerHTML = "10%";
    } else {
      salario_com_aumento = salarioCalculo * 1.05;
      document.getElementById("percentual_aumento_aplicado").innerHTML = "5%";
    }
    document.getElementById("valor_do_aumento").innerHTML =
      salario_com_aumento - salarioCalculo; //faz a subtração entre o aumento e o salario anterior 
    document.getElementById("apos_aumento").innerHTML = salario_com_aumento;
  }
}

salario.addEventListener("change", (event) => {
  calcula_aumento();
});
