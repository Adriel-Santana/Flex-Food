const entradaCodigo = document.getElementById('programar');
const areaPersonagem = document.getElementById('areaPersonagem');
const indicadorNivelAtual = document.getElementById('indicadorNivelAtual');
const setaGuiaPersonagens = document.getElementById('setaGuiaPersonagens');
const areaComida = document.getElementById('areaComida');

const personagem1 = document.getElementById('personagem1');
const personagem2 = document.getElementById('personagem2');
const personagem3 = document.getElementById('personagem3');

const comida1 = document.getElementById('comida1');
const comida2 = document.getElementById('comida2');
const comida3 = document.getElementById('comida3');

const botaoProximo = document.getElementById('botaoProximo');
const botaoReiniciar = document.getElementById('botaoReiniciar');
const textoReiniciar = document.getElementById('textoReiniciar');
const botaoReiniciarSim = document.getElementById('botaoReiniciarConfirmar');
const botaoReiniciarNao = document.getElementById('botaoReiniciarCancelar');

const textoNivel = document.getElementById('textoNivel');

var posicao_personagem1 = personagem1.getBoundingClientRect();
var posicao_personagem2 = personagem2.getBoundingClientRect();
var posicao_personagem3 = personagem3.getBoundingClientRect();

var posicao_comida1 = comida1.getBoundingClientRect();
var posicao_comida2 = comida2.getBoundingClientRect();
var posicao_comida3 = comida3.getBoundingClientRect();

const qtdElementos = [1,1,1,1,1, 2,2,2,3,3, 3,3,3,3,3, 3,3,2,2,3];
var qtdElementosAtual = 0;
const respostas = [
                   "justify-content:flex-end;",
                   "align-items:flex-end;",
                   "justify-content:center;",
                   "justify-content:center;align-items:center;",
                   "justify-content:flex-end;align-items:flex-end;",
                   
                   "justify-content:space-between;",
                   "justify-content:center;",
                   "justify-content:space-around;",
                   "justify-content:space-around;align-items:flex-end;",
                   "flex-direction:row-reverse;",
                   
                   "flex-direction:column;",
                   "flex-direction:column-reverse;justify-content:flex-end;",
                   "flex-direction: row-reverse;align-items: flex-end;justify-content: space-around;",
                   "flex-direction: column;justify-content:flex-end;align-items:center;",
                   "flex-direction: row-reverse;justify-content: center;",

                   "flex-direction:column;justify-content:center;align-items:center;",
                   "flex-direction:column;align-items:flex-end;justify-content:flex-end;",
                   "flex-direction:column-reverse;align-items:center;justify-content:space-around;",
                   "flex-direction:row-reverse;justify-content:flex-start;",
                   "flex-direction:column;justify-content:space-around;"
                ];
var respostaAtual = 0;
var respostasInseridas = new Array(20);

var entradaCodigoValor = '0';
var maxLinhas = 3;
var nivelAtual = 0;
                
