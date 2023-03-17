let salario_base_inicial = document.getElementsByName("salario_base")[0];

function calculaInss(salario_base) {
  let desconto_total_inss = salario_base * (10 / 100);

  if (!isNaN(desconto_total_inss)) {
    document.getElementById("resultadoInss").innerHTML = desconto_total_inss;
  }

  return desconto_total_inss;
}

function calculaFgts(salario_base) {
  let desconto_total_fgts = salario_base * (8 / 100);

  if (!isNaN(desconto_total_fgts)) {
    document.getElementById("resultadoFgts").innerHTML = desconto_total_fgts;
  }

  return desconto_total_fgts;
}

function calculaPlanoSaude() {
  let desconto_plano_saude_total = 100;

  if (!isNaN(desconto_plano_saude_total)) {
    document.getElementById("plano_saude").innerHTML =
      desconto_plano_saude_total;
  }
  return desconto_plano_saude_total;
}

salario_base_inicial.addEventListener("change", (event) => {
  let desconto_total =
    calculaInss(salario_base_inicial.value) +
    calculaFgts(salario_base_inicial.value) +
    calculaPlanoSaude();

  if (!isNaN(desconto_total)) {
    document.getElementById("desconto_total").innerHTML = desconto_total;
  }
});
