const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    escondercartaoselecionado();

    cartaoAtual++;
    mostrarcartao();
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    escondercartaoselecionado();
    cartaoAtual--;
    mostrarcartao();
})

function mostrarcartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function escondercartaoselecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
