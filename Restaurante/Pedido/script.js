function comecar() {
  var nome = document.getElementById("exampleFormControlInput1").value;
  show(nome);
}

function show(nome) {
  document.getElementById("nomePrint").textContent = nome;
  var div = document.getElementById("selects-div");
  if (nome && nome.trim() !== "") {
    div.style.display = "block";
    document.getElementById("exampleFormControlInput1").style.background =
      "none";
  } else {
    document.getElementById("error").style.display = "flex";
  }
}

function fechar() {
  document.getElementById("error").style.display = "none";
  document.getElementById("exampleFormControlInput1").style.background =
    "lightpink";
}

function calcularTotal() {
  var selectPratos = document.getElementById("selectPrato");
  var selectBebidas = document.getElementById("selectBebida");
  var selectSobremesas = document.getElementById("selectSobremesa");
  var resultadoSpan = document.getElementById("resultado");

  var total = 0;
  var prato = 0;
  var bebida = 0;
  var sobremesa = 0;

  switch (selectPratos.value) {
    case "Prato feito":
      total += 12.9;
      prato = 12.9;
      break;
    case "Strogonof":
      total += 18.2;
      prato = 18.2;
      break;
    case "Prato Vegano":
      total += 22.5;
      prato = 22.5;
      break;
  }

  switch (selectBebidas.value) {
    case "Agua":
      total += 5;
      bebida = 5;
      break;
    case "Refrigerante":
      total += 7;
      bebida = 7;
      break;
    case "Suco de laranja":
      total += 12;
      bebida = 12;
      break;
  }

  switch (selectSobremesas.value) {
    case "Torta de morango":
      total += 32.5;
      sobremesa = 32.5;
      break;
    case "Pudim de leite":
      total += 13;
      sobremesa = 13;
      break;
    case "Tiramissu":
      total += 16.8;
      sobremesa = 16.8;
      break;
  }

  document.getElementById("total").style.display = "flex";
  document.getElementById("prato-pronto").innerHTML = prato.toFixed(2);
  document.getElementById("bebida-pronto").innerHTML = bebida.toFixed(2);
  document.getElementById("sobremesa-pronto").innerHTML = sobremesa.toFixed(2);

  resultadoSpan.textContent = "R$ " + total.toFixed(2);
}

function limpar() {
  document.getElementById("total").style.display = "none";
  document.getElementById("selects-div").style.display = "none";
  document.getElementById("exampleFormControlInput1").value = "";
  document.getElementById("resultado").value = "";
  document.getElementById("selectPrato").value = "Selecione um prato";
  document.getElementById("selectBebida").value = "Selecione uma bebida";
  document.getElementById("selectSobremesa").value = "Selecione uma sobremesa";
}
