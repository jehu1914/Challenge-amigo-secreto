//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];
let amigosDisponiveis = []; // Cópia da lista para controle do sorteio

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

    // Mantém o foco no campo de entrada
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

// Função para sortear amigos secretos
function sortearAmigo() {
    // 1. Validar se há amigos disponíveis
    if (amigos.length < 2) {
        alert("Por favor, adicione pelo menos dois amigos antes de sortear.");
        return; // Interrompe a execução da função se não houver amigos suficientes
    }

    // 2. Criar uma cópia da lista de amigos para controle do sorteio
    amigosDisponiveis = [...amigos]; // Copia a lista original
    let resultadoSorteio = []; // Array para armazenar os pares de amigos

    // 3. Realizar o sorteio
    for (let i = 0; i < amigos.length; i++) {
        let amigoAtual = amigos[i];
        let amigoSecreto;

        // Garantir que o amigo secreto não seja o mesmo que o amigo atual
        do {
            let indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
            amigoSecreto = amigosDisponiveis[indiceSorteado];
        } while (amigoAtual === amigoSecreto);

        // Adicionar o par ao resultado
        resultadoSorteio.push(`O amigo secreto de ${amigoAtual} -> ${amigoSecreto}`);

        // Remover o amigo secreto da lista de disponíveis
        amigosDisponiveis.splice(amigosDisponiveis.indexOf(amigoSecreto), 1);
    }

    // 4. Mostrar o resultado na interface
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = ""; // Limpa o resultado anterior

    // Adicionar cada par ao resultado
    resultadoSorteio.forEach(par => {
        let itemResultado = document.createElement("li");
        itemResultado.textContent = par;
        resultadoElemento.appendChild(itemResultado);
    });

    // 5. Manter a lista original de amigos intacta no HTML
    atualizarListaAmigos();
}

// Evento de tecla "Enter" no campo de entrada
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});