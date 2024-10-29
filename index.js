var palavraAtual; 
var pontuacao = 0;
var tempoLimite = 60; // 5 minutos em segundos
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
    for (let i = 0; i < palavra.length; i++) {
        const borda = verificarPalavra(palavra.charAt(i), i);
        inputTentativas.appendChild(gerarInputTentativa(borda, palavra.charAt(i)));
    }  return inputTentativas;
}

// Função para criação de novos 5 inputs após a ativação do botão "Enviar".
function gerarInputTentativa(borda, letra) {
    const inputTentativa = document.createElement("input");
    inputTentativa.value = letra;
    inputTentativa.className = borda;
    return inputTentativa;
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
  function processarInput(element){
    element.value = removerSimbolosEAcentos(element.value);
    element.value = converterMaiusculas(element.value);
  }

// Inicializa o jogo ao carregar
inicializarJogo();