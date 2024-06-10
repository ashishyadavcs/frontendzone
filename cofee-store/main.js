const header = document.querySelector("header");
const menuicon = header.querySelector(".menu");
menuicon.onclick = () => {
    header.classList.toggle("active");
};

var swiper = new Swiper(".swiper", {
    autoplay: {
        delay: 2000,
    },
    centeredSlides:true,
    loop: true,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swipe-next',
        prevEl: '.swipe-prev',
      },
});
