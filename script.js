// // Função para alternar a classe 'extended' nos elementos com a classe 'feito'
// function toggleExtendedClass(event) {
//     // Adiciona ou remove a classe 'extended' do elemento clicado
//     event.currentTarget.classList.toggle('extended');
// }

// // Adiciona o ouvinte de evento de clique a todos os elementos com a classe 'feito'
// document.querySelectorAll('.feito').forEach(element => {
//     element.addEventListener('click', toggleExtendedClass);
// });

// // Função para adicionar a classe 'extended' quando o mouse entra no elemento
// function addExtendedClass(event) {
//     event.currentTarget.classList.add('extended');
// }

// // Função para remover a classe 'extended' quando o mouse sai do elemento
// function removeExtendedClass(event) {
//     event.currentTarget.classList.remove('extended');
// }

// // Adiciona ouvintes de evento para 'mouseover' e 'mouseout' a todos os elementos com a classe 'feito'
// document.querySelectorAll('.feito').forEach(element => {
//     element.addEventListener('mouseover', addExtendedClass);
//     element.addEventListener('mouseout', removeExtendedClass);
// });



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

// let trilho = document.getElementById('trilho')
// trilho.addEventListener('click', () => {
//     trilho.classList.toggle('claro')
//     alternarTema()
// })

function teste() {
    alert('ok')
}

// Define a função para criar e gerenciar o vetor de projetos
function createProjects() {
    // Cria um vetor de objetos, cada um representando um projeto
    const projetos = [
        {
            titulo: "Projeto 1",
            preview: "url-do-preview-do-projeto-1",
            descricao: "Descrição do Projeto 1",
            habilidades: ["HTML", "CSS", "JavaScript"],
            data: "2024-08-01",
            link_projeto: "https://link-do-projeto-1.com",
            link_repositorio: "https://link-do-repositorio-1.com",
            link_linkedin_post: "https://linkedin.com/posts/link-do-post-1"
        },
        {
            titulo: "Projeto 2",
            preview: "url-do-preview-do-projeto-2",
            descricao: "Descrição do Projeto 2",
            habilidades: ["React", "Node.js"],
            data: "2024-08-15",
            link_projeto: "https://link-do-projeto-2.com",
            link_repositorio: "https://link-do-repositorio-2.com",
            link_linkedin_post: "https://linkedin.com/posts/link-do-post-2"
        },
        // Adicione mais objetos de projeto conforme necessário
    ];

    // Exemplo de como acessar os dados do vetor
    projetos.forEach(projeto => {
        console.log(`Título: ${projeto.titulo}`);
        console.log(`Preview: ${projeto.preview}`);
        console.log(`Descrição: ${projeto.descricao}`);
        console.log(`Habilidades: ${projeto.habilidades.join(', ')}`);
        console.log(`Data: ${projeto.data}`);
        console.log(`Link do Projeto: ${projeto.link_projeto}`);
        console.log(`Link do Repositório: ${projeto.link_repositorio}`);
        console.log(`Link do Post no LinkedIn: ${projeto.link_linkedin_post}`);
        console.log('-----------------------------');
    });

    return projetos;
}

// Chama a função e armazena o vetor de projetos
const projetos = createProjects();
// Seleciona todos os elementos com a classe 'btn-verMais'
document.querySelectorAll('.btn-verMais').forEach(button => {
    // Adiciona um ouvinte de evento de clique a cada botão
    button.addEventListener('click', () => {
        // Seleciona o elemento com o id 'info-projeto'
        const info_projeto = document.getElementById('info-projeto');
        const blur_info = document.getElementById('blur-info');

        // Adiciona a classe 'show' ao elemento 'info-projeto'
        info_projeto.classList.add('show');
        blur_info.classList.add('show');
    });
});

document.querySelectorAll('.btn-sair').forEach(button => {
    // Adiciona um ouvinte de evento de clique a cada botão
    button.addEventListener('click', () => {
        // Seleciona o elemento com o id 'info-projeto'
        const info_projeto = document.getElementById('info-projeto');
        const blur_info = document.getElementById('blur-info');

        // Adiciona a classe 'show' ao elemento 'info-projeto'
        info_projeto.classList.remove('show');
        blur_info.classList.remove('show');
    });
});

