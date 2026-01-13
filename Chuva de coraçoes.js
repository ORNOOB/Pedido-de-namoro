document.addEventListener("DOMContentLoaded", function () {
    const containerCoracoes = document.getElementById("container-coracoes");

    for (let i = 0; i < 200; i++) {
        const coracao = document.createElement("div");
        coracao.className = "coracao";

        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.top = "-60px";
        coracao.style.animationDuration = (Math.random() * 8 + 5) + "s";

        containerCoracoes.appendChild(coracao);
    }
});

const botaoNao = document.querySelector(".btn-nao");

function fugir(e) {
    if (e) e.preventDefault();

    const x = (Math.random() - 0.5) * 800;
    const y = (Math.random() - 0.5) * 500;

    botaoNao.style.transform = `translate(${x}px, ${y}px)`;
}

botaoNao.addEventListener("mouseenter", fugir);

botaoNao.addEventListener("touchstart", fugir);

botaoNao.addEventListener("click", (e) => {
    e.preventDefault();
});

const botaoSim = document.querySelector(".btn-sim");
    const musica = document.getElementById("musica");

    botaoSim.addEventListener("click", () => {
    musica.currentTime = 0;
    musica.play();

    document.getElementById("mensagem").innerText = "Meio que já sabia a resposta! Te amo ❤️";
    document.getElementById("botoes").style.display = "none";
});
