import LunchMenu from '../src/sodexo_day_example.json';
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
