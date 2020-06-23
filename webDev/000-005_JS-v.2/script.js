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

// TODO => При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с
// TODO => числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

// btn.onclick = function f1() {
//   let input = +inputAge.value;

//   if (input === 4) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// };

// TODO => Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить
// TODO => переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных
// TODO => не рассматриваем.

// const a21 = 13,
//       a22 = 9;

// btn.onclick = function f2() {
//   if (a21 > a22) {
//     out.innerHTML = a21;
//   } else {
//     out.innerHTML = a22;
//   }
// };

// TODO => Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3.
// TODO => Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число.
// TODO => Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

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

// const f1 = document.querySelector('.f-1'),
//       out = document.querySelector('.out');
//
// function one() {
//   console.log('work!');
// }
//
// one();
//
// f1.onclick = one;
//
// function two() {
//   console.log('work 123');
//   return 54;
// }
//
// function multi(x, y) {
//   return x * y;
// }
//
// console.log(multi(2, 3));
// console.log(multi(4, 23));
// console.log(multi(43, 52));

// TODO => Task 1, Task 2, Task 3.
// TODO => Напишите функцию t1, которая при нажатии кнопки выводит в out-1 переменную a1.

// const one = document.querySelector('.one'),
//       two = document.querySelector('.two'),
//       t31 = document.querySelector('.t3-1'),
//       t32 = document.querySelector('.t3-2'),
//       out = document.querySelector('.out'),
//       out1 = document.querySelector('.out1'),
//       out21 = document.querySelector('.out2-1'),
//       out22 = document.querySelector('.out2-2'),
//       a1 = 8,
//       a2 = 8;
//
// function t1() {
//   out.innerHTML = a1;
// }
//
// one.onclick = t1;
//
// function t2() {
//   return a2;
// }
//
// two.onclick = () => {
//   out1.innerHTML = t2();
// };
//
// function t3(a, b) {
//   return a + b;
// }
//
// t31.onclick = () => {
//   out21.innerHTML = t3(3, 4);
// };
//
// t32.onclick = () => {
//   out22.innerHTML = t3(5, 6);
// };

// ! #9 Работаем с DOM

// const one = document.querySelector('.one'),
//       toggle = document.querySelector('.toggle');
//
// one.style.width = '150px';
// one.style.paddingBottom = '40px';
//
// // console.log(one.style);
// one.classList.add('two', 'three');
// one.classList.remove('two');
//
// toggle.onclick = function() {
//   this.classList.toggle('two');
// };

// * Атрибуты
// console.log(one.getAttribute('data'));
//
// let gas = document.querySelectorAll('.gas');
// for (let i = 0; i < gas.length; i++) {
//   gas[i].onclick = function() {
//     let gallons = document.querySelector('.gallons').value;
//     let amount = this.getAttribute('data');
//     console.log(gallons * amount);
//   };
// }
//
// let a = document.createElement('div');
// a.textContent = 'Hello';
// a.classList.add('two');
//
// document.querySelector('.test').appendChild(a);
//
// console.log(a);

// TODO => Task 1.
// TODO => Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px,
// TODO => высоту 40px.

// TODO => Task 2.
// TODO => По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.

// TODO => Task 3.
// TODO => По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у блока out-3 класс .bg-3

// const btn1 = document.querySelector('.b-1'),
//       btn2 = document.querySelector('.b-2'),
//       btn3 = document.querySelector('.b-3'),
//       out1 = document.querySelector('.out-1'),
//       out2 = document.querySelector('.out-2'),
//       out3 = document.querySelector('.out-3');

// btn1.onclick = function f1() {
//   out1.style.width = '200px';
//   out1.style.height = '40px';
// };
//
// btn2.onclick = function f2() {
//   out2.classList.add('bg-2');
// };
//
// btn3.onclick = function f3() {
//   out3.classList.remove('bg-3');
// };

// ! #10 Массивы в JavaScript

// let a = 'Ivan';
// let b = 37;
// let z37 = 'Oven';
// let c = ['Oven', 1, 1, 19];
// let man = ['Ivan', 'Ivanov', 'male', 176, 93];
// console.log(c);
// console.log(man);
// man[0] = 'Serhii';
// console.log(man);

