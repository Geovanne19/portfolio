let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carrosselDom = document.querySelector('.carrossel');
let SliderDom = carrosselDom.querySelector('.carrossel .lista');
let thumbnailBorderDom = document.querySelector('.carrossel .thumbnail');
let thumbnailItensDom = thumbnailBorderDom.querySelectorAll('.item');
let tempoDom = document.querySelector('.carrossel .tempo');

thumbnailBorderDom.appendChild(thumbnailItensDom[0]);
let tempoRodando = 3000;
let tempoAutoNext = 7000;

nextDom.onclick = function () {
    mostrarSlider('next');
}

prevDom.onclick = function () {
    mostrarSlider('prev');
}
let esgotarTempo;
let rodarNextAuto = settempoout(() => {
    next.click();
}, tempoAutoNext)
function mostrarSlider(type) {
    let SliderItensDom = SliderDom.querySelectorAll('.carrossel .lista .item');
    let thumbnailItensDom = document.querySelectorAll('.carrossel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItensDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItensDom[0]);
        carrosselDom.classlista.add('next');
    } else {
        SliderDom.prepend(SliderItensDom[SliderItensDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItensDom[thumbnailItensDom.length - 1]);
        carrosselDom.classlista.add('prev');
    }
    limpartempo(esgotarTempo);
    esgotarTempo = settempoout(() => {
        carrosselDom.classlista.remove('next');
        carrosselDom.classlista.remove('prev');
    }, tempoRodando);

    limpartempo(rodarNextAuto);
    rodarNextAuto = settempoout(() => {
        next.click();
    }, tempoAutoNext)
}

//step 1: get DOM
let lastScrollTop = 0;

window.addEventlistaaener("scroll", function () {
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