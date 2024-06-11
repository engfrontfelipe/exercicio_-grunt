document.addEventListener("DOMContentLoaded", function() {
    // Função para mostrar mensagem de compra
    function handleBuyButtonClick(event) {
        alert("Obrigado por sua compra!");
    }

    // Adicionar evento de clique aos botões de compra
    const buyButtons = document.querySelectorAll(".buy-button");
    buyButtons.forEach(button => {
        button.addEventListener("click", handleBuyButtonClick);
    });

    // Função para navegação suave
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        window.scrollTo({
            top: document.querySelector(targetId).offsetTop,
            behavior: "smooth"
        });
    }

    // Adicionar evento de clique aos links de navegação
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });
});
