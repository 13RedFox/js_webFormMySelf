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

let carName = "BMW",
  carYear = 2012,
  personYear = 1990;

function calculateAge(year) {
  let currentYear = 2020,
    result = currentYear - year;
  return result;
}

function checkAngLongAge(year){
  if (calculateAge(year) < 10) {
    console.log("Возраст меньше 10 лет");
  } else {
    console.log("Возраст больше 10 лет");
  }
}

checkAngLongAge(carYear);
checkAngLongAge(personYear);
