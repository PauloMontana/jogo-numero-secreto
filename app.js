// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Número Secreto";

// let paragrafo = document.querySelector ("p")
// paragrafo.innerHTML = "Digite um número entre 1 e 10"

let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function mensagensNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function exibirMensagemInicial() {
    mensagensNaTela ('h1', 'Número Secreto');
    mensagensNaTela ('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto) {
        mensagensNaTela ('h1', 'Acertou!');
        let mensagemTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o Número Secreto em ${tentativas} ${mensagemTentativa}`;
        mensagensNaTela ('p', mensagemTentativas);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`)
} else {
    if ( chute > numeroSecreto) {
        mensagensNaTela ('p', 'O número secreto é menor');
} else {
    mensagensNaTela ('p', 'O número secreto é maior');
}
    tentativas++;
    limparCampo();
}
}
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeLementosNaLista = listaNumeroSorteados.length;

    if (quantidadeDeLementosNaLista == numeroLimite) {
        listaNumeroSorteados = []
    }

    if(listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
 };
 
 function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
 }

 function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true)
 }