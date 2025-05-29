const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');
const slidesLength = rightSide.querySelectorAll('div').length;

// First slide
let currentSlide = 1; // slidesLength = 4
leftSide.style.top = `${-(slidesLength - currentSlide) * 100}%`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
    if (direction === 'up') {
        if (currentSlide === slidesLength) {
            currentSlide = 0;
        }
        currentSlide += 1;
    } else {
        currentSlide -= 1;
        if (currentSlide === 0) {
            currentSlide = slidesLength;
        }
    }

    leftSide.style.top = `${-(slidesLength - currentSlide) * 100}%`;
    rightSide.style.top = `${-(currentSlide - 1) * 100}%`;
}
