let userText = document.querySelector(".user_text");

let names = localStorage.getItem("name");
let nameForm = document.querySelector("#name_form");
let submit = document.querySelector(".submit");

window.addEventListener("load", () => {
    if (names == null) {
        userText.textContent = "Привет Аноним!";
    } else {
        userText.textContent = `Привет ${names}!`;
    }
});

if (submit != null) {
    submit.addEventListener("click", () => {
        localStorage.setItem("name", nameForm.value); //<=====ПРоблема там не может найти прееменную
    });
}
//-----------------------------------------------------Карточка-----------------------------------------------

let progrmmElem = document.querySelectorAll(".progrmm_elem");
progrmmElem.forEach((i) =>
    i.addEventListener("mouseover", () => {
        console.log(i);
        i.style.background = "#68CDFF";
        i.children[1].style.background = "#E4F6FC";
        i.children[3].style.background = "#FDFDFD";
        i.children[3].children[0].style.color = "#68CDFF";
    })
);
progrmmElem.forEach((i) =>
    i.addEventListener("mouseout", () => {
        console.log(i);
        i.style.background = "white";
        i.children[1].style.background = "#BEE5F3";
        i.children[3].style.background = "#FB565A";
        i.children[3].children[0].style.color = "white";
    })
);
//--------------------------------------------------Навигация--------------------------------------------

let list = document.querySelectorAll(".list_li li a");
console.log(list);
function navigationMenu() {
    let path = document.location.href.replace(
        /https:\/\/.+\/|http:\/\/.+\//g,
        ""
    );
    path = path.replace(/\.\D+$/g, "");
    console.log("asdsd", path);

    for (const iterator of list) {
        if (iterator.id == path) {
            console.log("asdsd");
            iterator.classList.add("list_li_active");
        } else {
            iterator.classList.remove("list_li_active");
        }
    }
}
navigationMenu();
//++++++++++++++++++++++++++++++++++++++++Бургер+++++++++++++++++++++++++++++

let burgerMenu = document.querySelector(".burger-menu");
let menuBurger = document.querySelector(".menu-burgger ");

burgerMenu.addEventListener("click", () => {
    burgerMenu.children[0].classList.toggle("active-1");
    burgerMenu.children[1].classList.toggle("active-2");
    burgerMenu.children[2].classList.toggle("active-3");
    menuBurger.classList.toggle("active-menu");
    console.log(burgerMenu.children);
});

//-=----------------------------------------Навигационная цепочка----------------------------------
let navigatioData = [
    "Главная",
    "Каталог",
    "Телефоны",
    "Каталог > Телефоны > iPhone 6",
    "Каталог > Телефоны > iPhone 5",
    "Каталог > Телефоны > iPhone 4",
    "Каталог > Телефоны > Аксессуары",
    "Планшеты",
    "Каталог > Планшеты > iPad Air",
    "Каталог > Планшеты > iPad Mini",
    "Каталог > Планшеты > Аксессуары",
    "Планшеты",
    "Каталог > Ноутбуки > Macbook Air",
    "Каталог > Ноутбуки > Macbook Pro",
    "Каталог > Ноутбуки > Аксессуары",
    "О компании",
];
let breadcrumInput = document.querySelector("#breadcrums_input");
let breadcrumsRes = document.querySelector(".breadcrums_result");
let breadcrumsBtn = document.querySelector(".breadcrums_btn");

if (breadcrumsBtn != null) {
    breadcrumsBtn.addEventListener("click", () => {
        if (typeof +breadcrumInput.value == "number") {
            breadcrumsRes.textContent =
                navigatioData[+breadcrumInput.value - 1];
        } else {
            breadcrumsRes.textContent = "Введите число";
        }
    });
}
