/* ==========================================================
   SISTEMA DE ABAS — AVANÇADO
   ========================================================== */

// Pega todos os botões e conteúdos
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

function showTab(index) {
    // Remove ativo de todos
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(tab => tab.classList.remove("active"));

    // Ativa o clicado
    tabButtons[index].classList.add("active");
    tabContents[index].classList.add("active");

    // Sempre volta para o topo suave
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Se for a aba 4 → executa animação
    if (index === 3) iniciarPoemaQuartaAba();
}

// Liga os cliques
tabButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => showTab(i));
});

// Inicia mostrando a primeira aba
showTab(0);


/* ==========================================================
   ANIMAÇÃO DO POEMA (ABA 4)
   ========================================================== */

function iniciarPoemaQuartaAba() {
    const linhas = document.querySelectorAll(".linha-poema");
    const assinatura = document.querySelector(".assinatura-poetica");

    // Reseta animações
    linhas.forEach(l => l.style.opacity = "0");
    assinatura.style.opacity = "0";

    // Ativa novamente
    linhas.forEach((linha, i) => {
        linha.style.animation = `linhaPoema 0.7s ease forwards`;
        linha.style.animationDelay = `${i * 0.55}s`;
    });

    assinatura.style.animation = `fadeIn 1s ease ${linhas.length * 0.55}s forwards`;
}


/* ==========================================================
   FUNÇÃO MÁQUINA DE ESCREVER (CASO QUEIRA USAR)
   ========================================================== */

function escreverTexto(elemento, texto, velocidade = 40) {
    elemento.innerHTML = "";
    let i = 0;

    function escrever() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escrever, velocidade);
        }
    }

    escrever();
}


/* ==========================================================
   SISTEMA DE EFEITOS VISUAIS FLUTUANTES
   ========================================================== */

const effectsLayer = document.getElementById("effects-layer");
let maxElements = 40; // Limite para não travar celular

function criarElementoFlutuante(tipo) {
    if (!effectsLayer) return;

    if (effectsLayer.childElementCount >= maxElements) return;

    let el = document.createElement("div");
    el.style.position = "absolute";
    el.style.pointerEvents = "none";

    const x = Math.random() * window.innerWidth;
    const tamanho = Math.random() * 12 + 10;

    switch (tipo) {
        case "petala":
            el.textContent = "🌸";
            el.style.left = `${x}px`;
            el.style.top = `-40px`;
            el.style.fontSize = `${tamanho + 10}px`;
            el.style.animation = "cairPetala 6s linear forwards";
            break;

        case "coracao":
            el.textContent = "💖";
            el.style.left = `${x}px`;
            el.style.bottom = `-40px`;
            el.style.fontSize = `${tamanho + 5}px`;
            el.style.animation = "subirCoracao 5s linear forwards";
            break;

        case "estrela":
            el.classList.add("estrela");
            el.style.left = `${x}px`;
            el.style.top = `${Math.random() * window.innerHeight}px`;
            el.style.setProperty("--cor", escolherCorEstrela());
            break;
    }

    effectsLayer.appendChild(el);

    // Remove quando terminar
    setTimeout(() => el.remove(), 6000);
}

function escolherCorEstrela() {
    const cores = ["#ffd700", "#fffacd", "#ffe699", "#fafafa"];
    return cores[Math.floor(Math.random() * cores.length)];
}

// Criadores automáticos
setInterval(() => criarElementoFlutuante("petala"), 900);
setInterval(() => criarElementoFlutuante("coracao"), 1600);
setInterval(() => criarElementoFlutuante("estrela"), 1300);


/* ==========================================================
   FUNÇÃO PARA FUTURA ANIMAÇÃO PERSONALIZADA NA ABA 5
   ========================================================== */

function animarAba5() {
    const tab5 = document.getElementById("tab5");

    if (!tab5.classList.contains("active")) return;

    // Exemplo: fade suave
    tab5.style.opacity = 0;
    setTimeout(() => {
        tab5.style.transition = "opacity 1s ease";
        tab5.style.opacity = 1;
    }, 100);
}

tabButtons[4].addEventListener("click", animarAba5);


/* ==========================================================
   FIM DO JS AVANÇADO
   ========================================================== */
