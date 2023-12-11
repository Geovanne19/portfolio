// function sidebar() {
//     const btn = document.getElementById('btn-hamb')
//     const sidebar = document.getElementById('sidebar')

//     btn.classList.toggle('ativar')
//     sidebar.classList.toggle('ativar')
//     /*<div id="sidebar"></div>;
//     #sidebar {
//         background - color: rgb(34, 34, 34);
//         box - shadow: 0px 0px 15px black;
//         position: fixed;
//         height: 100 %;
//         width: 0;
//         z - index: 2;
//         transition: 0.3s;
//     }*/
// }

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

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('ativo')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativo')
            })
        }
    })

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('ativo')
}