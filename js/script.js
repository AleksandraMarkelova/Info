//создание переменной. путь поиска элемента в доке
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const body = document.querySelector("body");
const navLogo = document.querySelector(".nav__logo");
const navLinksAll = document.querySelectorAll(".nav__links a");

const formWrapper = document.querySelector(".form-wrapper");
const iframe = document.querySelector("iframe");

//функции, которые выполняются при нажатии
hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active"); //смена класса
    navLinks.classList.toggle("nav__links_active");
    body.classList.toggle("no-scroll");
}

navLogo.onclick = function () {
    hamburger.classList.remove("hamburger_active"); //убрать класс
    navLinks.classList.remove("nav__links_active");
    body.classList.remove("no-scroll");
}
//создание цикла для i,,,, i++ = i=i+1
for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburger.classList.remove("hamburger_active");
        navLinks.classList.remove("nav__links_active");
        body.classList.remove("no-scroll");
    }
}


iframe.onload = function () {
    formWrapper.classList.add("form-wrapper_active");
    setTimeout(() => {
        document.querySelector("form").reset();
        formWrapper.classList.remove("form-wrapper_active");
    }, 3000); //3000 = 3s
}