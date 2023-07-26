const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let counter = 0;
let slideWidth = 0;

// Slider geçişini sağlayan fonksiyon
function slide() {
  slider.style.transform = `translateX(${-slideWidth * counter}px)`;
}

// Sonraki slayta geçmek için olay dinleyicisi
nextBtn.addEventListener("click", () => {
  counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
  slide();
});

// Önceki slayta geçmek için olay dinleyicisi
prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slide();
});

// Sayfa yüklenirken ve tarayıcı boyutu değiştiğinde sliderı yeniden düzenle
window.addEventListener("resize", () => {
  slideWidth = sliderContainer.clientWidth / 5;
  slide();
});

// İlk yüklenmede ve tarayıcı boyutu değiştiğinde sliderı düzenle
window.addEventListener("load", () => {
  slideWidth = sliderContainer.clientWidth / 5;
  slide();
});
// IKINCI SLIDER
const sliderContainer2 = document.querySelector(".slider-container2");
const slider2 = document.querySelector(".slider2");
const slides2 = document.querySelectorAll(".slide2");
const prevBtn2 = document.querySelector(".prev-btn2");
const nextBtn2 = document.querySelector(".next-btn2");

let counter2 = 0;
let slideWidth2 = 0;

// Slider geçişini sağlayan fonksiyon
function slide2() {
  slider2.style.transform = `translateX(${-slideWidth2 * counter2}px)`;
}

// Sonraki slayta geçmek için olay dinleyicisi
nextBtn2.addEventListener("click", () => {
  counter2++;
  if (counter2 >= slides2.length) {
    counter2 = 0;
  }
  slide2();
});

// Önceki slayta geçmek için olay dinleyicisi
prevBtn2.addEventListener("click", () => {
  counter2--;
  if (counter2 < 0) {
    counter2 = slides2.length - 1;
  }
  slide2();
});

// Sayfa yüklenirken ve tarayıcı boyutu değiştiğinde sliderı yeniden düzenle
window.addEventListener("resize", () => {
  slideWidth2 = sliderContainer2.clientWidth / 5;
  slide2();
});

// İlk yüklenmede ve tarayıcı boyutu değiştiğinde sliderı düzenle
window.addEventListener("load", () => {
  slideWidth2 = sliderContainer2.clientWidth / 5;
  slide2();
});

const burgerButton = document.querySelector(".burger-button");

// Menüyü seçin
const menu = document.querySelector(".menu");

// Burger butonuna tıklanma olayını dinleyin
burgerButton.addEventListener("click", toggleMenu);

// Menüyü açma ve kapama işlemini yönetin
function toggleMenu() {
  menu.classList.toggle("active");
}

const login = document.getElementById("login");
const modalContainer = document.getElementById("modalContainer");
const closeModalButton = document.getElementById("closeModalButton");
const closeButton = document.querySelector(".close");

login.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    modalContainer.style.display = "none";
  }
});
