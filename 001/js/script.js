"use strict";

/* // Делегирование событий

let p = document.querySelectorAll("p");

document.getElementById("wrapper").addEventListener("click", function (event) {
  let tagName = event.target.tagName.toLowerCase();

  if (tagName === "p") {
    event.target.style.color = "green";
  }
}); */

// for (let i = 0; i < p.length; i++) {
//   p[i].addEventListener("click", function (event) {
//     event.target.style.color = "blue";
//   });
// }

/* 
// Всплытие и погружение:

let divs = document.querySelectorAll("div"),
  link = document.querySelector("a");

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function (e) {
    event.stopPropagation();
    console.log(this.getAttribute("id"));
  });
}

link.addEventListener("click", handleLinkClick);

function handleLinkClick(event) {
  event.preventDefault();

  let div = divs[0];

  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
} */

/* 
// EVENTS:

let button = document.querySelector("button"),
  title = document.querySelector("h1"),
  input = document.querySelector("input");

function buttonHandler() {
  title.textContent = input.value;
}

title.addEventListener("mouseenter", function () {
  this.style.color = 'yellow'
  this.style.backgroundColor = '#000';
  this.style.border = '1px solid red'
});

title.addEventListener("mouseleave", function () {
  this.style.color = 'aqua';
  this.style.backgroundColor = '#fff';
});

button.addEventListener("click", buttonHandler); */

/* 
// Class
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');

box1.classList.add('red');
box2.classList.remove('blue');
let hasClass = box2.classList.contains('blue');
console.log(hasClass);

if (hasClass) {
  box2.classList.remove('blue');
} else {
  box2.classList.add('blue');
} */

/* 
// Attribute:

let a = document.querySelector("a"),
  oldHref = a.getAttribute("href");

a.setAttribute("href", "https://youtube.com");
a.setAttribute('title', 'go to YouTube');
a.textContent = "Youtube";

console.log(a.getAttribute("title")); */

/* let div = document.getElementById("playground"),
  p = document.getElementsByClassName("text"),
  h1 = document.getElementsByTagName("h1");

console.log(div);
console.log(p);
console.log(h1); */

/* let div = document.querySelector('#playground'),
p = document.querySelectorAll('.text'),
h1 = document.querySelector('h1')

console.log(div);
console.log(p);
console.log(h1);
 */
