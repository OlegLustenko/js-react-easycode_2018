/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут,
 *  который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
  someMethod = () => {

  };
  someVariable = 10;

  constructor(options) {
    this.xxx = options.xxx;
    const ONE_SECOND = 1000;
    let timer = setTimeout(() => {
      console.log('the web server is down');
      this.timer = null;
    }, ONE_SECOND * 5);
  }

  _resetCounter() {
    this.counter = 5;
  }


  query() {
    const ONE_SECOND = 1000;
    if (this.timer) {
      // во второй раз я тут
      this._resetCounter();
      clearInterval(this.interval);
      clearTimeout(this.timer);
    }

    this._resetCounter();

    this.interval = setInterval(() => {
      console.log(this.counter--);
      if(this.counter === 0) {
        clearInterval(this.interval);
      }
    }, ONE_SECOND);

    this.timer = setTimeout(() => {
      console.log('the web server is down');
      this.timer = null;
    }, ONE_SECOND * 5);
  }

}

const dataBase = new DataBase();
dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')
