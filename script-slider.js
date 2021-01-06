const carousel = document.querySelector(".products-wrapper");
const slides = [...carousel.children];
const nextButton = document.querySelector(".right-btn");
const previousButton = document.querySelector(".left-btn");
let slideWidth = slides[0].getBoundingClientRect().width;

function positionSlides(slides) {
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.left = slideWidth * index + 110 * index + "px";
    }
}

let currentItem = 0;
positionSlides(slides);
nextButton.addEventListener("click", function () {
    const currentSlide = carousel.querySelector(".active");
    let nextSlide;
    if (currentItem === 4) {
        currentItem = 0;
        nextSlide = carousel.querySelector(".firstItem");
    } else {
        nextSlide = currentSlide.nextElementSibling;
    }
    const position = nextSlide.style.left;
    carousel.style.transform = `translateX(-${position})`;
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
    currentItem++;
});

previousButton.addEventListener("click", function () {
    const currentSlide = carousel.querySelector(".active");
    const previousSlide = currentSlide.previousElementSibling;
    const position = previousSlide.style.left;
    carousel.style.transform = `translateX(-${position})`;
    currentSlide.classList.remove('active');
    previousSlide.classList.add('active');
});




