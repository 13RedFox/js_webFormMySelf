'use strict';

fetch('http://api.openweathermap.org/data/2.5/weather?id=704147&appid=09c167d56f45bb57eda495fffcb6742a')
  .then(function (resp) {return resp.json()})
  .then(function (data) {
    console.log(data);
    document.querySelector('.card__city').textContent = data.name;
    document.querySelector('.card__temp').innerHTML = `Temperature: <span class="card__temp-num">${(data.main.temp - 273).toFixed(1)}&deg;</span>`;
    document.querySelector('.disclaimer').innerHTML = `Weather: <span class="card__temp-weather">${data.weather[0].description}</span>`;
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.speed').innerHTML = `Wind: ${data.wind.speed}`;
    document.querySelector('.out-temp').innerHTML = `Temperature: ${(data.main['feels_like'] - 273).toFixed(1)}&deg;`;
  })
  .catch(function () {
    // ! catch any errors
  })
