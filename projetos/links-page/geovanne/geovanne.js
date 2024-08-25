function checkAncoras() {
    const anchors = document.querySelectorAll('a');

    // Itera sobre cada âncora
    anchors.forEach(anchor => {
        // Adiciona um ouvinte de evento de clique a cada âncora
        anchor.addEventListener('click', function (event) {
            if (anchor.getAttribute('href') === '#') {
                const erro = document.getElementById('mensagem-erro')
                erro.classList.add('show')

                // Previne o comportamento padrão do clique
                event.preventDefault();

                setTimeout(() => {
                    erro.classList.remove('show')
                }, 2000)
            }
        });
    });
}

checkAncoras();
