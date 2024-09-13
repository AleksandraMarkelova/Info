//создание переменной. путь поиска элемента в доке
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const body = document.querySelector("body");
const navLogo = document.querySelector(".nav__logo");
const navLinksAll = document.querySelectorAll(".nav__links a");

const formWrapper = document.querySelector(".form-wrapper");
const iframe = document.querySelector("iframe");

const tokenTg = "7410894748:AAFjFIfnmjYzpqMCw6PDJ7v92X5ISO1QsQQ";

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
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const comment = document.querySelector("#comment").value;

        document.querySelector("form").reset();
        formWrapper.classList.remove("form-wrapper_active");

        const massageText = `Новая заявка с сайта!😎\nИмя: ${name}\nПочта: ${email}\nКомментарий: ${comment}`;
        const url = `https://api.telegram.org/bot${tokenTg}/sendMessage`;
        console.log(url);
        
        const params = {
            chat_id: "5936580666",
            text: massageText,
        }

        axios.post(url, params) // .post(куда, что)
            .then(response => {
                console.log("Успешно!");
            })
            .catch(error => {
                console.log("Ошибка :(");
            })
            return false
            // Return false - чтобы страничка не перезагружалась
    }, 3000); //3000 = 3s
}


