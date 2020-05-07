"use strict";
/* 
// Хранение данных в localStorage
document.querySelector("button").addEventListener("click", function (event) {
  let value = document.querySelector("input").value;
  let obj = {
    text: value,
  };

  localStorage.setItem("headerText", JSON.stringify(obj));
});

document.addEventListener("DOMContentLoaded", function () {
  let obj;
  try {
    obj = JSON.parse(localStorage.getItem("headerText"));
  } catch (e) {}

  if (obj && obj.text && obj.text.trim()) {
    document.querySelector("h1").textContent = obj.text;
  }
});
 */

/* 
//Обьект Math / JSON
let num = 2.4;
console.log(Math.random());
console.log(Math.floor(num));
console.log(Math.ceil(num));

let person = {
  name: 'Max',
  age: 25,
  car: {
    model: 'Ford'
  },
  job: 'Fronend',
  friends: ['Elena', 'Igor']
}

let str = JSON.stringify(person)

console.log(str);
console.log(JSON.parse(str));
 */

/* 
// Методы массивов
let str = "1,2,3,4,5,6,7,8";

let array = str.split(",");

console.log(array);
console.log(array.join("*"));
console.log(array.reverse());
array.splice(1, 0, "11");
console.log(array);

let newArray = array.concat([1, 2]);
console.log(newArray);

let objArray = [
  {
    name: "Max",
    age: 27,
  },
  {
    name: "Elena",
    age: 20,
  },
  {
    name: "Vic",
    age: 24,
  },
];

let foundPerson = objArray.find(function (person) {
  return person.age === 20;
});

console.log(foundPerson);

let oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (i) {
  return i % 2 !== 0;
});

console.log(oddArray);

let numArray = array.map(function (i) {
  return parseInt(i);
});
console.log(numArray);
 */

/* 
// Взаимодействия с пользователем
document.querySelector("#alert").addEventListener("click", function () {
  alert("Вы успешно кликнули по кнопке!");
});

document.querySelector("#confirm").addEventListener("click", function () {
  let decision = confirm("Вы уверены в том, чтоб нажать на кнопку?");
  if (decision) {
    alert("Вы успешно кликнули по кнопке!");
  }
});

document.querySelector("#prompt").addEventListener("click", function () {
  let age = prompt("Введите свой возвраст", '18');

  if (age >= 18) {
    alert("Вы можете пройти");
  } else {
    alert("Вы слишком еще молоды");
  }
});

console.log('Console.log');
console.warn('Console.warn');
console.info('Console.info');
console.error('Console.error');
 */
