'use strict';
let num = 50;

if (num < 49) {
  console.log('false')
} else if (num > 100) {
  console.log("Многовато")
} else {
  console.log('true')
}

switch (num) {
  case num < 49:
    console.log('false');
    break;
  case num > 100:
    console.log('Много')
    break;
  case num === 50:
    console.log('true');
    break;
}