/* const randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lastResult2 = document.querySelector('.lastResult2');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

let timeStart;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
    timeStart = Date.now();
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    let timeEnd = Date.now() - timeStart;
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult2.textContent = 'Guesses: '+guessCount+', Time: '+(timeEnd/1000)+' sec';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
} */

const food = document.querySelector('.food');
const changeLang = document.querySelector('.changeLang');
const sortList = document.querySelector('.sortList');
const pickRandom = document.querySelector('.pickRandom');

const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

let a = 0;
food.textContent = coursesFi;

function langChange() {
  if (a===0) {
  food.textContent = coursesEn;
  a = 1;
  } else if (a===1) {
    food.textContent = coursesFi;
    a = 0;
  }
}

function listSorting() {
    food.textContent = coursesEn.sort();
    food.textContent = coursesFi.sort();
}

function randomPick() {
  let randomEn = coursesEn[Math.floor(Math.random() * coursesEn.length)];
  let randomFi = coursesFi[Math.floor(Math.random() * coursesFi.length)];

  if (a===1) {
  food.textContent = randomEn;
  } else if (a===0) {
    food.textContent = randomFi;
  }
}

changeLang.addEventListener('click', langChange);
sortList.addEventListener('click', listSorting);
pickRandom.addEventListener('click', randomPick);
