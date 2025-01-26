const images = ['gallows-0.png', 'gallows-1.png', 'gallows-2.png', 'gallows-3.png', 'gallows-4.png', 'gallows-5.png', 'gallows-6.png'];

const data = [
    ["What is the hardest natural substance on Earth?", "diamond"],

    ["What is the name of the longest river in the world?", "nile"],

    ["What shape has three sides?", "triangle"],

    ["We asking about the place using...?", "where"],

    ["What beverage is made from roasted beans (often enjoyed hot)?", "coffee"],

    ["What is the smallest unit of life?", "cell"],

    ["What is the tallest mountain in the world?", "everest"],

    ["What is the name of the fairy in Peter Pan?", "tinkerbell"],

    ["What do you call a baby dog?", "puppy"],

    ["What follows today?", "tomorrow"]
]



// Load Page

function gallowsContainerConstruct() {
    const gallowsContainer = document.createElement('div');
    gallowsContainer.classList.add('gallows-container');

    const gallowsImage = document.createElement('div');
    gallowsImage.classList.add('gallows-image');
    gallowsImage.setAttribute('id', 'gallows-image');

    const gameTitle = document.createElement('h1');
    gameTitle.classList.add('game-title');
    gameTitle.innerText = 'hangman game';

    gallowsContainer.append(gallowsImage);
    gallowsContainer.append(gameTitle);

    return gallowsContainer;
}

function createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < letters.length; i++) {
        const button = document.createElement('button');
        button.classList.add('keyboard-key');
        button.innerText = letters[i];
        keyboard.append(button);
    }

    return keyboard;
}

function keyboardContainerConstruct() {
    const keyboardContainer = document.createElement('div');
    keyboardContainer.classList.add('keyboard-container');


    const wordContainer = document.createElement('div');
    wordContainer.classList.add('word');


    const hintContainer = document.createElement('div');
    hintContainer.classList.add('hint-container');

    const hintTitle = document.createElement('span');
    hintTitle.classList.add('hint-title');

    const guessesTitle = document.createElement('span');
    guessesTitle.classList.add('guesses-title');
    guessesTitle.innerText = 'Incorrect guesses: ';

    const incorrectGuessesElem = document.createElement('span');
    incorrectGuessesElem.classList.add('incorrect-guesses');

    guessesTitle.append(incorrectGuessesElem);


    hintContainer.append(hintTitle);
    hintContainer.append(guessesTitle);


    keyboardContainer.append(wordContainer);
    keyboardContainer.append(hintContainer);
    keyboardContainer.append(createKeyboard());

    return keyboardContainer;
}

function createTemplate() {
    const hangmanContainer = document.createElement('div');
    hangmanContainer.classList.add('hangman-container');

    hangmanContainer.append(gallowsContainerConstruct());
    hangmanContainer.append(keyboardContainerConstruct());
    document.body.append(hangmanContainer);
}

function createModal() {
    const areaOutsideTheModal = document.createElement('div');
    areaOutsideTheModal.classList.add('area-outside-the-modal', 'area-outside-the-modal_disabled');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const congratsSpan = document.createElement('span');
    congratsSpan.classList.add('modal__congrats');

    const titleSpan = document.createElement('span');
    titleSpan.classList.add('modal__title');
    titleSpan.innerHTML = `Secret word is: <span class="modal__word">bicycle</span>`;

    const button = document.createElement('button');
    button.classList.add('modal__button');
    button.textContent = 'play again';

    modal.appendChild(congratsSpan);
    modal.appendChild(titleSpan);
    modal.appendChild(button);

    areaOutsideTheModal.appendChild(modal);

    document.body.appendChild(areaOutsideTheModal);
}

createTemplate();
createModal();




// DOM Variables

const modalWindow = document.querySelector('.area-outside-the-modal');
const modalCongratsMessage = document.querySelector('.modal__congrats');
const modalWord = document.querySelector('.modal__word');
const playAgainButton = document.querySelector('.modal__button');
const questionHint = document.querySelector('.hint-title');
const incorrectGuesses = document.querySelector('.incorrect-guesses');
const wordContainer = document.querySelector('.word');
const keyboardContainer = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.keyboard-key');
const gallowsImage = document.getElementById('gallows-image');



// Functionality Variables

let previousRandomInteger = null;
let incorrectGuessesCounter = 0;
let question;
let answer;
const arrayOfPressedButtons = [];
const arrayOfUnderscore = [];
let arrayOfWordLetters = [];



