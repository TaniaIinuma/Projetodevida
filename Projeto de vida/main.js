const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo1 - tempoAtual;

let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);

segundos %= 60;
minutos %= 60;
horas %= 24;
 
contadores[0].textContent = dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
for (let i = 0; i < 3; i++) {
    document.
    }
    (i + 1) * 2 + ",00";
    for (let i = 1; i < 3; i++) 
    getElementById("item" + i).
    textContent = 
    i * 2 + ",00";