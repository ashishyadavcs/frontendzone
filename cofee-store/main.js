//navbar js

const header = document.querySelector("header");
const menuicon = header.querySelector(".menu");
menuicon.onclick = () => {
    header.classList.toggle("active");
};

//carousel js
var swiper = new Swiper(".swiper", {
    autoplay: {
        delay: 2000,
    },
    centeredSlides: true,
    loop: true,
    spaceBetween: 100,
    navigation: {
        nextEl: ".swipe-next",
        prevEl: ".swipe-prev",
    },
});

//popup js
document.querySelectorAll(".btn").forEach(b => {
    b.onclick = e => {
        e.stopPropagation();
        b.style.display = "block";
    };
});

//popup js
const popup = document.querySelector(".popup");
const closeicon = popup.querySelector('.close');
console.log(closeicon)
closeicon.onclick = () => document.body.classList.remove("popup-active");

const openPopup = () => {
    document.body.classList.add("popup-active");
};
//after 5 sec post pageload
document.querySelector(".banner .btn").onclick = openPopup;
window.onload = () => {
    setTimeout(() => {
        openPopup();
    }, 5000);
};
//close on outclick
document.body.onclick = e => {
    if (e.target == document.querySelector(".banner .btn")) return;
    if (!e.target.closest(".popup")) {
        e.currentTarget.classList.remove("popup-active");
    }
};
