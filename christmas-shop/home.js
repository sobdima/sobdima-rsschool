//Implementation of the burger menu

const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

function openCloseBurgerMenu() {
    burgerMenu.classList.toggle('burger-menu_visible');
    burgerButton.classList.toggle('burger_cross');
    document.body.classList.toggle('disable-scrolling');
}

function closeBurgerMenu() {
    burgerMenu.classList.remove('burger-menu_visible');
    burgerButton.classList.remove('burger_cross');
    document.body.classList.remove('disable-scrolling');
}

burgerButton.addEventListener("click", openCloseBurgerMenu);
burgerMenu.addEventListener("click", closeBurgerMenu);

window.addEventListener('resize', () => {
    if (window.innerWidth >= 769) {
        closeBurgerMenu();
    }
})






//Implementation of the Slider

const sliderButtonRight = document.getElementById('slider-button-right');
const sliderButtonLeft = document.getElementById('slider-button-left');
const sliderContainer = document.querySelector('.slider-container');

const firstSliderPosition = 0;
let currentSliderPosition = 0;
let distanceForOneClick = 0;
let arr = [];
let arrMaxLength;

window.addEventListener('resize', () => {
    sliderContainer.style.transform = `translateX(${firstSliderPosition}px)`;
    currentSliderPosition = 0;
    distanceForOneClick = 0;
    arr = [];
    arrMaxLength = 0;
    setSliderButtonToDefaultStatus();
})

function setDistanceForOneClickAndArrayLength() {
    if (window.innerWidth >= 768) {
        distanceForOneClick = (1993 - sliderContainer.offsetWidth) / 3;
        arrMaxLength = 3;
    } else {
        distanceForOneClick = (1993 - sliderContainer.offsetWidth) / 6;
        arrMaxLength = 6;
    }
}

sliderButtonRight.addEventListener('click', () => {

    setDistanceForOneClickAndArrayLength();

    if (arr.length < arrMaxLength) {
        currentSliderPosition = currentSliderPosition - distanceForOneClick;
        sliderContainer.style.transform = `translateX(${currentSliderPosition}px)`;
        arr.push(1);
    } else {
        return currentSliderPosition;
    }

    changeSliderButtonActivityStatus();
});

sliderButtonLeft.addEventListener('click', () => {

    if (arr.length <= 0) {
        return currentSliderPosition;
    } else {
        currentSliderPosition = currentSliderPosition + distanceForOneClick;
        sliderContainer.style.transform = `translateX(${currentSliderPosition}px)`;
        arr.pop();
    }

    changeSliderButtonActivityStatus();
});

function changeSliderButtonActivityStatus () {
    if (arr.length == 0) {
        sliderButtonLeft.classList.remove('active');
        sliderButtonLeft.classList.add('inactive');

        sliderButtonRight.classList.remove('inactive');
        sliderButtonRight.classList.add('active');
    }

    if (arr.length > 0 && arr.length < arrMaxLength) {
        sliderButtonLeft.classList.remove('inactive');
        sliderButtonLeft.classList.add('active');

        sliderButtonRight.classList.remove('inactive');
        sliderButtonRight.classList.add('active');
    }

    if (arr.length == arrMaxLength) {
        sliderButtonLeft.classList.remove('inactive');
        sliderButtonLeft.classList.add('active');

        sliderButtonRight.classList.remove('active');
        sliderButtonRight.classList.add('inactive');
    }
}

function setSliderButtonToDefaultStatus () {
    sliderButtonLeft.classList.remove('active');
    sliderButtonLeft.classList.add('inactive');

    sliderButtonRight.classList.remove('inactive');
    sliderButtonRight.classList.add('active');
}






/* const timerDays = document.getElementById('days');
const timerSeconds = document.getElementById('seconds');

const targetDate = new Date('2025-01-01T00:00:00Z');
const nowDate = Date.now();

const timeDiff = targetDate - nowDate;

console.log('targetDate = ', targetDate);
console.log('Convert targetDate to UTC = ', targetDate.toUTCString());

const msInSecond = 1000;
const msInMinute = msInSecond * 60;
const msInHour = msInMinute * 60;
const msInDay = msInHour * 24;

const days = Math.floor(timeDiff / msInDay);
console.log('days left', days);
const remainingAfterDays = timeDiff % msInDay;


const hours = Math.floor(remainingAfterDays / msInHour);
console.log('hours left', hours)
const remainingAfterHours = remainingAfterDays % msInHour;


const minutes = Math.floor(remainingAfterHours / msInMinute);
console.log('minutes left', minutes)
const remainingAfterMinutes = remainingAfterHours % msInMinute;


const seconds = Math.floor(remainingAfterMinutes / msInSecond);
console.log('seconds left', seconds)

timerDays.textContent = days;
timerSeconds.textContent = seconds; */