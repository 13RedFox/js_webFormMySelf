"use strict";
/* 
// Интервалы и таймеры
// setTimeout(function() {
//   alert('Hello timeout')
// }, 2000)

let counter = 0;
const interval = setInterval(function () {
  console.log(++counter);
}, 1000)

setTimeout(function() {
  clearInterval(interval)
}, 5000)
 */

/* 
// Старый поход: Callbacks
console.log("Клиент: хочу получить список пользователей");
console.log("...");

setTimeout(function () {
  console.log("Сервер: запрашиваю список пользователей в БД");
  console.log("...");

  setTimeout(function () {
    console.log("БД: формирую список пользователей");
    console.log("...");

    setTimeout(function () {
      console.log("Сервер: трансформирую данные для клиента");
      console.log("...");

      setTimeout(function () {
        console.log("Клиент: получил данные и отображаю их");
      }, 1000);
    }, 500);
  }, 500);
}, 1000);
 */

/* 
// Как работает Promise
console.log("Клиент: хочу получить список пользователей");
console.log("...");

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Сервер: запрашиваю список пользователей в БД");
    console.log("...");
    resolve();
  }, 1000);
});

promise.then(function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let users = [
        { uid: "id1", name: "Maxim" },
        { uid: "id2", name: "Elena" },
      ];
      console.log("БД: формирую список пользователей", users)
      console.log("...")
      resolve(users)
    }, 500)
  })
})

.then(function (dbUsers) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Сервер: трансформирую данные для клиента");
      console.log("...");
      let users = dbUsers.map(function (user) {
        return {
          id: user.uid,
          firstName: user.name,
          timestamp: Date.now()
        }
      })
      resolve(users)
    }, 500)
  })
})

.then(function (users) {
  setTimeout(function () {
    console.log("Клиент: получил данные и отображаю их", users);
  }, 1000)
})

.catch(function (error) {
  console.log(error)
})

// .finaly(function () {
//   console.log("Finaly");
// });
 */

/* 
// Метод Fetch
document.querySelector('#load').addEventListener('click', load)

function load() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  console.log('Loading started');

  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function(data) {
      let ul = document.querySelector('#list')

      let html = data.map(function(item) {
        return '<li>'+ item.id + ' ' + item.name + ' (' + item.email +')</li>'
      })
      
      ul.insertAdjacentHTML("afterbegin", html.join(' '))
      
    })
}
 */

/* 
// Операторы: Async Await
document.querySelector('#load').addEventListener('click', load)

async function load() {
  const url = 'https://jsonplaceholder.typicode.com/users'

  let response = await fetch(url)
  let data = await response.json()
  let html = data.map(function(item) {
    return '<li>'+ item.id + ' ' + item.name + ' (' + item.email +')</li>'
  })
      
  document.querySelector('#list').insertAdjacentHTML("afterbegin", html.join(' '))
}
 */

/* 
// Еще о Promise
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

const p1 = sleep(1500).then(function () {
  return {
    name: 'Promise 1500'
  }
});

const p2 = sleep(3000).then(function () {
  return {
    name: 'Promise 3000'
  }
});

async function start() {
  const dataAll = await Promise.all([p1, p2])
  
  const dataRace = await Promise.race([p1,p2])
  console.log('dataAll', dataAll);
  console.log('dataRace', dataRace);
  
}

start()
 */

// Задание: реализовать промисы
class MyPromise {
  constructor(callback) {
    this.onCatch = null
    this.onFinally = null
    this.thenCbs = []

    function resolver(data) {
      this.thenCbs.forEach(cb => {
        data = cb(data)
      })

      if (this.onFinally) {
        this.onFinally()
      }
    }

    function rejecter(error) {
      if (this.onCatch) {
        this.onCatch(error)
      }

      if (this.onFinally) {
        this.onFinally()
      }
    }

    callback(resolver.bind(this), rejecter.bind(this))
  }

  then(cb) {
    this.thenCbs.push(cb)
    return this
  }

  catch(cb) {
    this.onCatch = cb
    return this
  }

  finally(cb) {
    this.onFinally = cb
    return this
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  },2000)

  
})

promise
  .then(num => num *= 2)
  .catch(err => console.log(err))
  .then(num => num *= 3)
  .finally(() => console.log('finally'))
  .then(num => console.log('Done!', num))