// let a = [1,2,3,4,5];
// console.log(a);
//
// let t = a[0];
// a[0] = a[a.length - 1];
// a[a.length - 1] = t;
// console.log(a);
//
// let out = '';
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0) {
//     out += a[i] + ' ';
//   }
// }
// document.querySelector('.out').innerHTML = out;
//
// let b = [3, 5, 2, 6, 9, 4, 8, 1, 7];
//
// let max = b[0];
// for (let i = 0; i < b.length; i++) {
//   if (b[i] > max) {
//     max = b[i];
//   }
// }
// console.log('max: ' + max);
//
// let sum = 0;
// for (let i = 0; i < b.length; i++) {
//   sum += b[i];
// }
// console.log('sum: ' + sum);

// TODO => Task 1.
// TODO => Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию
// TODO => кнопки b-1.

// TODO => Task 2.
// TODO => Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон
// TODO => вывода из кода в JS. Вывод - по нажатию кнопки b-2.

// TODO => Task 6.
// TODO => Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите
// TODO => массив на страницу в div-6. Разделитель - пробел.

// const b1 = document.querySelector('.b-1'),
//       b2 = document.querySelector('.b-2');
//
// const arr1 = ['One', 'Two', 'TWEEN', 3, 5, 9, false, 13, true];
// const arr6 = ['Serhii', 'Libra', 18, 10,];
//
// b1.onclick = () => {
//   let out = document.querySelector('.out-1');
//   for (let i = 0; i < arr1.length; i++) {
//     out.innerHTML += arr1[i];
//   }
// };
//
// b2.onclick = () => {
//   let out = document.querySelector('.out-2');
//   for (let i = 0; i < arr6.length; i++) {
//     out.innerHTML += arr6[i] + ' ';
//     console.log(arr6[i]);
//   }
// };

// ! #11 Добавление и удаление элементов в массиве, pop, push,splice

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = ['a', 'b', 'c', 'd', 'e'];
//
// console.log(a.length);
// console.log(a.push(10,13,44,55,66));
// console.log(a);
// console.log(b.push('f', 'g'));
// console.log(b);
//
// b.pop();
// console.log(b);
//
// a.splice(3,3, 'hi');
// console.log(a);

// TODO => Task 1.
// TODO => Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и добавляем его
// TODO => в массив. После чего выводит массив в .out-1. Поскольку мы будем выводить массив d1 неоднократно, то давайте
// TODO => вывод массива сделаем отдельной функцией, showArr - она подготовлена. Изучите ее - это хороший способ
// TODO => оптимизировать код.

// const b1 = document.querySelector('.b-1'),
//       input = document.querySelector('.i-1'),
//       out = document.querySelector('.out-1');
//
// const d1 = [33,'best', 66, 'best'];
// b1.onclick = function f1() {
//   let inputValue = input.value;
//   d1.push(inputValue);
//   out.innerHTML += d1;
// };

// ! #12 Двумерные массивы

// let a = [4, 5, 6, 7];
// let b = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
// ];
//
// console.log(b);

// for (let i = 0; i < b.length; i++) {
//   // console.log(b[i]);
//   let c = b[i];
//   for (let k = 0; k < c.length; k++) {
//     console.log(c[k]);
//   }
// }
// let out = '';

// for (let i = 0; i < b.length; i++) {
//   for (let k = 0; k < b[i].length; k++) {
//     // console.log(b[i][k]);
//     out += b[i][k] + ' ';
//   }
//   out += '<br>';
// }
// document.querySelector('.out').innerHTML = out;
//
// for (let i = 0; i < b.length; i++) {
//   for (let k = 0; k < b[i].length; k++) {
//     if (b[i][k] > 4) {
//       out += b[i][k] + ' ';
//     }
//   }
//   out += '<br>';
// }
//
// console.log(out);

// let d = [ 1,0,0,0,0,0];
// let k = 0;
//
// document.querySelector('button').onclick = () => {
//   if (k + 1 < 6) {
//     d[k] = 0;
//     d[k + 1] = 1;
//     k++;
//   }
//   document.querySelector('.out2').innerHTML = d;
// };

// ! #13 Ассоциативный массив (объект) в JavaScript

// const a = {
//   a: 5,
//   b: 'Hello',
//   z: 'Hi',
//   y: 1999
// };
//
// console.log(a);
// console.log(a.z);
//
// let out = '';
//
// for (let key in a) {
//   out += a[key] + ' ';
// }
// document.querySelector('.out').innerHTML = out;

// ! #15 Set в JavaScript
