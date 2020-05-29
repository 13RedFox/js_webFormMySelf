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