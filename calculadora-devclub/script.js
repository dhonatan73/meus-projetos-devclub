function adicionarCaracter(caracter) {
    const valorDisplay = document.querySelector(".display").value;

    document.querySelector(".display").value = valorDisplay + caracter;
  }

  function limpaTela() {
    document.querySelector(".display").value = "";
  }

  function calcular() {
    const valorDisplay = document.querySelector(".display").value;

    document.querySelector(".display").value = eval(valorDisplay); //eval resolve as contas do display
  }

  function inverterNumero() {
    const valorDisplay = document.querySelector(".display").value;

    document.querySelector(".display").value = valorDisplay * -1;
  }

  function porcetagem() {
    const valorDisplay = document.querySelector(".display").value;

    document.querySelector(".display").value = valorDisplay / 100;
  }