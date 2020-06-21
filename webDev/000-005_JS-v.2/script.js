'use strict';

// ! #1 Стартуем и пишем первую программу
// console.log('Hello');
// console.log(`Helo world`);

// const title = document.querySelector('.title'),
//       text = document.querySelector('.text');

// title.innerHTML = 'Oooops. Edited my first title'; // ? Заменяет контент внутри тега элемента!
// text.innerHTML = '<b>Bold</b> Text'; // ? Позволяет работать и с тегами в том числе.

// ! #2 Основы ввода данных
// const inputIn = document.querySelector('.input-in'),
//       btn = document.querySelector('button'),
//       out = document.querySelector('.out');

// btn.onclick = function () {
//   let b = +inputIn.value;
//   out.innerHTML = b;
//   inputIn.value = '';
// };

// TODO Практические задания!
// * Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
// * Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
// * Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.

// const a = 7,
//       b = 9,
//       c = a,
//       d = b,
//       e = 3,
//       f = 5;

// console.log(a * b);
// console.log(c / d);
// console.log(e + f);

// ! #3 Оператор If, else, switch case - выбор в JavaScript

// const btn = document.querySelector('button'),
//       inputAge = document.querySelector('.age'),
//       out = document.querySelector('.out');

// btn.onclick = () => {
//   let num = +inputAge.value;

//   if (num >= 16 && num < 60) {
//     console.log('Welcome!');
//   } else if (num > 60 ) {
//     console.log('Тебе точно сюда?');
//   } else {
//     console.log('Sorry, you are not enter!');
//   }
// };

// switch(num) {
//   case 15:
//     console.log('Потерпи еще годик!');
//     break;
//   case 16:
//       console.log('Задохи!');
//       break;
// }

// TODO => При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

// btn.onclick = function f1() {
//   let input = +inputAge.value;

//   if (input === 4) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// };

// TODO => Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

// const a21 = 13,
//       a22 = 9;

// btn.onclick = function f2() {
//   if (a21 > a22) {
//     out.innerHTML = a21;
//   } else {
//     out.innerHTML = a22;
//   }
// };

// TODO => Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число. Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

// let num1 = document.querySelector('.num1'),
//     num2 = document.querySelector('.num2');

// btn.onclick = function f3() {
//   if (num1 > num2) {
//     out.innerHTML = num1.value;
//   } else {
//     out.innerHTML = num2.value;
//   }
// };

// ! #4 Работаем с формами: input, range, textarea, checkbox...

// let password = document.querySelector('.password'),
//     btn = document.querySelector('button'),
//     btnTwo = document.querySelector('#btnTwo'),
//     checked = document.querySelector('#one'),
//     textArea = document.querySelector('#two');

// btn.onclick = () => {
//   console.log(password.value);
//   btn.style.backgroundColor = 'red';
// };

// btn.onclick = () => {
//   console.log(checked.checked);
//   let myCheckBox = checked;

//   if (myCheckBox.checked) {
//     console.log('Выбран');
//   } else {
//     console.log('Не выбран');
//   }
// };

// btnTwo.onclick = (event) => {
//   event.preventDefault();

//   let text = textArea;
//   console.log(text.value);
//   text.value = 'one';
// };

// btnTwo.onclick = (event) => {
//   event.preventDefault();

//   let form = document.querySelector('form');
//   console.log(form);
//   console.log(form.elements.three.value);
//   console.log(form.elements.two.value);
// };

// ! #5 Циклы в JavaScript (часть 1)

// const div = document.querySelectorAll('.one');
// console.log(div);
//
// for (let i = 0; i < div.length; i++) {
//   div[i].style.backgroundColor = 'pink';
//   div[i].onclick = two;
// }
//
// function two() {
//   console.log('work!!!');
// }
//
// let b = document.getElementsByClassName('one');
// console.log(b);
//
// const btn = document.querySelector('button');
//
// btn.onclick = () => {
//   let r = document.querySelectorAll('input[type="radio"]');
//   console.log(r);
//
//   for (let i = 0; i < r.length; i++) {
//     if (r[i].checked) {
//       console.log(r[i].value);
//     }
//   }
// };

// TODO => Task 1
// TODO => Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
// TODO => 1 2 3 4 5 6 7 8 9 ... 49 50
// TODO => от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

// TODO => Task 2
// TODO => Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
// TODO => 2 4 6 ... 122
// TODO => от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

// TODO => Task 3
// TODO => Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
// TODO => 25 24 23 22 . . 7
// TODO => от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.
/*
const b1   = document.querySelector('.b-1'),
      b2   = document.querySelector('.b-2'),
      b3   = document.querySelector('.b-3'),
      out1 = document.querySelector('.out-1'),
      out2 = document.querySelector('.out-2'),
      out3 = document.querySelector('.out-3');

let out = '';

b1.onclick = function t1() {
  for (let i = 0; i <= 50; i++) {
    out += i + ' ';
  }
  out1.innerHTML = out;
};

b2.onclick = function t2() {
  for (let i = 2; i <= 122; i+=2) {
    out += i + ' ';
  }
  out2.innerHTML = out;
};

b3.onclick = function t3() {
  for (let i = 25; i > 0; i--) {
    if (i === 6) {
      break;
    }
    out += i + ' ';
  }
  console.log(out);
  out3.innerHTML = out;
};
*/

// ! #6 Вложенные циклы в JavaScript (часть 2)
/*
let out = document.querySelector('.out');

// for (let i = 0; i < 5; i++) {
//   for (let k = 0; k < 10; k++) {
//     out.innerHTML += '*';
//   }
//   out.innerHTML += ' ';
// }

for (let i = 1; i <= 10; i++) {
  for (let k = 1; k <= 10; k++) {
    out.innerHTML += `${i} * ${k} = ${k * i} <br>`;
  }
  out.innerHTML += `<hr>`;
}
*/

// TODO => Task 1
// TODO => С помощью вложенных циклов, нарисуйте строку:
// TODO => ***_***_***_
// TODO => где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

// let out = document.querySelector('.out');

// for (let i = 0; i < 3; i++) {
//   for (let k = 0; k < 3; k++) {
//     out.innerHTML += `*`;
//   }
//   out.innerHTML += `_`;
// }

// TODO => Task 2
// TODO => С помощью вложенных циклов, нарисуйте строку:
// TODO => 1
// TODO => *_*_*_
// TODO => 2
// TODO => *_*_*_
// TODO => 3
// TODO => *_*_*_
// TODO => Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки
// TODO => ,знак подчеркивания и знак переноса.

// for (let i = 1; i <= 3; i++) {
//   for (let k = 0; k < 3; k++) {
//     out.innerHTML += `*_`;
//   }
//   out.innerHTML += `${i}<br>`;
// }

// TODO => Task 3
// TODO => С помощью вложенных циклов, нарисуйте строку:
// TODO => *_*_*_
// TODO => *_*_*_
// TODO => *_*_*_
// TODO => *_*_*_
// TODO => *_*_*_
// TODO => *_*_*_
// TODO => Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br, внутренний - звездочки,
// TODO => знак подчеркивания

// for (let i = 0; i < 4; i++) {
//   for (let k = 0; k < 3; k++) {
//     out.innerHTML += `*_`;
//   }
//   out.innerHTML += `<br>`;
// }

// ! #7 Функции и все о них