// Functionality

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function handleKeyboardClick(event) {
    if (event.target.classList.contains('keyboard-key')) {
        let key = event.target.innerText.toUpperCase();

        requestAnimationFrame(() => {
            event.target.classList.add('button_pressed');
        })

        if (!arrayOfPressedButtons.includes(key)) {
            arrayOfPressedButtons.push(key);
            guessTheLetter(key);
        }
    }
}

function handleKeydown(event) {
    let key = event.key.toUpperCase();

    keys.forEach((but) => {
        if (key === but.innerText) {
            but.classList.add('button_pressed');
        }
    })

    if (!arrayOfPressedButtons.includes(key) && /^[A-Z]$/.test(key)) {
        arrayOfPressedButtons.push(key);
        guessTheLetter(key);
    }
}

function enableEventListeners() {
    keyboardContainer.addEventListener('click', handleKeyboardClick);
    window.addEventListener('keydown', handleKeydown);
}

function disableEventListeners() {
    keyboardContainer.removeEventListener('click', handleKeyboardClick);
    window.removeEventListener('keydown', handleKeydown);
}

function clearWordContainer() {
    wordContainer.innerHTML = '';
}

function fillWordContainer() {
    clearWordContainer();

    arrayOfUnderscore.forEach(e => {
        const spanLetter = document.createElement('span');
        spanLetter.classList.add('letter');
        spanLetter.innerHTML = e;
        wordContainer.append(spanLetter);
    })
}

function incorrectGuessesConstructor() {
    incorrectGuesses.innerHTML = '';
    incorrectGuesses.innerHTML = `${incorrectGuessesCounter} / 6`;
    gallowsImage.style.backgroundImage = `url("/hmtask/sobdima-JSFEEN2024Q4/hangman/assets/${images[incorrectGuessesCounter]}")`;
}

function guessTheLetter(elem) {

    const arrayOfGuessedIndexes = [];

    if (!arrayOfWordLetters.includes(arrayOfPressedButtons[arrayOfPressedButtons.length - 1])) {
        incorrectGuessesCounter += 1;
        incorrectGuessesConstructor();
    }

    if (incorrectGuessesCounter > 5) {
        gameEndLose();
    } else {
        arrayOfWordLetters.forEach((letter, index) => {
            if (letter === elem) {
                arrayOfGuessedIndexes.push(index);
            }
        });

        if (!arrayOfUnderscore.includes(elem)) {
            arrayOfGuessedIndexes.forEach((i) => {
                arrayOfUnderscore[i] = elem;
            })
        }

        fillWordContainer();
        gameEndWin();
    }
}

function gameEndWin() {
    setTimeout(() => {
        if (!arrayOfUnderscore.includes('_')) {
            modalWindow.classList.remove('area-outside-the-modal_disabled');
            modalWindow.classList.add('area-outside-the-modal_enabled');
            modalCongratsMessage.innerHTML = 'you win !'
            modalCongratsMessage.classList.remove('modal__congrats_red');
            modalWord.innerHTML = answer;
            disableEventListeners();
        }
    }, 400)
}

function gameEndLose() {
    setTimeout(() => {
        modalWindow.classList.remove('area-outside-the-modal_disabled');
        modalWindow.classList.add('area-outside-the-modal_enabled');
        modalCongratsMessage.classList.add('modal__congrats_red');
        modalCongratsMessage.innerHTML = 'you lose !'
        modalWord.innerHTML = answer;
        disableEventListeners();
    }, 400)
}

function startNewGame() {
    let randomInteger;
    do {
        randomInteger = getRandomInt(data.length);
    } while (randomInteger === previousRandomInteger);

    previousRandomInteger = randomInteger;

    question = data[randomInteger][0];
    answer = data[randomInteger][1];

    questionHint.innerHTML = `Hint: ${question}`;

    keys.forEach((but) => {
        but.classList.remove('button_pressed');
    });

    incorrectGuessesCounter = 0;
    incorrectGuesses.innerHTML = '0 / 6';
    gallowsImage.style.backgroundImage = `url("/hmtask/sobdima-JSFEEN2024Q4/hangman/assets/${images[incorrectGuessesCounter]}")`;

    arrayOfPressedButtons.length = 0;
    arrayOfUnderscore.length = 0;
    arrayOfWordLetters = answer.split('').map(x => x.toUpperCase());
    arrayOfUnderscore.push(...new Array(arrayOfWordLetters.length).fill('_'));

    fillWordContainer();
    enableEventListeners();

    modalWindow.classList.add('area-outside-the-modal_disabled');
}

startNewGame();


playAgainButton.addEventListener('click', startNewGame);