//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // Remove espaços em branco no início e no final

    // Valida a entrada
    if (nome === "") {
        alert("Por favor, insira um nome."); // Exibe um alerta se o campo estiver vazio
        return; // Interrompe a execução da função
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    console.log(amigos);

    // Atualiza a lista de amigos na interface
    atualizarListaAmigos();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    // 1. Obter o elemento da lista
    let lista = document.getElementById("listaAmigos");

    // 2. Limpar a lista existente
    lista.innerHTML = "";

    // 3. Percorrer o array e adicionar elementos à lista
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo elemento <li>
        const itemLista = document.createElement("li");
        // Define o conteúdo do <li> como o nome do amigo
        itemLista.textContent = amigos[i];
        // Adiciona o <li> à lista
        lista.appendChild(itemLista);
    }
}