// スクロール
const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll",function() {
  for (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .9
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})


// nav
const parent = document.querySelectorAll(".has-sub");

  const node = Array.prototype.slice.call(parent, 0);

  node.forEach(function (element) {
    element.addEventListener(
      "mouseover",
      function () {
        element.querySelector(".sub").classList.add("active");
      },
      false
    );
    element.addEventListener(
      "mouseout",
      function () {
        element.querySelector(".sub").classList.remove("active");
      },
      false
    );
  });


// スライダー
const swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 4000,
  },
  
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});