const textosNivel = [
                   "<p>Bem vindo ao Flex Food! Esse é um jogo em que você ajuda essas pessoas famintas a pegarem sua comida. Leve esse amiguinho até sua refeição usando código CSS, como por exemplo o <span class='nomeComando'>justify-content</span>, que organiza os elementos horizontalmente e que aceita as seguintes entradas:</p><ul><li><span class='nomeComando'>flex-start</span> alinha os itens para o lado esquerdo do container.</li><li><span class='nomeComando'>flex-end</span> alinha os itens para o lado direito do container.</li><li><span class='nomeComando'>center</span> centraliza os itens dentro do container.</li><li><span class='nomeComando'>space-between</span> posiciona os itens com espaço equivalente entre eles.</li><li><span class='nomeComando'>space-around</span> posiciona os itens com espaço equivalente ao redor deles.</li></ul>",
                   "<p>O <span class='nomeComando'>justify-content</span> só funciona horizontalmente, mas é preciso levar nosso amigo para baixo. Para isso, podemos usar o <span class='nomeComando'>align-items</span>, que aceita as seguintes entradas:</p><ul><li><span class='nomeComando'>center</span> alinha os itens no centro do container.</li><li><span class='nomeComando'>flex-start</span> alinha os itens no início do container.</li><li><span class='nomeComando'>flex-end</span> alinha os itens no final do container.</li><li><span class='nomeComando'>baseline</span> alinha os itens na linha de base do container.</li><li><span class='nomeComando'>stretch</span> estica os itens para encaixarem no container.</li></ul>",
                   "<p>Agora podemos usar o <span class='nomeComando'>justify-content</span> outra vez. Lembre-se que essa função alinha esses itens horizontalmente.</p></p><ul><li><span class='nomeComando'>flex-start</span> alinha os itens para o lado esquerdo do container.</li><li><span class='nomeComando'>flex-end</span> alinha os itens para o lado direito do container.</li><li><span class='nomeComando'>center</span> centraliza os itens dentro do container.</li><li><span class='nomeComando'>space-between</span> posiciona os itens com espaço equivalente entre eles.</li><li><span class='nomeComando'>space-around</span> posiciona os itens com espaço equivalente ao redor deles.</li></ul>",
                   "<p>Dessa vez será necessário utilizar tanto o <span class='nomeComando'>justify-content</span> e <span class='nomeComando'>align-items</span> para poder ajudar nosso amigo a pegar sua comida</p>",
                   "<p>Dessa vez será necessário utilizar tanto o <span class='nomeComando'>justify-content</span> e <span class='nomeComando'>align-items</span> para poder ajudar nosso amigo a pegar sua comida</p>",
                   
                   "<p>Outro amigo se juntou também! Agora é preciso utilizar o comando <span class='nomeComando'>justify-content</span> corretamente para que os dois consigam chegar à suas comidas.</p> <ul> <li><span class='nomeComando'>flex-start</span> alinha os itens para o lado esquerdo do container.</li> <li><span class='nomeComando'>flex-end</span> alinha os itens para o lado direito do container.</li> <li><span class='nomeComando'>center</span> centraliza os itens dentro do container.</li> <li><span class='nomeComando'>space-between</span> posiciona os itens com espaço equivalente entre eles.</li> <li><span class='nomeComando'>space-around</span> posiciona os itens com espaço equivalente ao redor deles.</li></ul>",
                   "<p>Use o comando <span class='nomeComando'>justify-content</span> corretamente para que os dois consigam chegar à suas comidas.</p> <ul> <li><span class='nomeComando'>flex-start</span> alinha os itens para o lado esquerdo do container.</li> <li><span class='nomeComando'>flex-end</span> alinha os itens para o lado direito do container.</li> <li><span class='nomeComando'>center</span> centraliza os itens dentro do container.</li><li><span class='nomeComando'>space-between</span> posiciona os itens com espaço equivalente entre eles.</li> <li><span class='nomeComando'>space-around</span> posiciona os itens com espaço equivalente ao redor deles.</li> </ul>",
                   "<p>Use o comando <span class='nomeComando'>justify-content</span> corretamente para que os dois consigam chegar à suas comidas.</p><ul><li><span class='nomeComando'>flex-start</span> alinha os itens para o lado esquerdo do container.</li><li><span class='nomeComando'>flex-end</span> alinha os itens para o lado direito do container.</li><li><span class='nomeComando'>center</span> centraliza os itens dentro do container.</li><li><span class='nomeComando'>space-between</span> posiciona os itens com espaço equivalente entre eles.</li><li><span class='nomeComando'>space-around</span> posiciona os itens com espaço equivalente ao redor deles.</li></ul>",
                   "<p>O grupo está completo dessa vez. Use os comandos que você aprendeu até agora e leve os amigos até as suas comidas.</p>",
                   "<p>Não será tão simples deixá-los nos seus lugares nessa situação. Para isso, a direção da fila deve ser trocada com o <span class='nomeComando'>flex-direction</span>.</p><ul><li><span class='nomeComando'>row</span> alinha os itens em uma fileira horizontal.</li><li><span class='nomeComando'>row-reverse</span> alinha os itens em uma fileira horizontal, mas no sentido inverso.</li><li><span class='nomeComando'>column</span> alinha os itens em uma coluna.</li><li><span class='nomeComando'>column-reverse</span> alinha os itens em uma coluna, mas no sentido inverso.</li></ul>",
                   
                   "<p>Use o <span class='nomeComando'>flex-direction</span> para trocar a direção da fila.</p><ul><li><span class='nomeComando'>row</span> alinha os itens em uma fileira horizontal.</li><li><span class='nomeComando'>row-reverse</span> alinha os itens em uma fileira horizontal, mas no sentido inverso.</li><li><span class='nomeComando'>column</span> alinha os itens em uma coluna.</li><li><span class='nomeComando'>column-reverse</span> alinha os itens em uma coluna, mas no sentido inverso.</li></ul>",
                   "<p>O grupo está completo dessa vez. Use os comandos que você aprendeu até agora e leve os amigos até as suas comidas. Uma dica: se o <span class='nomeComando'>flex-direction</span> for usado para colunas, o <span class='nomeComando'>justify-content</span> funcionará na vertical, e o <span class='nomeComando'>align-items</span> funcionará na horizontal. Além disso, se a fila for invertida, os efeitos dos outros comandos também serão invertidos.</p>",
                   "<p>Use os comandos que você aprendeu até agora e leve os amigos até as suas comidas.</p>",
                   "<p>Use os comandos que você aprendeu até agora e leve os amigos até as suas comidas.</p>",
                   "<p>Use os comandos que você aprendeu até agora e leve os amigos até as suas comidas.</p>",

                   "<p>Use os comandos que você aprendeu até agora e leve os amigos até as suas comidas.</p>",
                   "<p>Use os comandos que você aprendeu até agora e leve os amigos até as suas comidas.</p>",
                   "<p>Use os comandos que você aprendeu até agora e leve os amigos até as suas comidas.</p>",
                   "<p>Use os comandos que você aprendeu até agora e leve os amigos até as suas comidas.</p>",
                   "<p>Use os comandos que você aprendeu até agora e leve os amigos até as suas comidas.</p>"
                ];

