var palavraAtual;
function pegarPalavraAleatoriaParaRodada(palavras){
    return palavraDaRodada = palavras[0];
}

function inicializarJogo(){
    const palavras = [
        "gatos", "piano", "vapor", "pleno", "folha", "campo", "trono", "bravo", "vento", "festa",
        "custo", "carro", "nobre", "globo", "peixe", "cerca", "mover", "risco", "sonho", "justo",
        "lento", "pouco", "salto", "roupa", "vidro", "lápis", "verde", "frase", "caixa", "troca"
    ];
    palavraAtual = pegarPalavraAleatoriaParaRodada(palavras);
}
d sadad

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


function gerarTentativa(palavra){
    console.log(palavra.length)
    inputTentativas = document.createElement("div")
    for(let i = 0; i < palavra.length; i++){
        inputTentativas.appendChild(gerarInputTentativa(verificarPlavra(palavra.charAt(i), palavra), palavra.charAt(i)))
    }

    console.log(inputTentativa)
    return inputTentativas;



}


function gerarInputTentativa(borda, letra){
    inputTentativa = document.createElement("input");
    inputTentativa.value = letra;
    inputTentativa.className = borda;
    return inputTentativa
}


function verificarPlavra(letra, palavra){

    return "correto"



}