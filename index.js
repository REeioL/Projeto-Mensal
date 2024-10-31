var palavraAtual;
var pontuacao = 0;
var tempoLimite = 60; // Tempo limite em segundos
var temporizador;

// Função para selecionar uma palavra aleatória
function pegarPalavraAleatoriaParaRodada(palavras) {
    palavraAtual = palavras[Math.floor(Math.random() * palavras.length)];
    return palavraAtual;
}

// Função para inicializar o jogo
function inicializarJogo() {
    const palavras = [
        "CASAS", "SONHO", "BRAVO", "FORTE", "LIVRO", "CAMPO", "NOBRE", "CORPO", "GOSTO",
        "PRATO", "TRONO", "RISCO", "CAIXA", "CARRO", "VIDRO", "FESTA", "SALTO", "VERDE",
        "GRITO", "ROUPA", "PONTO", "TORRE", "PEIXE", "PORTA", "CURVA", "JUSTO", "LIMPO",
        "FOLHA", "PEDRA", "TREVO", "FESTA", "PLANO", "LANÇA", "BOLSA", "TERNO", "RUGAS",
        "JUNTA", "BISCO", "CESTA", "FRUTA", "DENTE", "VELHO", "FONTE", "JOVEM", "NUVEM",
        "AMIGO", "TIGRE", "CACHO", "FREIO", "FALSO", "FENDA", "LUZES", "CALOR", "MUNDO",
        "FOLHA", "BATER", "CHUVA", "BICHO", "CENAS", "DIZER", "BANDA", "FELIZ", "CHAVE",
        "RUGAS", "PLENA", "SOMAR", "CHEFE", "FUMAR", "SAUDA", "DOLAR", "LIMPA", "QUASE",
        "RAPAZ", "MALHA", "CINCO", "NAVEL", "CLARA", "LAZER", "CORAL", "TRAMA",
        "PRETO", "VESTE", "VALOR", "CAMAS", "PAPEL", "TALCO", "QUASE", "PILHA"
    ];
    palavraAtual = pegarPalavraAleatoriaParaRodada(palavras);
    console.log("Palavra atual:", palavraAtual);  // Para depuração
    atualizarPontuacao(); // Atualiza a pontuação na tela
    iniciarTemporizador(); // Inicia o temporizador
}

// Função para iniciar o temporizador
function iniciarTemporizador() {
    let tempoRestante = tempoLimite;
    temporizador = setInterval(() => {
        if (tempoRestante <= 0) {
            clearInterval(temporizador);
            alert("Tempo esgotado! Pontuação final: " + pontuacao);
            return;
        }
        tempoRestante--;
        atualizarDisplayTempo(tempoRestante);
    }, 1000);
}

// Função para atualizar o display do tempo
function atualizarDisplayTempo(tempoRestante) {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    document.getElementById("tempo").innerText = 
        `Tempo restante: ${minutos}:${segundos < 10 ? '0' : ''}${segundos};`
}

function play() {
    const tentativas = document.getElementById("tentativas");
    let palavra = "";
    for (let i = 1; i <= 5; i++) {
        palavra += document.getElementById(i.toString()).value;
    }
    tentativas.appendChild(gerarTentativa(palavra));

    if (tentativas.children.length > 4) {
        tentativas.removeChild(tentativas.firstChild); // Remove a primeira tentativa
    }

    if (palavra === palavraAtual) {
        pontuacao += 1;  // Incrementa 1 ponto ao acertar a palavra completa
        atualizarPontuacao();  // Atualiza a pontuação na tela

        // Seleciona uma nova palavra sem reiniciar o temporizador
        const palavras = [
            "CASAS", "SONHO", "BRAVO", "FORTE", "LIVRO", "CAMPO", "NOBRE", "CORPO", "GOSTO",
            "PRATO", "TRONO", "RISCO", "CAIXA", "CARRO", "VIDRO", "FESTA", "SALTO", "VERDE",
            "GRITO", "ROUPA", "PONTO", "TORRE", "PEIXE", "PORTA", "CURVA", "JUSTO", "LIMPO",
            "FOLHA", "PEDRA", "TREVO", "FESTA", "PLANO", "LANÇA", "BOLSA", "TERNO", "RUGAS",
            "JUNTA", "BISCO", "CESTA", "FRUTA", "DENTE", "VELHO", "FONTE", "JOVEM", "NUVEM",
            "AMIGO", "TIGRE", "CACHO", "FREIO", "FALSO", "FENDA", "LUZES", "CALOR", "MUNDO",
            "FOLHA", "BATER", "CHUVA", "BICHO", "CENAS", "DIZER", "BANDA", "FELIZ", "CHAVE",
            "RUGAS", "PLENA", "SOMAR", "CHEFE", "FUMAR", "SAUDA", "DOLAR", "LIMPA", "QUASE",
            "RAPAZ", "MALHA", "CINCO", "NAVEL", "CLARA", "LAZER", "CORAL", "TRAMA",
            "PRETO", "VESTE", "VALOR", "CAMAS", "PAPEL", "TALCO", "QUASE", "PILHA"
        ];
        palavraAtual = pegarPalavraAleatoriaParaRodada(palavras); // Gera nova palavra
        console.log("Nova palavra:", palavraAtual); // Para depuração
        alert("Parabéns! Você acertou a palavra! Tente outra.");
    }
}

