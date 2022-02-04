function handleScroll() {
    const botaoTopo = document.querySelector(".botao-voltar");
    if (window.scrollY > 500) {
        botaoTopo.classList.add("botao-voltar-ativo");
    } else {
        botaoTopo.classList.remove("botao-voltar-ativo");
    }

}

window.addEventListener('scroll', handleScroll)