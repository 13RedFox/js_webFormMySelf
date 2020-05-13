"use strict";
/* 
// Переменные Let Const
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);

//   }, 2000)
// }

const HEX = "#FFAABB";
const array = [1, 2];
const obj = { a: 1 };

array.unshift(4);
obj.b = 2;

console.log(array);
console.log(obj);

document.querySelector("h1").style.color = HEX;
 */

/* 
// Стрелочные функции
// ES5
// function getAge(year) {
//   const current = new Date().getFullYear();
//   return current - year;
// }
// console.log(getAge(1989));

// ES6
// const calculateAge = (year) => {
//   const current = new Date().getFullYear();
//   return current - year;
// };
// console.log(calculateAge(1989));

// const getAge = (year) => {
//     const current = new Date().getFullYear();
//     return current - year;
// };

// const getAge = (year) => new Date().getFullYear() - year;

// console.log(getAge(1980));

const person = {
  age: 25,
  name: "Max",
  logNameWithTimeout() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};
 */

/* 
// Параметры по умолчанию
const createPost = (title, text, date = new Date().toLocaleDateString()) => {
  return {
    title,
    text,
    date,
  };
};

const post = createPost("Скоро новый год!", "Скоро будет 2021 год!");
console.log(post);
 */

/* 
// Объекты
const createCar = (name, model) => ({ name, model });

const ford = createCar("Ford", "Raptor");
console.log(ford);

const yearField = "year";
const bmw = {
  name: "BMW",
  ["model"]: "X6M",
  [yearField]: 2018,

  logFields() {
    const { name, year, model } = this;
    console.log(name, model, year);
  },
};

console.log(bmw);
bmw.logFields();

const { year } = bmw;
console.log(year);
 */

/* 
// Операторы Rest и Spread
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = form.title.value;
  const text = form.text.value;
  const description = form.description.value;
  saveForm(title, text, description);
});

// Spread
// function saveForm(data) {
//   const formData = {
//     date: new Date().toLocaleDateString(),
//     ...data,
//   };
//   console.log("Form data: ", formData);
// }

// Rest
function saveForm(...args) {

  const [title, text ,description] = args
  const formData = {
    date: new Date().toLocaleDateString(),
    title, text ,description
  };
  console.log("Form data: ", formData);
} */

/* 
// Строки
const createLink = ({ path, name }) => {
  return `<a href="${path}" target="_blank">${name}</a>`;
};

const ul = document.querySelector("ul");
const google =`<li>${createLink({ path: "https://google.com", name: "Google" })}</li>`;
const youtube =`<li>${createLink({ path: "https://youtube.com", name: "YouTube" })}</li>`;

ul.insertAdjacentHTML("afterbegin", google);
ul.insertAdjacentHTML("afterbegin", youtube);

const strToLog = `
  Hello
  World
    I am
      New Tab
`

console.log(strToLog);
 */

/* 
// Классы и наследование
class RootElement {
  constructor(tagName = "div") {
    this.$el = document.createElement(tagName);
    this.$el.style.marginBottom = "20px";
  }
  hide() {
    this.$el.style.opacity = '0';
  }
  show() {
    this.$el.style.opacity = "1";
  }
  append() {
    document
      .querySelector(".wrapper")
      .insertAdjacentElement("beforeend", this.$el);
  }
}

class Box extends RootElement {
  constructor(color, size = 150, tagName) {
    super(tagName);
    this.color = color;
    this.size = size;
  }
  create() {
    this.$el.style.background = this.color;
    this.$el.style.width = this.$el.style.height = `${this.size}px`;

    this.append();

    return this;
  }
}

class Circle extends RootElement {
  constructor(color) {
    super();
    this.color = color;
  }
  create() {
    this.$el.style.borderRadius = "50%";
    this.$el.style.width = this.$el.style.height = `120px`;
    this.$el.style.background = this.color;
    this.append();
    return this;
  }
}

const redBox = new Box("red", 100, "div").create();
const blueBox = new Box("blue").create();
const circle = new Circle("green").create();

circle.$el.addEventListener("mouseenter", () => {
  circle.hide();
});

circle.$el.addEventListener("mouseleave", () => {
  circle.show();
});
 */

// Задача: написать свой плагин
class Dropdown {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.items = options.items;

    this.$el.querySelector(
      ".dropdown__label"
    ).textContent = this.items[0].label;

    this.$el.addEventListener("click", (event) => {
      if (event.target.classList.contains("dropdown__label")) {
        if (this.$el.classList.contains("open")) {
          this.close();
        } else {
          this.open();
        }
      } else if (event.target.tagName.toLowerCase() === "li") {
        this.select(event.target.dataset.id);
      }
    });

    const itemsHTML = this.items
      .map((i) => {
        return `
        <li data-id="${i.id}">${i.label}</li>
      `;
      })
      .join(" ");

    this.$el
      .querySelector(".dropdown__menu")
      .insertAdjacentHTML("afterbegin", itemsHTML);
  }

  select(id) {
    const item = this.items.find(i => i.id === id)
    this.$el.querySelector('.dropdown__label').textContent = item.label
    this.close()
    
  }

  open() {
    this.$el.classList.add("open");
  }

  close() {
    this.$el.classList.remove("open");
  }
}

const dropdown = new Dropdown("#dropdown", {
  items: [
    { label: "Moscow", id: "msk" },
    { label: "Sank-Piterburg", id: "spb" },
    { label: "Novosibirsk", id: "nsk" },
    { label: "Krasnodar", id: "krdr" },
  ],
});
