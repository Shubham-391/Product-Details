let icon = document.querySelector(".icon");
let view = document.querySelector(".view");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let number = document.querySelector(".number");
let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");

const change = src => {
    document.getElementById('main').src = src;
};
add.addEventListener("click", function () {
    if (number.innerHTML < 50) {
        number.innerHTML = +number.innerHTML + 1;
    }
});
subtract.addEventListener("click", function () {
    if (number.innerHTML > 1) {
        number.innerHTML = +number.innerHTML - 1;
    }
});

let preloader = setTimeout(remove, 3000);

function remove() {
    document.getElementById("preloader").classList.remove("d-flex");
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").classList.remove("d-none");
}

function navbar() {
    view.classList.toggle("end-0");
    span1.classList.toggle("crossLine1");
    span2.classList.toggle("crossLine2");
    span3.classList.toggle("d-none");
    document.querySelector("body").classList.toggle("overflow-hidden");
}

function navbar2() {
    view.classList.toggle("end-0");
    span1.classList.toggle("crossLine1");
    span2.classList.toggle("crossLine2");
    span3.classList.toggle("d-none");
    document.querySelector("body").classList.remove("overflow-hidden");
}

function openTab(evt, Id) {
    let i = null;
    let tabContent = document.querySelectorAll(".tabContent");
    let tabLabel = document.querySelectorAll(".tabLabel");
    tabContent.forEach(function (item) {
        item.style.display = 'none';
    });
    tabLabel.forEach(function (item2) {
        item2.classList.remove("tabLabelActive");
    });
    document.getElementById(Id).style.display = "block";
    evt.currentTarget.className += " tabLabelActive";
}
document.getElementById("defaultOpen").click();

let backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};