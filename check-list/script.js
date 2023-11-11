
  const button = document.querySelector(".button-add-task");
  const input = document.querySelector(".input-task");
  const listaCompleta = document.querySelector(".list-tasks");

  let minhaListaDeItens = [];

  function adicionarNovaTarefa() {
    minhaListaDeItens.push({
      tarefa: input.value,
      concluida: false
    });

    input.value = "";

    mostrarTarefas();
  }

  function mostrarTarefas() {
    let novaLi = "";

    minhaListaDeItens.forEach((item, posicao) => {
      novaLi =
        novaLi +
        `
        <li class="task ${item.concluida && "done"}">
          <img  src="https://www.gov.br/casacivil/pt-br/composicao/subchefia-de-analise-e-acompanhamento-de-politicas/sag/arquivos-de-apoio/imagens-diversas/check.png" alt="checked" onclick="concluirTarefa(${posicao})" />
          <p>${item.tarefa}</p>
          <img src="https://img.freepik.com/icones-gratis/lixo_318-531826.jpg" alt="trash" onclick="deletarItem(${posicao})" />
        </li>`;
    });

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem("lista", JSON.stringify(minhaListaDeItens));
  }

  function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao]
      .concluida;

    mostrarTarefas();
  }

  function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1);

    mostrarTarefas();
  }

  function recarregarTarefas() {
    const TarefasDoLocalStorage = localStorage.getItem("lista");

    if (TarefasDoLocalStorage) {
      minhaListaDeItens = JSON.parse(TarefasDoLocalStorage);
    }

    mostrarTarefas();
  }

  recarregarTarefas();

  button.addEventListener("click", adicionarNovaTarefa);