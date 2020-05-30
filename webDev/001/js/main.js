// * https://coursehunter.net/course/prakticheskiy-javascript
// !      Lessons #1 - #2:
// TODO:  Теория JS

// !      Lesson #3:
// TODO:  Функции! Первая программа

const btnShow = document.querySelector('#showModal'); // * Получили кнопку #showModal
const btnHide = document.querySelector('#hideModal'); // * Получили кнопку #hideModal

function show() {
  let modal = document.querySelector('.modal');
  modal.style.opacity = '1';
  modal.style.backgroundColor = 'pink';
  modal.style.borderRadius = '20px';
  modal.style.border = '5px';
}

function hide() {
  let modal = document.querySelector('.modal');
  modal.style.opacity = '0'
}

btnShow.onclick = show;
btnHide.onclick = hide;

// !      Lesson #4:
// TODO:  Оператор сравнения if

const userNum = document.querySelector('#userNum');
let randonNum = Math.round(Math.random() * 10);
console.log(randonNum);

document.querySelector('#btnNum').onclick = checkNum;

function checkNum() {
  let num = userNum.value;
  num = parseInt(num);
  console.log(num);
  if (isNaN(num)) {
    alert('Введите корректное число!');
  } else {
    if(num === randonNum) {
      alert('Вы угадали!!');
      location.reload();
    } else {
      alert('Пробуй еще!');
    }
  }
};

// !      Lesson #5:
// TODO:  DOM. Вывод на страницу
document.querySelector('#text').innerHTML = 'Bye!'
document.querySelector('.one span').innerHTML = 9999;

// !      Lesson #6:
// TODO:  DOM. Получение данных
document.querySelector('.data__push').onclick = function () {
  // * Получение данных с input type = text
  console.log(document.querySelector('.data__input').value);
  // * Получение данных с input type = password
  console.log(document.querySelector('.data__passInput').value);
  // * Получение данных с input type = range
  console.log(document.querySelector('.data__rangeInput').value);
  // * Получение данных с input type = data
  console.log(document.querySelector('.data__calendarInput').value);
  // * Получение данных с input type = color
  console.log(document.querySelector('.data__colorInput').value);
  // * Получение данных с input type = checkbox
  console.log(document.querySelector('#data__checkboxInput').checked);
  if (document.querySelector('#data__checkboxInput').checked) {
    console.log('Yessss!')
  } else {
    console.log('Nooooo!')
  }
};

// !      Lesson #7:
// TODO:  DOM. Получение данных
document.querySelector('.array__push').onclick = function () {
  // * Получение данных с input = radio
  let radio = document.querySelectorAll('.data__radioInput');
  console.log(radio);
}
