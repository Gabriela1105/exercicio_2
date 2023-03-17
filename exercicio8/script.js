let valor_da_hora = document.getElementsByName("valor_da_hora")[0];
let horas_trabalhadas = document.getElementsByName("horas_trabalhadas")[0];

function calculaIr() {
  let salario_bruto =
    parseInt(valor_da_hora.value) * parseInt(horas_trabalhadas.value);

  let desconto_ir;

  if (salario_bruto <= 900) {
    desconto_ir = 0.0;
  } else if (salario_bruto <= 1500) {
    desconto_ir = 5;
  } else if (salario_bruto <= 2500) {
    desconto_ir = 10;
  } else desconto_ir = 20;

  let desconto_total_ir =
    salario_bruto * (desconto_ir / 100) +
    salario_bruto * 0.03 +
    salario_bruto * 0.11;

  if (!isNaN(desconto_total_ir)) {
    document.getElementById("resultadoIr").innerHTML = desconto_total_ir;
  }
}

valor_da_hora.addEventListener("change", (event) => {
  calculaIr();
});
horas_trabalhadas.addEventListener("change", (event) => {
  calculaIr();
});
