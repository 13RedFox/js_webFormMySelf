"use strict";

/* let currentYear = 2020,
  carName = "Ford",
  carYear = 2015;

let carAge = currentYear - carYear;

if (carAge < 5) {
  console.log(carName + " меньше 5 лет");
} else if (carAge >= 5 && carAge <= 10) {
  console.log(carName + " от 5 до 10 лет");
} else {
  console.log(carName + " совсем не годится");
} */

//Funtion

/* let carName = "BMW",
  carYear = 2012,
  personYear = 1990;

function calculateAge(year) {
  let currentYear = 2020,
    result = currentYear - year;
  return result;
}

function checkAngLongAge(year, name, compareTo) {
  if (calculateAge(year) < compareTo) {
    console.log("Возраст " + name + " меньше " + compareTo + " лет");
  } else {
    console.log("Возраст " + name + " больше " + compareTo + " лет");
  }
}

checkAngLongAge(carYear, "Машины", 8);
checkAngLongAge(personYear, "Человека", 30); */

/* let sayHelloTo = function (name) {
  console.log("Привет, " + name);
};

sayHelloTo("Elena"); */

// STRING

/* let str1 = "Hello world!",
  personName = "Victor",
  message = "Человека зовут '" + personName + "'",
  message2 = 'Человека зовут "' + personName + '"',
  newMessage = "Hello world!!!";

console.log(message);
console.log(message2);
console.log(newMessage.length);
console.log(newMessage.toUpperCase());
console.log(newMessage.toLowerCase());
console.log(newMessage.charAt(0));
console.log(newMessage.indexOf("world"));
console.log(newMessage.substr(1, 3));
console.log(newMessage.substring(3));
 */

// Masive
/* 
let car = ["BMW", "Mazda", "Toyota", "VAZ"];

console.log(car);
console.log(car[1]);
console.log(car.length);

car.push('Audi');
console.log(car); 
*/

// Object
/* 
let person = {
  name: "Petrik",
  year: 1990,
  family: ["Elena", "Igor"],
  car: {
    year: 2010,
    model: "Ford",
  },
  calculateAge: function () {
    this.age = 2018 - this.year;
  },
};

console.log(person);
console.log(person.name);
console.log(person.year);

person.calculateAge();
 */

// Циклы

/* let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
} */
