"use strict";

/* 
// Как работают прототипы
let car = {
  name: "Ford",
  year: 2015,
};

function Car(name, year) {
  this.name = name;
  this.year = year;
}

Car.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

let ford = new Car("BMW", 2015);
let MB = new Car("MB", 2018);

ford.color = "red";
console.log(ford);
console.log(bmw);
 */

/* 
// Создание и настройка объектов
let ford = Object.create(
  {
    calculateDistancePerYear: function () {
      Object.defineProperty(this, "distancePerYear", {
        value: Math.ceil(this.distance / this.age),
        enumerable: true,
        writable: false,
        configurable: false,
      });
    },
  },
  {
    name: {
      value: "Ford",
      enumerable: true,
      writable: false,
      configurable: false,
    },
    model: {
      value: "Focus",
      enumerable: true,
      writable: false,
      configurable: false,
    },
    year: {
      value: 2015,
      enumerable: true,
      writable: false,
      configurable: false,
    },
    distance: {
      value: 120500,
      enumerable: true,
      writable: true,
      configurable: false,
    },
    age: {
      enumerable: true,
      get: function () {
        console.log("Получаем возраст");
        return new Date().getFullYear() - this.year;
      },
      set: function () {
        console.log("Устанавливаем значение");
      },
    },
  }
);

ford.calculateDistancePerYear();

for (let key in ford) {
  if (ford.hasOwnProperty(key)) {
    console.log(key, ford[key]);
  }
}
 */

/* 
// Итерация ключей объекта
let person = {
  name: "Max",
  age: 28,
  job: "Frontend",
};

// for (let key in person) {
//   if(person.hasOwnProperty(key))
//   console.log(person[key]);
// }

Object.keys(person).forEach(function (key) {
  console.log(person[key]);
});
 */

/* 
// Как работают замыкания

let createCounter = function (counterName) {
  let counter = 0;

  return {
    incriment: function () {
      counter++;
    },
    decriment: function () {
      counter--;
    },
    getCounter: function () {
      return counter;
    },
  };
};

let counterA = createCounter("Counter A");
let counterB = createCounter("Counter B");

counterA.incriment();
counterA.incriment();
counterA.incriment();
counterB.decriment();
counterB.decriment();
 */

/* 
// Что такое контекст
let person = {
  age: 28,
  name: "Max",
  job: "Frontend",
  displayInfo: function (ms) {
    setTimeout(
      function () {
        console.log("Name: ", this.name);
        console.log("Job: ", this.job);
        console.log("Age: ", this.age);
      }.bind(this),
      ms
    );
  },
};

person.displayInfo(500);
 */

/* 
// Привязка контекста
function printObject(objName) {
  console.log("Printing object ", objName);
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      console.log("[" + key + "]", this[key]);
    }
  }
}

let person = {
  firstName: "Max",
  job: "Backend",
  age: 29,
  friends: ["Elena", "Igor"],
};

let car = {
  name: "Ford",
  model: "Focus",
  age: 2017,
};

let printPerson = printObject.bind(person);
printPerson("Person");
printObject.call(car, "Car");
printObject.apply(person, ["Person"]);
 */

// Задача: определить метод для всех массивов
let a = [1, 2, 3];
let b = [5, "Hello", 6];

Array.prototype.double = function () {
  let newArray = this.map(function (item) {
    if (typeof item === "number") {
      return Math.pow(item, 2);
    }
    if (typeof item === "string") {
      return (item += item);
    }
  });
  return newArray;
};

let newA = a.double();
let newB = b.double();

console.log("A", newA);
console.log("B", newB);
