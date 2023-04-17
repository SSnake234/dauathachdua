 // reveal function
 const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});
const hiddenElem = document.querySelectorAll(".hidden");
hiddenElem.forEach((el) => observer.observe(el));

// hacking function

const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";

let interval = null;

const hackingFunc = (event) => {
  let iteration = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

document.querySelector("#cac").ontransitionstart = hackingFunc;
document.querySelector("#cac").onmouseover = hackingFunc;

// SwiperJS

var swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 25,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      850:{
          slidesPerView: 2,
      },
      1200: {
          slidesPerView: 3,
      },
  },
});

//Expand pictures

const imgs = document.querySelectorAll('.expand');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});