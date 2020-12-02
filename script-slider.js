// SELECT CAROUSEL
const carousel = document.querySelector(".products-wrapper");

// SELECT ALL THE SLIDES INSIDE THE CAROUSEL- tworze tablice z wszystkich dzieci slajdów
const slides = [...carousel.children];

// SELECT NEXT BUTTON
const nextButton = document.querySelector(".right-btn");

// SELECT LEFT BUTTON
const previousButton = document.querySelector(".left-btn");

// CALCULATE THE SLIDE WIDTH

let slideWidth = slides[0].getBoundingClientRect().width;

// POSITION THE SLIDES HORIZONTALY -> transformacja w lewo przesuniecie dla każdego slajdu
function positionSlides(slides) {
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.left = slideWidth * index + 110 * index + "px";
    }
}

let currentItem = 0;

positionSlides(slides);

// ON RIGHT BUTTON CLICK, WE MOVE(TranslateX) THE CAROUSEL TO THE LEFT
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

// ON LEFT BUTTON CLICK, WE MOVE(TranslateX) THE CAROUSEL TO THE RIGHT
previousButton.addEventListener("click", function () {
    const currentSlide = carousel.querySelector(".active");
    const previousSlide = currentSlide.previousElementSibling;
    const position = previousSlide.style.left;
    carousel.style.transform = `translateX(-${position})`;
    currentSlide.classList.remove('active');
    previousSlide.classList.add('active');
});




