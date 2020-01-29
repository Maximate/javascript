/*import LunchMenu from '../src/sodexo_day_example.json';
// Test
console.log('lunch menu object', LunchMenu);

const food = document.querySelector('.food');
const changeLang = document.querySelector('.changeLang');
const sortList = document.querySelector('.sortList');
const pickRandom = document.querySelector('.pickRandom');

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

*/

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lastResult2 = document.querySelector('.lastResult2');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

const automated = document.querySelector('.automated');
const amountField = document.querySelector('.amountField');

let guessCount = 1;
let resetButton;

let userGuess = 0;

let timeStart;

console.log(randomNumber);

function checkGuess() {
  /*let userGuess = Number(guessField.value);*/
  console.log(userGuess);
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
  console.log("Edellinen luku oli: " + randomNumber);
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
  console.log(randomNumber);
}

function autoSolve() {
  for (i=0;i<amountField.value;i++) {
    userGuess = 50;
    checkGuess();
    if (userGuess > randomNumber) {
      userGuess = 30;
      checkGuess();
      if (userGuess > randomNumber) {
        userGuess = 15;
        checkGuess();
        if (userGuess > randomNumber) {
          userGuess = 8;
          checkGuess();
          if (userGuess > randomNumber) {
            for(i=1;i<=randomNumber;i++) {
              userGuess = i;
              checkGuess();
            }
          } else {
              for(i=9;i<=randomNumber;i++) {
                userGuess = i;
                checkGuess();
              }
            }
        } else {
          userGuess = 23;
          checkGuess();
          if (userGuess > randomNumber) {
            for(i=16;i<=randomNumber;i++) {
              userGuess = i;
              checkGuess();
            }
          } else {
            for(i=24;i<=randomNumber;i++) {
              userGuess = i;
              checkGuess();
            }
          }
        }
      } else {
          userGuess = 40;
          checkGuess();
          if (userGuess < randomNumber) {
            userGuess = 45;
            checkGuess();
            if (userGuess < randomNumber) {
              for(i=46;i<=randomNumber;i++) {
                userGuess = i;
                checkGuess();
              }
            } else {
              for(i=41;i<=randomNumber;i++) {
                userGuess = i;
                checkGuess();
              }
            }
          } else {
            userGuess = 35;
            checkGuess();
            if (userGuess < randomNumber) {
              for(i=36;i<=randomNumber;i++) {
                userGuess = i;
                checkGuess();
              }
            } else {
              for(i=31;i<=randomNumber;i++) {
                userGuess = i;
                checkGuess();
              }
            }
          }
        }

    } else if (userGuess < randomNumber) {
      userGuess = 70;
      checkGuess();
      if (userGuess < randomNumber) {
        userGuess = 85;
        checkGuess();
        if (userGuess < randomNumber) {
          userGuess = 92;
          checkGuess();
          if (userGuess < randomNumber) {
            for(i=93;i<=randomNumber;i++) {
              userGuess = i;
              checkGuess();
            }
          } else {
            for(i=86;i<=randomNumber;i++) {
              userGuess = i;
              checkGuess();
          }
        }
        } else {
          userGuess = 77;
          checkGuess();
          if (userGuess < randomNumber) {
            for(i=78;i<=randomNumber;i++) {
              userGuess = i;
              checkGuess();
            }
          } else {
            for(i=70;i<=randomNumber;i++) {
              userGuess = i;
              checkGuess();
            }
          }
        }
      } else {
        userGuess = 60;
        checkGuess();
        if (userGuess < randomNumber) {
          userGuess = 65;
          checkGuess();
          if (userGuess < randomNumber) {
            for(i=66;i<=randomNumber;i++) {
              userGuess = i;
              checkGuess();
            }
        } else {
          for(i=61;i<=randomNumber;i++) {
            userGuess = i;
            checkGuess();
          }
        }
        } else {
          userGuess = 55;
          checkGuess();
          if (userGuess < randomNumber) {
            for(i=56;i<=randomNumber;i++) {
              userGuess = i;
              checkGuess();
            }
          } else {
            for(i=51;i<=randomNumber;i++) {
              userGuess = i;
              checkGuess();
            }
          }
        }
      }
    }
  }
}

automated.addEventListener('click', autoSolve);