var contadorAnimComida = 0;
var animComidaTamanho = "";

window.onload = function() {
    carregarNivel(0);
}

function animComida() {
    contadorAnimComida = contadorAnimComida+1;
    console.log("animcomida " + contadorAnimComida);
    if (contadorAnimComida%2 == 0) {
        animComidaTamanho = "100%";
    } else {
        animComidaTamanho = "125%";
    }
}

document.getElementById('programar').onkeyup = function detectarEntrada() {
    entradaCodigoValor = entradaCodigo.value;
    areaPersonagem.style = entradaCodigoValor;
    respostasInseridas[nivelAtual] = entradaCodigoValor;
    validar();
}

function carregarNivel(idNivel){
    nivelAtual = idNivel;
    indicadorNivelAtual.innerHTML = (idNivel + 1);
    qtdElementosAtual = qtdElementos[idNivel];
    respostaAtual = respostas[idNivel];
    areaComida.style = (respostaAtual);
    console.log("quantidade de elementos:" + qtdElementosAtual);

    if (qtdElementosAtual < 3) {
        personagem3.style = ("display:none;")
        comida3.style = ("display:none;" + animComidaTamanho)

        if (qtdElementosAtual < 2) {
            personagem2.style = ("display:none;")
            comida2.style = ("display:none; scale:" + animComidaTamanho)
        } else {
            personagem2.style = ("translate: 0 0;")
            comida2.style = ("translate: 0 0; scale:" + animComidaTamanho)
        }

    } else {
        personagem3.style = ("translate: 0 0;")
        comida3.style = ("translate: 0 0; scale:" + animComidaTamanho)
        personagem2.style = ("translate: 0 0;")
        comida2.style = ("translate: 0 0; scale:" + animComidaTamanho)
        personagem1.style = ("translate: 0 0;")
        comida1.style = ("translate: 0 0; scale:" + animComidaTamanho)
    }

    if (respostasInseridas[nivelAtual] ==  undefined) {
        entradaCodigo.value = null;      
    } else {
        entradaCodigo.value = respostasInseridas[nivelAtual];
    }
    
    areaPersonagem.style = entradaCodigo.value;
    textoNivel.innerHTML = textosNivel[idNivel];

    console.log("Nível " + idNivel + " carregado");

    validar();
}

