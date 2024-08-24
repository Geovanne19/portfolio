// Função que adiciona ou remove as classes
function toggleProjetoClasses(projeto) {
    const verMaisProjeto = projeto.querySelector('.verMais-projeto');
    const data = verMaisProjeto.querySelector('p');
    const btnVerMais = verMaisProjeto.querySelector('.btn-verMais');

    // Toggle das classes
    verMaisProjeto.classList.toggle('extended');
    data.classList.toggle('visible');
    btnVerMais.classList.toggle('visible');
}

// Seleciona todos os elementos com a classe 'projeto'
const projetos = document.querySelectorAll('.projeto');

// Adiciona os eventos de 'mouseenter', 'mouseleave' e 'click' para cada elemento
projetos.forEach(function (projeto) {
    // Para desktop: 'mouseenter' e 'mouseleave'
    projeto.addEventListener('mouseenter', function () {
        toggleProjetoClasses(projeto);
    });

    projeto.addEventListener('mouseleave', function () {
        toggleProjetoClasses(projeto);
    });

    // Para dispositivos móveis: 'click'
    projeto.addEventListener('click', function () {
        toggleProjetoClasses(projeto);
    });
});

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('ativo')
}

function alternarTema() {
    var root = document.documentElement;
    root.classList.toggle('tema-claro');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('ativo')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativo')
            })
            sec.classList.add('show-animate')
        } else {
            sec.classList.remove('show-animate')
        }
    })

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('ativo')
}

let trilho = document.getElementById('trilho')
trilho.addEventListener('click', () => {
    trilho.classList.toggle('claro')
    alternarTema()
})