// Função onde a validação dos inputs é criada para o feedback visual do usuário.
function gerarTentativa(palavra) {
    const inputTentativas = document.createElement("div");
    inputTentativas.className = "tentativa-container"; // Adiciona a classe para estilo

    for (let i = 0; i < palavra.length; i++) {
        const borda = verificarPalavra(palavra.charAt(i), i);
        const status = verificarPalavra(palavra.charAt(i), i); // Define status da letra
        inputTentativas.appendChild(gerarInputTentativa(borda, palavra.charAt(i), status));
    }
    return inputTentativas;
}

// Função para gerar ícones do Bootstrap
function gerarIconeBootstrap(tipoIcone, cor, tamanho = "1em") {
   
    const icone = document.createElement("i");
    icone.className = `bi bi-${tipoIcone}`;
    icone.style.color = cor;
    icone.style.fontSize = tamanho;
    return icone;
}

// Função para gerar o input com a borda e a letra, e adicionar o ícone conforme o status da letra
function gerarInputTentativa(borda, letra, status) {
    const container = document.createElement("div"); 
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.className = borda; // Atribui a classe recebida como parâmetro à div

    const inputTentativa = document.createElement("input");
    inputTentativa.value = letra; // Define o valor do input com a letra recebida
    inputTentativa.className = borda; // Atribui a mesma classe ao input

    let tipoIcone, corIcone; // Declara variáveis para armazenar o tipo e a cor do ícone
    switch (status) {
        case "correto": // Define o ícone como preenchido e com cor verde se o status for "correto" 
            tipoIcone = "heart-fill";
            corIcone = "green";
            break;
        case "quaseCorreto": // Define o ícone como meio preenchido e amarelo se o status for "quaseCorreto"
            tipoIcone = "heart-half";
            corIcone = "yellow";
            break;
        default: // Define o ícone como vazio e vermelho se o status for "errado"
            tipoIcone = "heart";
            corIcone = "red";
            break;
    }

    const icone = gerarIconeBootstrap(tipoIcone, corIcone, "1.5em"); // Chama a função gerarIconeBootstrap para criar o ícone com os parâmetros definidos
    container.appendChild(inputTentativa); // Adiciona o input e o ícone ao contêiner
    container.appendChild(icone);

    return container; // Retorna o contêiner que agora contém o input e o ícone
}

// Validação de palavras sem contagem de pontos por letra
function verificarPalavra(letra, posicao) {
    return palavraAtual.charAt(posicao) === letra ? "correto" : palavraAtual.includes(letra) ? "quaseCorreto" : "errado";
}

// Função para atualizar a pontuação na tela
function atualizarPontuacao() {
    document.getElementById("pontuacao").innerText = "Pontuação: " + pontuacao;
}

function removerSimbolosEAcentos(texto) {
    return texto.replace(/[^a-zA-Z ]/g, '');
  }
  function converterMaiusculas(texto){
    return texto.toUpperCase();
  }
  function moverInput(element, proximoId, anteriorId){
    if(element.value.length === element.maxLength && proximoId){
        document.getElementById(proximoId).focus();
    }else if (element.value.length === 0 && anteriorId) {
        document.getElementById(anteriorId).focus();
    }
  }
  function processarInput(element, proximoId, anteriorId){
    element.value = removerSimbolosEAcentos(element.value);
    element.value = converterMaiusculas(element.value);
    moverInput(element, proximoId, anteriorId);
  }
//
// Inicializa o jogo ao carregar
inicializarJogo();