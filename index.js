var palavraAtual;

function pegarPalavraAleatoriaParaRodada(palavras){
    return palavraDaRodada = palavras[Math.floor(Math.random() * palavras.length)];
}
console.log(palavraAtual)
function inicializarJogo(){
    const palavras = [
        "gatos", "piano", "vapor", "pleno", "folha", "campo", "trono", "bravo", "vento", "festa",
        "custo", "carro", "nobre", "globo", "peixe", "cerca", "mover", "risco", "sonho", "justo",
        "lento", "pouco", "salto", "roupa", "vidro", "lápis", "verde", "frase", "caixa", "troca"
    ];
    palavraAtual = pegarPalavraAleatoriaParaRodada(palavras);
}


function play(){
    const tentativas = document.getElementById("tentativas");
    console.log("Realizar validacoes");
    input1 = document.getElementById("1").value;
    input2 = document.getElementById("2").value;
    input3 = document.getElementById("3").value;
    input4 = document.getElementById("4").value;
    input5 = document.getElementById("5").value;
    tentativas.appendChild(gerarTentativa(input1+input2+input3+input4+input5));

}


inicializarJogo()

//Função onde a validação dos inputs são criados para o feedback visual do usuário.
function gerarTentativa(palavra){
    console.log(palavra.length)
    inputTentativas = document.createElement("div")
    for(let i = 0; i < palavra.length; i++){
        inputTentativas.appendChild(gerarInputTentativa(verificarPalavra(palavra.charAt(i), palavra), palavra.charAt(i)))
    }

    console.log(inputTentativa)
    return inputTentativas;



}

//Função para criação de novos 5 inputs (onde são digitadas as palavras) após a ativação do botão "Enviar".
function gerarInputTentativa(borda, letra){
    inputTentativa = document.createElement("input");
    inputTentativa.value = letra;
    inputTentativa.className = borda;
    return inputTentativa
}

//Validação de palavras onde estarão "corretas", "quaseCorretas" ou "errado". 
function verificarPalavra(letra, palavraAtual){
    console.log(letra)
    console.log(palavraAtual)
    for(let i = 0; i < palavraAtual.length; i++){
        if (palavraAtual.charAt(i) === letra) {
    return "correto";
        }
    }
        if (palavraAtual.includes(letra)) {
        return "quaseCorreto"
    }else{
    return "errado";
    }
}