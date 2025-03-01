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

    // Evitar duplicados
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    console.log(amigos);

    // Atualiza a lista de amigos na interface
    atualizarListaAmigos();

    // Limpa o campo de entrada
    input.value = "";

    // Mantener el foco en el campo de entrada
    input.focus();
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
        let itemLista = document.createElement("li");
        // Define o conteúdo do <li> como o nome do amigo
        itemLista.textContent = amigos[i];
        // Adiciona o <li> à lista
        lista.appendChild(itemLista);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // 1. Validar se há amigos disponíveis
    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos um amigo antes de sortear.");
        return; // Interrompe a execução da função se não houver amigos
    }

    // 2. Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // 3. Obter o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // 4. Mostrar o resultado na interface
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>O amigos secreto sorteado é: ${amigoSorteado}</li>`;
}

// Evento de tecla "Enter" en el campo de entrada
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});