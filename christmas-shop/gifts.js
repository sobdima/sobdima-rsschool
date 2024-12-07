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






// Implementation of the Category switching

const allTabsBtn = document.getElementById('all-tabs');
const workBtn = document.getElementById('for-work');
const healthBtn = document.getElementById('for-health');
const harmonyBtn = document.getElementById('for-harmony');
const cardsContainer = document.querySelector('.cards-container');
const arrayOfTabButtons = document.querySelectorAll('.tab');

fetch('./assets/data/gifts.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const cards = data;

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

        function loadCards(category) {
            clearCardsContainer();

            const filteredCards = cards.filter(card => card.category === category);

            filteredCards.forEach(card => createCardItem(card));

            arrayOfTabButtons.forEach(i => i.classList.remove('tab_active'));

            if (category === 'For Work') {
                workBtn.classList.add('tab_active');
            }
            if (category === 'For Health') {
                healthBtn.classList.add('tab_active');
            }
            if (category === 'For Harmony') {
                harmonyBtn.classList.add('tab_active');
            }
        }

        function loadAllCards() {
            clearCardsContainer();

            arrayOfTabButtons.forEach(i => i.classList.remove('tab_active'));

            allTabsBtn.classList.add('tab_active');

            cards.forEach(card => createCardItem(card));
        }

        allTabsBtn.addEventListener('click', () => loadAllCards());
        workBtn.addEventListener('click', () => loadCards('For Work'));
        healthBtn.addEventListener('click', () => loadCards('For Health'));
        harmonyBtn.addEventListener('click', () => loadCards('For Harmony'));

        loadAllCards();
    })
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});







// Implementation of the Button UP
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 500 && window.innerWidth <= 768) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
}








// Modal

const modalArea = document.querySelector('.area-outside-the-modal');
