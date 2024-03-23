let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scroll para baixo
        document.getElementById("header").style.top = "-70px"; // Oculta o header
    } else {
        // Scroll para cima
        document.getElementById("header").style.top = "0"; // Mostra o header
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para lidar com scroll no topo da página
}, false);