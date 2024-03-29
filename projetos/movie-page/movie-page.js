let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carrosselDom = document.querySelector('.carrossel');
let SliderDom = carrosselDom.querySelector('.carrossel .lista');
let thumbnailBorderDom = document.querySelector('.carrossel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
    showSlider('next');
}

prevDom.onclick = function () {
    showSlider('prev');
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carrossel .lista .item');
    let thumbnailItemsDom = document.querySelectorAll('.carrossel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carrosselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carrosselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carrosselDom.classList.remove('next');
        carrosselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

//step 1: get DOM
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll para baixo
        document.getElementById("header").style.top = "-70px"; // Oculta o header
    } else {
        // Scroll para cima
        document.getElementById("header").style.top = "0"; // Mostra o header
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para lidar com scroll no topo da página

    if (currentScroll != 0) {
        document.getElementById("header").style.background = "#0B141B";
    } else {
        document.getElementById("header").style.background = "transparent";
    }
}, false);

function Alerta () {
    let alerta = document.querySelector('.alerta');
    alerta.classList.add('ativo');
}

const img = document.getElementById('img')

function carrossel() {
    idx++
    if
}