const emojis = [
    "🥶",
    "🥶",
    "🦊",
    "🦊",
    "👽",
    "👽",
    "👻",
    "👻",
    "💩",
    "💩",
    "👺",
    "👺",
    "🤠",
    "🤠",
    "🍺",
    "🍺",
];

let openCards = []; /* Guarda as duas cartas abertas para comparar*/

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1)); /* Isso vai gerar varos elementos com peso 2 e varios com peso 1,
                                                                       vai ficar aleatoria a ordem dos mesmos */

for (let i=0; i < emojis.length; i++) {
    let box = document.createElement("div"); /* Criando dinamicamente um elemento com uma tag "div" */
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen"); /* Adicionando a classe "boxOpen" para as duas cartas selecionadas */
        openCards.push(this);
    }

    if(openCards.length === 2) { /* Quando eu tiver duas cartas abertas */
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {

    if(openCards[0].innerHTML === openCards[1].innerHTML) { /* Verificando se as cartas que estão abertas são iguais */
        openCards[0].classList.add("boxMatch"); /* Adicionando a classe boxMatch aos elementos */
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen"); /* Fechando as cartas */
        openCards[1].classList.remove("boxOpen");
    }

    openCards = []; /*Resetando as duas cartas que estão salvas na memória */

    if (document.querySelectorAll(".boxMatch").length === emojis.length) { /* Quando o tamanho de divs que tem a classe boxMatch é a mesma que o tamanho elementod que tem em emojis */
        alert("Parabéns! Você venceu. :) ")
    }


}