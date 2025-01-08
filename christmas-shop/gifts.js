// Implementation of the burger menu

const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerLinks = document.querySelectorAll('.burger-menu a');

function openCloseBurgerMenu() {
    burgerMenu.classList.toggle('burger-menu_visible');
    burgerButton.classList.toggle('burger_cross');
    //document.documentElement.style.overflowY = 'hidden';
    document.documentElement.classList.toggle('disable-scrolling');
}

function closeBurgerMenu() {
    burgerMenu.classList.remove('burger-menu_visible');
    burgerButton.classList.remove('burger_cross');
    //document.documentElement.style.overflowY = 'auto';
    document.documentElement.classList.remove('disable-scrolling');
}

burgerButton.addEventListener("click", openCloseBurgerMenu);
burgerMenu.addEventListener("click", closeBurgerMenu);

burgerLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetLocation = link.getAttribute('href');
        closeBurgerMenu();
        setTimeout(() => {
            window.location.href = targetLocation;
        }, 500);
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 769) {
        closeBurgerMenu();
    }
})






// Implementation of the Category switching & Modal Window

const allTabsBtn = document.getElementById('all-tabs');
const workBtn = document.getElementById('for-work');
const healthBtn = document.getElementById('for-health');
const harmonyBtn = document.getElementById('for-harmony');
const cardsContainer = document.querySelector('.cards-container');
const arrayOfTabButtons = document.querySelectorAll('.tab');
const backgroundOfModal = document.querySelector('.area-outside-the-modal');
const modalCloseButton = document.querySelector('.modal__close-button');

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

            blockItem.addEventListener('click', () => {
                const cardName = blockItem.querySelector('.card__header').textContent;
                loadModalWindow(cardName);
            });

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





        function clearModalContainer() {
            backgroundOfModal.innerHTML = '';
        }

        function createModalItem(modal) {
            const modalItem = document.createElement('div');
            modalItem.classList.add('modal');

            modalItem.innerHTML = `
                <div class="modal__image-container modal__image-${modal.color}"></div>
                <div class="modal__label">
                    <div class="modal__header-container">
                        <span class="modal__tag  modal__tag_${modal.color}">${modal.category}</span>
                        <h3 class="modal__header">${modal.name}</h3>
                        <span class="modal__description">${modal.description}</span>
                    </div>
                    <div class="modal__details-container">
                        <h4 class="modal__details-title">Adds superpowers to:</h4>
                        <div class="detail">
                            <span class="detail__title">Live</span>
                            <span class="detail__value">${modal.superpowers.live}</span>
                            <div class="detail__graphic-value-container">

                            </div>
                        </div>
                        <div class="detail">
                            <span class="detail__title">Create</span>
                            <span class="detail__value">${modal.superpowers.create}</span>
                            <div class="detail__graphic-value-container">

                            </div>
                        </div>
                        <div class="detail">
                            <span class="detail__title">Love</span>
                            <span class="detail__value">${modal.superpowers.love}</span>
                            <div class="detail__graphic-value-container">

                            </div>
                        </div>
                        <div class="detail">
                            <span class="detail__title">Dream</span>
                            <span class="detail__value">${modal.superpowers.dream}</span>
                            <div class="detail__graphic-value-container">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal__close-button"></div>
            `
            backgroundOfModal.appendChild(modalItem);

            const allSnowflakesContainers = document.querySelectorAll('.detail__graphic-value-container');
            const allDetailValues = document.querySelectorAll('.detail__value');

            for (let m = 0; m < allSnowflakesContainers.length; m++) {

                const count = (Number(allDetailValues[m].innerHTML) / 100);

                for (let i = 0; i < 5; i++) {
                    //console.log('i = ', i);
                    const elem = document.createElement('span');
                    elem.className = 'value-point';

                    if (i < count) {
                        elem.innerHTML = `
                            <svg width="13.78" height="16" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2942 14.8224L16.4727 14.3481L18.674 13.7583L18.3102 12.4006L14.7512 13.3542L13.0725 12.385C13.0957 12.26 13.1084 12.1315 13.1084 12C13.1084 11.8684 13.0957 11.7398 13.0725 11.6149L14.7512 10.6457L18.3102 11.5994L18.674 10.2416L16.4727 9.65177L17.2942 9.17747L20.8194 8.96588L21.3385 6.03095L18.5373 5.01305L16.5914 7.96016L15.7699 8.43446L16.3598 6.23317L15.002 5.86939L14.0484 9.42842L12.3687 10.3982C12.1741 10.2315 11.949 10.0997 11.7028 10.0124V8.0742L14.3082 5.46879L13.3143 4.47488L11.7028 6.08633V5.13772L13.2772 1.98876L11 0L8.72271 1.98886L10.2972 5.13782V6.08642L8.68569 4.47497L7.69178 5.46889L10.2971 8.0743V10.0125C10.051 10.0998 9.82588 10.2316 9.6312 10.3983L7.95154 9.42852L6.99792 5.86949L5.64018 6.23326L6.23003 8.43456L5.40854 7.96025L3.46269 5.01314L0.661484 6.03104L1.18058 8.96597L4.70578 9.17757L5.52727 9.65187L3.32597 10.2417L3.6898 11.5994L7.24882 10.6458L8.92746 11.615C8.90431 11.74 8.89157 11.8685 8.89157 12C8.89157 12.1316 8.90427 12.2602 8.92746 12.3851L7.24882 13.3543L3.6898 12.4006L3.32597 13.7584L5.52727 14.3482L4.70578 14.8225L1.18058 15.034L0.661484 17.969L3.46274 18.9869L5.40859 16.0397L6.23012 15.5654L5.64028 17.7667L6.99801 18.1306L7.95163 14.5715L9.6313 13.6018C9.82598 13.7684 10.0511 13.9003 10.2972 13.9875V15.9258L7.69187 18.5311L8.68579 19.525L10.2973 17.9135V18.8621L8.7228 22.0111L11.0001 24L13.2774 22.0111L11.7029 18.8621V17.9135L13.3144 19.525L14.3083 18.5311L11.7029 15.9258V13.9875C11.9491 13.9003 12.1742 13.7684 12.3689 13.6018L14.0485 14.5715L15.0022 18.1306L16.3599 17.7667L15.7701 15.5654L16.5916 16.0397L18.5374 18.9869L21.3387 17.969L20.8196 15.034L17.2942 14.8224Z" fill="#FF4646"/>
                            </svg>
                        `
                    } else {
                        elem.innerHTML = `
                            <svg width="13.78" height="16" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2942 14.8224L16.4727 14.3481L18.674 13.7583L18.3102 12.4006L14.7512 13.3542L13.0725 12.385C13.0957 12.26 13.1084 12.1315 13.1084 12C13.1084 11.8684 13.0957 11.7398 13.0725 11.6149L14.7512 10.6457L18.3102 11.5994L18.674 10.2416L16.4727 9.65177L17.2942 9.17747L20.8194 8.96588L21.3385 6.03095L18.5373 5.01305L16.5914 7.96016L15.7699 8.43446L16.3598 6.23317L15.002 5.86939L14.0484 9.42842L12.3687 10.3982C12.1741 10.2315 11.949 10.0997 11.7028 10.0124V8.0742L14.3082 5.46879L13.3143 4.47488L11.7028 6.08633V5.13772L13.2772 1.98876L11 0L8.72271 1.98886L10.2972 5.13782V6.08642L8.68569 4.47497L7.69178 5.46889L10.2971 8.0743V10.0125C10.051 10.0998 9.82588 10.2316 9.6312 10.3983L7.95154 9.42852L6.99792 5.86949L5.64018 6.23326L6.23003 8.43456L5.40854 7.96025L3.46269 5.01314L0.661484 6.03104L1.18058 8.96597L4.70578 9.17757L5.52727 9.65187L3.32597 10.2417L3.6898 11.5994L7.24882 10.6458L8.92746 11.615C8.90431 11.74 8.89157 11.8685 8.89157 12C8.89157 12.1316 8.90427 12.2602 8.92746 12.3851L7.24882 13.3543L3.6898 12.4006L3.32597 13.7584L5.52727 14.3482L4.70578 14.8225L1.18058 15.034L0.661484 17.969L3.46274 18.9869L5.40859 16.0397L6.23012 15.5654L5.64028 17.7667L6.99801 18.1306L7.95163 14.5715L9.6313 13.6018C9.82598 13.7684 10.0511 13.9003 10.2972 13.9875V15.9258L7.69187 18.5311L8.68579 19.525L10.2973 17.9135V18.8621L8.7228 22.0111L11.0001 24L13.2774 22.0111L11.7029 18.8621V17.9135L13.3144 19.525L14.3083 18.5311L11.7029 15.9258V13.9875C11.9491 13.9003 12.1742 13.7684 12.3689 13.6018L14.0485 14.5715L15.0022 18.1306L16.3599 17.7667L15.7701 15.5654L16.5916 16.0397L18.5374 18.9869L21.3387 17.969L20.8196 15.034L17.2942 14.8224Z" fill="#FF46461A"/>
                            </svg>
                        `
                    }
                    allSnowflakesContainers[m].appendChild(elem);
                }
            }
        }

        function loadModalWindow(modalHeader) {
            clearModalContainer();
            const filteredModal = cards.filter(modal => modal.name === modalHeader);
            filteredModal.forEach(modal => createModalItem(modal));
            backgroundOfModal.style.display = 'block';
            document.body.classList.toggle('disable-scrolling');
        }

        function closeModalWindow(e) {
            let classes = e.target.classList;
            if (classes.contains('area-outside-the-modal') || classes.contains('modal__close-button')) {
                backgroundOfModal.style.display = 'none';
                document.body.classList.toggle('disable-scrolling');
            }
        }

        modalCloseButton.addEventListener('click', closeModalWindow);
        backgroundOfModal.addEventListener('click', closeModalWindow);
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

window.addEventListener('resize', () => {
    if (document.documentElement.scrollTop > 500 && window.innerWidth <= 768) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
})