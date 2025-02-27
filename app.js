//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços em branco no início e no final

    // Valida a entrada
    if (nome === "") {
        alert("Por favor, insira um nome."); // Exibe um alerta se o campo estiver vazio
        return; // Interrompe a execução da função
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    console.log(amigos);

    // Atualiza a lista de amigos no html
    atualizarListaAmigos();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a lista de amigos no html
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada amigo à lista
    amigos.forEach((amigo) => {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}