entradaCodigo.addEventListener('keydown', function(digitacao) {
    const linhasAtuais = this.value.split('\n').length;
    // esse "this" retorna ao "textarea"
    
    if (digitacao.keyCode === 13 && linhasAtuais >= maxLinhas) {
        digitacao.preventDefault();
    }
});

function nivelAnterior (){
    console.log('nivel anterior');
    if (nivelAtual > 0) {
        carregarNivel(nivelAtual - 1);
    }
}

function nivelPosterior (){
    console.log('nivel posterior');
    if (nivelAtual < 19) {
        carregarNivel(nivelAtual + 1);  
    }
}

function validar(){
    console.log('');
    console.log('Posições:');
    console.log('Personagem 1: ' + personagem1.getBoundingClientRect().top + 'y ' + personagem1.getBoundingClientRect().left + "x");
    console.log('Comida 1: ' + comida1.getBoundingClientRect().top + 'y ' + comida1.getBoundingClientRect().left + "x");
    console.log('Personagem 2: ' + personagem2.getBoundingClientRect().top + 'y ' + personagem2.getBoundingClientRect().left + "x");
    console.log('Comida 2: ' + comida2.getBoundingClientRect().top + 'y ' + comida2.getBoundingClientRect().left + "x");
    console.log('Personagem 3: ' + personagem3.getBoundingClientRect().top + 'y ' + personagem3.getBoundingClientRect().left + "x");
    console.log('Comida 3: ' + comida3.getBoundingClientRect().top + 'y ' + comida3.getBoundingClientRect().left + "x");

    if ((personagem1.getBoundingClientRect().top == comida1.getBoundingClientRect().top) &
        (personagem2.getBoundingClientRect().top == comida2.getBoundingClientRect().top) &
        (personagem3.getBoundingClientRect().top == comida3.getBoundingClientRect().top) &
        (personagem1.getBoundingClientRect().left == comida1.getBoundingClientRect().left) &
        (personagem2.getBoundingClientRect().left == comida2.getBoundingClientRect().left) &
        (personagem3.getBoundingClientRect().left == comida3.getBoundingClientRect().left)) 
    {
        console.log('Resposta válida!!!!!')
        botaoProximo.style = ""
    } else {
        botaoProximo.style = "display:none;"
    }
}

function reiniciar() {

    for (let i = 0; i < 20; i++) {
        respostasInseridas[i] = "";
        console.log(i + ' limpo')
    }

    carregarNivel(0);

    reloadAreaReiniciar();
}

function confirmarReiniciar(){
    botaoReiniciar.style = 'display:none';
    textoReiniciar.style = 'display:inline';
    botaoReiniciarSim.style = 'display:inline';
    botaoReiniciarNao.style = 'display:inline';
}

function reloadAreaReiniciar() {
    botaoReiniciar.style = 'display:inline';
    textoReiniciar.style = 'display:none';
    botaoReiniciarSim.style = 'display:none';
    botaoReiniciarNao.style = 'display:none';
}



/* 
textarea.value:
Acessa o conteúdo (o texto) que está escrito dentro do elemento <textarea> naquele momento.

.split('\n'):
O método split corta uma string e a transforma em uma lista (array).
O parâmetro '\n' representa a quebra de linha (o "Enter").
O que ele faz: Ele procura onde o usuário apertou "Enter" e separa o texto nesses pontos.

.length:
Como o split transformou o texto em uma lista, o .length conta quantos itens existem nessa lista.

preventDefault() está prevenindo que a quebra de linha aconteça. O evento padrão que está sendo
evitado é a quebra de linha. A quebra de linha iria ocorrer nas condições indicadas no If se o
preventDefault nao estivesse presente.
*/