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