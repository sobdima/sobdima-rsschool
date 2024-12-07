// Implementation of the burger menu

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






// Implementation of the Slider

const sliderButtonRight = document.getElementById('slider-button-right');
const sliderButtonLeft = document.getElementById('slider-button-left');
const sliderContainer = document.querySelector('.slider-container');

const firstSliderPosition = 0;
let currentSliderPosition = 0;
let distanceForOneClick = 0;
let arrayOfFourRandomNumbers = [];
let arrMaxLength;

window.addEventListener('resize', () => {
    sliderContainer.style.transform = `translateX(${firstSliderPosition}px)`;
    currentSliderPosition = 0;
    distanceForOneClick = 0;
    arrayOfFourRandomNumbers = [];
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

    if (arrayOfFourRandomNumbers.length < arrMaxLength) {
        currentSliderPosition = currentSliderPosition - distanceForOneClick;
        sliderContainer.style.transform = `translateX(${currentSliderPosition}px)`;
        arrayOfFourRandomNumbers.push(1);
    } else {
        return currentSliderPosition;
    }

    changeSliderButtonActivityStatus();
});

sliderButtonLeft.addEventListener('click', () => {

    if (arrayOfFourRandomNumbers.length <= 0) {
        return currentSliderPosition;
    } else {
        currentSliderPosition = currentSliderPosition + distanceForOneClick;
        sliderContainer.style.transform = `translateX(${currentSliderPosition}px)`;
        arrayOfFourRandomNumbers.pop();
    }

    changeSliderButtonActivityStatus();
});

function changeSliderButtonActivityStatus () {
    if (arrayOfFourRandomNumbers.length == 0) {
        sliderButtonLeft.classList.remove('active');
        sliderButtonLeft.classList.add('inactive');

        sliderButtonRight.classList.remove('inactive');
        sliderButtonRight.classList.add('active');
    }

    if (arrayOfFourRandomNumbers.length > 0 && arrayOfFourRandomNumbers.length < arrMaxLength) {
        sliderButtonLeft.classList.remove('inactive');
        sliderButtonLeft.classList.add('active');

        sliderButtonRight.classList.remove('inactive');
        sliderButtonRight.classList.add('active');
    }

    if (arrayOfFourRandomNumbers.length == arrMaxLength) {
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





// Implementation of the Timer

const timerDays = document.getElementById('days');
const timerHours = document.getElementById('hours');
const timerMinutes = document.getElementById('minutes');
const timerSeconds = document.getElementById('seconds');

const msInSecond = 1000;
const msInMinute = msInSecond * 60;
const msInHour = msInMinute * 60;
const msInDay = msInHour * 24;

function updateTimer() {

    const targetDate = new Date('January 1, 2025 00:00:00 GMT+00:00');
    const nowDate = new Date();
    const timeDiff = targetDate - nowDate;

    if (timeDiff <= 0) {
        timerDays.textContent = 0;
        timerHours.textContent = 0;
        timerMinutes.textContent = 0;
        timerSeconds.textContent = 0;
        return;
    }

    const days = Math.floor(timeDiff / msInDay);
    const remainingAfterDays = timeDiff % msInDay;

    const hours = Math.floor(remainingAfterDays / msInHour);
    const remainingAfterHours = remainingAfterDays % msInHour;

    const minutes = Math.floor(remainingAfterHours / msInMinute);
    const remainingAfterMinutes = remainingAfterHours % msInMinute;

    const seconds = Math.floor(remainingAfterMinutes / msInSecond);

    timerDays.textContent = days;
    timerHours.textContent = hours;
    timerMinutes.textContent = minutes;
    timerSeconds.textContent = seconds;

}

setInterval(updateTimer, 1000);
updateTimer();








// 4 random cards are displayed in the block Best Gifts

const cardsContainer = document.querySelector('.cards-container');

fetch('./assets/data/gifts.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const cards = data;
        const arrayOfFourRandomNumbers = [];
        const randomFourCards = [];

        function clearCardsContainer() {
            cardsContainer.innerHTML = '';
        }

        function createCardItem(card) {
            const blockItem = document.createElement('div');
            blockItem.classList.add('card');

            blockItem.innerHTML = `
                <img src="${card.image}" alt="${card.name}">
                <div class="card__label">
                    <span class="card__tag  card__tag_${card.color}">${card.category}</span>
                    <h3 class="card__header">${card.name}</h3>
                </div>
            `;

            cardsContainer.appendChild(blockItem);
        }

        function fillArrayOfFourRandomNumbers() {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }

            while (arrayOfFourRandomNumbers.length < 4) {
                let i = getRandomInt(36);

                if (arrayOfFourRandomNumbers.indexOf(i) == -1) {
                    arrayOfFourRandomNumbers.push(i)
                }
            }
        }

        fillArrayOfFourRandomNumbers();

        clearCardsContainer();

        arrayOfFourRandomNumbers.forEach( i => {
            randomFourCards.push(cards[i])
        })

        randomFourCards.forEach(i => {
            createCardItem(i);
        })
    })
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});